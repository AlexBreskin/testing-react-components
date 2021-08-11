import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import CameraSelection from './CameraSelection';

describe('CameraSelection', () => {

    describe('rendering', () => {
        let container,select;
        const cameras = {
            BC: "Big camera",
            LC: "Little camera"
        };
        beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);
            ReactTestUtils.act(()=>{
                ReactDOM.render(<CameraSelection camera="LC" cameras={cameras} onCameraSelected={()=>{}} />, container);
            });
            select = container.querySelector('select');
          });
          
          afterEach(() => {
            document.body.removeChild(container);
            container = null;
          });

        it("should render a select element", () => {
            expect(select).toBeDefined();
        });
        it("should have 2 options", ()=>{
            expect(select.length).toBe(2);
        });
        it("should have LC (Little Camera) selected", ()=>{
            expect(select.value).toBe("LC");
            expect(select.selectedOptions[0].text).toBe('Little camera');
        });
    });
});