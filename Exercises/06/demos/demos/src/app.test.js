import { render, fireEvent, wait } from '@testing-library/react';
import { App } from './App';
import { dateToSol } from './services/sols';

describe('App', () => {

    describe('initial render', () => {
        it('should select Sep 28 2019', () => {
            const { queryByTestId } = render(
                App
            );
            const dateLabel = queryByTestId('date-label');
            const sliderInput = queryByTestId('date-slider');
            expect(dateLabel).toBeDefined();
            expect(dateLabel.textContent).toBe('2019-09-28');
            expect(sliderInput).toBeDefined();
            expect(sliderInput.value).toBe(dateToSol('2019-09-28').toString());
        });
    });

    describe('selecting a pre-curiosity day and changing criteria', () => {
        it('should show the correct number of images', async () => {
            jest.setTimeout(10000);
            const day = '2007-11-28';
            const renderResult = render(
                App
            );
            const dateLabel = renderResult.queryByTestId('date-label');
            const sliderInput = renderResult.queryByTestId('date-slider');
            const checkboxes = renderResult.getAllByTestId("rover-selected");
            fireEvent.change(
                sliderInput,
                { target: { value: dateToSol(day).toString() } }
            );

            await wait(() => {
                expect(dateLabel.textContent).toBe('2007-11-28');
                expect(sliderInput.value).toBe(dateToSol('2007-11-28').toString());
                const images = renderResult.getAllByTestId('rover-image');
                expect(images.length).toBe(8);
            });

            // deselect opportunity
            fireEvent.click(checkboxes[1]);
            await wait(() => {
                const images = renderResult.getAllByTestId('rover-image');
                expect(images.length).toBe(2);
            });

            // select navigation camera
            const cameraSelect = renderResult.queryByTestId('camera-select');
            fireEvent.change(
                cameraSelect,
                { target: { value: 'NAVCAM' } }
            );
            await wait(() => {
                const images = renderResult.getAllByTestId('rover-image');
                expect(images.length).toBe(27);
            });
        });
    });
});