import React from 'react';
import TestRenderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter', () => {
    describe('counting', () => {

        it("should start at zero", () => {
            const tr = TestRenderer.create(
                <Counter />
            );
            const paragraph = tr.root.findByType('p');
            expect(paragraph).toBeTruthy();
            expect(paragraph.props.children[0]).toBe(0);
            expect(paragraph.props.children[1]).toBe(' ah ah ah');
        });

        it("should increment on click", () => {
            const tr = TestRenderer.create(
                <Counter />
            );
            const p = tr.root.findByType('p');
            TestRenderer.act(() => { p.props.onClick(); });
            expect(p.props.children).toEqual([1, ' ah ah ah']);
            TestRenderer.act(() => { p.props.onClick(); });
            expect(p.props.children).toEqual([2, ' ah ah ah']);
        });
    });
});