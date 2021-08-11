import React, {useState, useEffect} from 'react';
import * as randomImageService from './randomImageService';

const RandomImage = () => {
    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        if (!imgUrl) {
            randomImageService.getRandomImageUrl().then(setImgUrl);
        }
    });

    return (
        <div>
            { imgUrl 
                ? <img src={imgUrl} alt="mars rover image" /> 
                : <p>{imgUrl === '' ? 'Missed!' : 'loading...'}</p> }
        </div>
    );
};

export default RandomImage;