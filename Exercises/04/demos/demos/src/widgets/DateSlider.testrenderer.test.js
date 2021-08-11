import React from 'react';
import TestRenderer from 'react-test-renderer';
import DateSlider from './DateSlider';
import {solToDate} from '../services/sols';

describe('DateSlider', () => {

    describe('change', () => {
        it('should publish the selected date', () => {
            const fn = jest.fn();
            const tr = TestRenderer.create(
                <DateSlider earth_date="2017-5-13" onDateChanged={fn} />
            );

            const input = tr.root.findByProps({"data-testid": "date-slider"});
            TestRenderer.act(() => { 
                input.props.onChange({ target: { value: '3877' } }); 
            });
            
            expect(fn.mock.calls).toEqual([
                [solToDate(3877)]
            ]);
        });
    });

});