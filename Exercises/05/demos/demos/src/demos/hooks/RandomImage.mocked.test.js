import React from 'react';
import { render, wait } from '@testing-library/react';
import RandomImage from './RandomImage';
import * as randomImageService from './randomImageService';

jest.mock('./randomImageService');

describe('RandomImage', () => {

    describe('with mocking', () => {
        it('should render an image with the random url', async ()=> {
            randomImageService
                .getRandomImageUrl.mockResolvedValue('http://foo.com/cat.jpg');
            const { getByAltText } = render(
                <RandomImage />
            );
            await wait(() => {
                const img = getByAltText('mars rover image');
                expect(img.src).toMatch(/http:\/\/foo\.com\/cat\.jpg/);
            });
        });
    });

});

