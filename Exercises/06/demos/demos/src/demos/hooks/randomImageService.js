import * as nasa from '../../io/nasa';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * (max+1));
};

export const getRequestUrl = () => {
    const rovers = ['spirit', 'opportunity', 'curiosity'];
    const maxSol = 1000;
    return `https://api.nasa.gov/mars-photos/api/v1/rovers/${rovers[getRandomInt(2)]}/photos?sol=${getRandomInt(maxSol)}&api_key=${nasa.API_KEY}`;
};

// return '' if no image found
export const getRandomImageUrl = async () => {
    const result = await nasa.fetchJson(getRequestUrl());
    return result.photos.length === 0 
        ? '' 
        : result.photos[getRandomInt(result.photos.length - 1)].img_src;
};