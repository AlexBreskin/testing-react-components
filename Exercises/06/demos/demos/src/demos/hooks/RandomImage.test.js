import React from 'react';
import { render, wait } from '@testing-library/react';
import RandomImage from './RandomImage';

describe('RandomImage', () => {

    describe('integration tests', () => {
        it('should render an image with a url', async ()=>{
            const { getByAltText } = render(
                <RandomImage />
            );
            await wait(() => {
                const img = getByAltText('mars rover image');
                expect(img.src).toMatch(/http/);
            });
        });
    });

});

