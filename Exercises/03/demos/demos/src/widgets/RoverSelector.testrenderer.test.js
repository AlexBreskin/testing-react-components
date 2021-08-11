import React from 'react';
import TestRenderer from 'react-test-renderer';
import {rovers} from '../pages/ConnectedRoverSearch';
import RoverSelector from './RoverSelector';


describe('RoverSelector', ()=>{

    describe('rendering', ()=>{

        describe('selection', ()=>{

            describe('all selected', ()=> {
                it('should select all the rovers', ()=>{
                    const all = {spirit: true, opportunity: true, curiosity: true};
                    const tr = TestRenderer.create(<RoverSelector roversActive={all} rovers={rovers} roverSelection={all} onRoverSelection={()=>{}} />);
                    const inputs = tr.root.findAllByProps({"data-testid": 'rover-selected'});
                    inputs.forEach((input) => {
                        expect(input.props.checked).toBe(true);
                    });
                });
            });

            describe('none selected', ()=>{
                it('should select no rovers', ()=> {
                    const none = {spirit: false, opportunity: false, curiosity: false};
                    const tr = TestRenderer.create(<RoverSelector roversActive={none} rovers={rovers} roverSelection={none} onRoverSelection={()=>{}} />);
                    const inputs = tr.root.findAllByProps({"data-testid": 'rover-selected'});
                    inputs.forEach((input) => {
                        expect(input.props.checked).toBe(false);
                    });
                });
            });

        });

        
        describe('activation', ()=>{
            const inactiveCssClassExpression = /.*RoverSelector-inactive/;
            const roverDivPrefix = 'rover-div-';

            describe('all active', ()=>{
                it('should not have the inactive class', ()=>{
                    const all = {spirit: true, opportunity: true, curiosity: true};
                    const tr = TestRenderer.create(<RoverSelector roversActive={all} rovers={rovers} roverSelection={all} onRoverSelection={()=>{}} />);
                    const divs = tr.root.findAll((instance) => (instance.props['data-testid'] || "").startsWith(roverDivPrefix));
                    divs.forEach((div) => {
                        expect(div.props.className).not.toMatch(inactiveCssClassExpression);
                    });
                });
            });

            describe('all inactive', ()=>{
                it('should have the inactive class', ()=>{
                    const all = {spirit: false, opportunity: false, curiosity: false};
                    const tr = TestRenderer.create(<RoverSelector roversActive={all} rovers={rovers} roverSelection={all} onRoverSelection={()=>{}} />);
                    const divs = tr.root.findAll((instance) => (instance.props['data-testid'] || "").startsWith(roverDivPrefix));
                    divs.forEach((div) => {
                        expect(div.props.className).toMatch(inactiveCssClassExpression);
                    });
                });
            });

            describe('mixed', ()=>{
                it('should have the inactive class for inactive rovers', ()=>{
                    const activation = {spirit: false, opportunity: true, curiosity: true};
                    const tr = TestRenderer.create(<RoverSelector roversActive={activation} rovers={rovers} roverSelection={activation} onRoverSelection={()=>{}} />);
                    Object.keys(activation).forEach((roverName) => {
                        const div = tr.root.findAll((instance) => (instance.props['data-testid'] || "") === (roverDivPrefix + roverName))[0];
                        if (activation[roverName]) {
                            expect(div.props.className).not.toMatch(inactiveCssClassExpression);
                        } else {
                            expect(div.props.className).toMatch(inactiveCssClassExpression);
                        }
                    });
                });
            });
        });
    });
});