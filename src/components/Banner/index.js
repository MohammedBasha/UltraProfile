import React from 'react';
import {
    BannerWrapper,
    BannerInfo,
    BannerTitle,
    BannerSubTitle,
    BannerDesc,
    BannerSpan,
    BannerBtn
} from './styles.js';

const Banner = _ => {
    return (
        <BannerWrapper>
            <div className="container">
                <BannerInfo>
                    <BannerTitle>Mohammed Basha</BannerTitle>
                    <BannerSubTitle>Creative Director</BannerSubTitle>
                    <BannerDesc>
                        Iam a professional <BannerSpan>UX Designer</BannerSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </BannerDesc>
                    <BannerBtn>Let's Begin</BannerBtn>
                </BannerInfo>
            </div>
        </BannerWrapper>
    )
}

export default Banner