import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {

    it("should start at zero", () => {
        const { queryByText } = render(
            <Counter />
        );
        const paragraph = queryByText(/ah ah ah/);
        expect(paragraph).toBeTruthy();
        expect(paragraph.textContent).toBe('0 ah ah ah');
    });

    it("should increment on click", () => {
        const { queryByText } = render(
            <Counter />
        );
        const paragraph = queryByText(/ah ah ah/);
        expect(paragraph.textContent).toBe('0 ah ah ah');
        fireEvent.click(paragraph);
        expect(paragraph.textContent).toBe('1 ah ah ah');
        fireEvent.click(paragraph);
        expect(paragraph.textContent).toBe('2 ah ah ah');
    });
});