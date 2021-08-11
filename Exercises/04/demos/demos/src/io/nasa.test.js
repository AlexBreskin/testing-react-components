const nasa = require('./nasa');

describe('nasa', () => {

    describe('searching for rover images', () => {
        const hasPhotos = (photosArray) => {
            expect(photosArray).toBeDefined();
            expect(photosArray.length).toBeGreaterThan(0);
            expect(photosArray[0].img_src).toBeDefined();
        };

        // this is an integration test and should be categorised as such, 
        // except that jest does not support test categories
        // https://github.com/facebook/jest/issues/1520
        it('should return at least one image', async () => {
            const result = await nasa.searchRoverImages('curiosity', '2015-6-3', 'FHAZ');
            expect(result).toBeDefined();
            hasPhotos(result.photos);
        });

        it('should return images for more than one rover', async () => {
            const result = await nasa.searchImages({
                earth_date: '2015-6-3', 
                roverSelection: { opportunity: true, curiosity: true }, 
                camera: "" 
            });
            expect(result).toBeDefined();
            console.log(result);
            hasPhotos(result[0].photos); // opportunity
            hasPhotos(result[1].photos); // curiosity
        });


    });

});