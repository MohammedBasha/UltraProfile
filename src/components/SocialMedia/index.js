import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
    SocialMediaWrapper,
    Social,
    SocialIcon,
    SocialLinks
} from './styles.js';

const SocialMedia = _ => {
    const [socials, setSocials] = useState([]);

    useEffect(_ => {
        axios.get('js/data.json')
            .then(response => setSocials(response.data.social))
            .catch(error => console.log(error))
    } , []);

    const socialItems = socials.map(socialItem => {
        return (
            <Social key={socialItem.id} color={socialItem.color}>
                <SocialIcon className={socialItem.icon}></SocialIcon>
                <SocialLinks>
                    <span class="info1">{socialItem.title}</span>
                    <span class="info2">{socialItem.body}</span>
                </SocialLinks>
            </Social>
        )
    });

    return (
        <SocialMediaWrapper>
            {socialItems}
        </SocialMediaWrapper>
    )
}

export default SocialMedia