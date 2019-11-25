import React from 'react';

import {
    AboutWrapper,
    AboutInfo,
    AboutTitle,
    AboutSubTitle,
    AboutDesc
} from './styles.js';

const About = _ => {
    return (
        <AboutWrapper>
            <div class="container">
                <AboutInfo>
                    <AboutTitle><span>This is</span> Me</AboutTitle>
                    <AboutSubTitle>Creative Director</AboutSubTitle>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDesc>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDesc>
                </AboutInfo>
            </div>
        </AboutWrapper>
    )
}

export default About