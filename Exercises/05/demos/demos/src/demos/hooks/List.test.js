import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import List, {inputPlaceholder} from './List';

describe('List', () => {

    describe('adding items', () => {

        it('should add items', ()=>{
            const { getByText, getByPlaceholderText, getByTestId } = render(
                <List />
            );
            const input = getByPlaceholderText(inputPlaceholder);
            const form = getByTestId('form');

            fireEvent.change(input, {
                target: { value: 'one'}
            });
            fireEvent.submit(form);

            const firstItem = getByText('one');
            expect(firstItem).toBeDefined();
            expect(firstItem.tagName).toBe('LI');
            expect(input.value).toBe('');

            fireEvent.change(input, {
                target: { value: 'two'}
            });
            fireEvent.submit(form);

            const secondItem = getByText('two');
            expect(secondItem).toBeDefined();
            expect(secondItem.tagName).toBe('LI');
            expect(secondItem.parentNode.childElementCount).toBe(2);
            expect(input.value).toBe('');
        });
    });

});

