import React from 'react';
import { render } from '@testing-library/react';
import RoverSelector from '../widgets/RoverSelector';
import {rovers} from '../pages/ConnectedRoverSearch';

describe('RoverSelector', ()=> {

    describe('rendering', ()=>{
        describe('selection', ()=>{

            describe('all selected', ()=> {
                it('should select all the rovers', ()=>{
                    const all = {spirit: true, opportunity: true, curiosity: true};
                    const { getAllByTestId } = render(<RoverSelector roversActive={all} rovers={rovers} roverSelection={all} onRoverSelection={()=>{}} />);
                    const inputs = getAllByTestId("rover-selected");
                    inputs.forEach((input) => {
                        expect(input.checked).toBe(true);
                    });
                });
            });

            describe('none selected', ()=>{
                it('should select no rovers', ()=> {
                    const none = {spirit: false, opportunity: false, curiosity: false};
                    const { getAllByTestId } = render(<RoverSelector roversActive={none} rovers={rovers} roverSelection={none} onRoverSelection={()=>{}} />);
                    const inputs = getAllByTestId("rover-selected");
                    inputs.forEach((input) => {
                        expect(input.checked).toBe(false);
                    });
                });
            });

        });

        describe('activation', ()=>{
            const inactiveCssClassExpression = /.*RoverSelector-inactive/;
            const roverDivExpression = /rover-div-.+/;

            describe('all active', ()=>{
                it('should not have the inactive class', ()=>{
                    const all = {spirit: true, opportunity: true, curiosity: true};
                    const { getAllByTestId } = render(<RoverSelector roversActive={all} rovers={rovers} roverSelection={all} onRoverSelection={()=>{}} />);
                    const divs = getAllByTestId(roverDivExpression);
                    divs.forEach((div) => {
                        expect(div.className).not.toMatch(inactiveCssClassExpression);
                    });
                });
            });

            describe('all inactive', ()=>{
                it('should have the inactive class', ()=>{
                    const all = {spirit: false, opportunity: false, curiosity: false};
                    const { getAllByTestId } = render(<RoverSelector roversActive={all} rovers={rovers} roverSelection={all} onRoverSelection={()=>{}} />);
                    const divs = getAllByTestId(roverDivExpression);
                    divs.forEach((div) => {
                        expect(div.className).toMatch(inactiveCssClassExpression);
                    });
                });
            });

            describe('mixed', ()=>{
                it('should have the inactive class for inactive rovers', ()=>{
                    const activation = {spirit: false, opportunity: true, curiosity: true};
                    const { getByTestId } = render(<RoverSelector roversActive={activation} rovers={rovers} roverSelection={activation} onRoverSelection={()=>{}} />);
                    
                    Object.keys(activation).forEach((roverName) => {
                        const div = getByTestId(`rover-div-${roverName}`);
                        if (activation[roverName]) {
                            expect(div.className).not.toMatch(inactiveCssClassExpression);
                        } else {
                            expect(div.className).toMatch(inactiveCssClassExpression);
                        }
                    });
                });
            });
        });
    });
});