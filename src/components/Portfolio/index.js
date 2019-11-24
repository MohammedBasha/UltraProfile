import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
    PortfolioWrapper,
    PortfolioTitle,
    PortfolioList,
    PortfolioItem,
    Box,
    BoxItem,
    BoxOverlay
} from './styles.js';

const Portfolio = _ => {
    const [images, setImages] = useState([]);

    useEffect(_ => {
        axios.get('js/data.json')
            .then(response => setImages(response.data.portfolio))
            .catch(error => console.log(error));
    }, []);

    const PortfolioImages = images.map(imageItem => {
        return (
            <BoxItem key={imageItem.id}>
                <img src={imageItem.image} alt={imageItem.title} />
                <BoxOverlay>
                    <span>Show Image</span>
                </BoxOverlay>
            </BoxItem>
        );
    });

    return (
        <PortfolioWrapper>
            <PortfolioTitle><span>My</span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            <Box>
                {PortfolioImages}
            </Box>
        </PortfolioWrapper>
    )
}

export default Portfolio