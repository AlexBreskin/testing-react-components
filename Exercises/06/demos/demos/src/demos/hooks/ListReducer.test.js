import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListReducer, {inputPlaceholder, reducer, defaultState} from './ListReducer';

describe('ListReducer', () => {

    describe('adding items', () => {
        it('should add items', ()=>{
            const { getByText, getByPlaceholderText, getByTestId } = render(
                <ListReducer />
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

    describe('reducer', () => {
        
        describe('starting state', () => {
            it('should have no items', () => {
                const state = reducer(defaultState, {type: 'does not matter'});
                expect(state.items).toEqual([]);
            });
            it('should have an empty new item input', () => {
                const state = reducer(defaultState, {type: 'does not matter'});
                expect(state.newItem).toEqual('');
            });
        });
        
        describe('typing characters', () => {
            it('should add the characters to the newItem property', () => {
                let state = reducer(defaultState, {type: 'newItemChange', value: 'a'});
                expect(state.newItem).toEqual('a');
                state =  reducer(defaultState, {type: 'newItemChange', value: 'ab'});
                expect(state.newItem).toEqual('ab');
            });
            it('should not change the items array', () => {
                let state = reducer(defaultState, {type: 'newItemChange', value: 'a'});
                expect(state.items).toEqual([]);
                state =  reducer(defaultState, {type: 'newItemChange', value: 'ab'});
                expect(state.items).toEqual([]);
            });
        });
        
        describe('add items', () => {
            it('should add the items', () => {
                let state = reducer(
                    { items: [], newItem: 'aurora'},
                    {type: 'add'});
                expect(state.items).toEqual(['aurora']);
                state = reducer(
                    { ...state, newItem: 'borealis'},
                    {type: 'add'});
                expect(state.items).toEqual(['aurora', 'borealis']);
            });
            it('should clear newItem', () => {
                let state = reducer(
                    { items: [], newItem: 'aurora'},
                    {type: 'add'});
                expect(state.newItem).toEqual('');
                state = reducer(
                    { ...state, newItem: 'borealis'},
                    {type: 'add'});
                expect(state.newItem).toEqual('');
            });
        });
    });

});

