import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import CounterAsync from './Counter.async';

describe('Counter', () => {

    it("should start at zero", () => {
        const { queryByText } = render(
            <CounterAsync />
        );
        const paragraph = queryByText(/ah ah ah/);
        expect(paragraph).toBeTruthy();
        expect(paragraph.textContent).toBe('0 ah ah ah');
    });

    it("should increment on click", async () => {
        const { queryByText } = render(
            <CounterAsync />
        );
        const paragraph = queryByText(/ah ah ah/);
        await wait(() => {
            expect(paragraph.textContent).toBe('0 ah ah ah');
        });
        fireEvent.click(paragraph);
        await wait(() => {
            expect(paragraph.textContent).toBe('1 ah ah ah');
        });
        fireEvent.click(paragraph);
        await wait(() => {
            expect(paragraph.textContent).toBe('2 ah ah ah');
        });
    });
});