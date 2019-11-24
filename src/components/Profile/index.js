import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
    ProfileWrapper,
    ProfileSection,
    ProfileTitle,
    ProfileItem,
    SkillsDesc,
    SkillsBar,
    SkillsPerc,
    SkillsPercParent,


} from './styles.js';

const Profile = _ => {
    const [skills, setSkills] = useState([]);

    useEffect(_ => {
        axios.get('js/data.json')
            .then(response => setSkills(response.data.profile))
            .catch(error => console.log(error))
    }, []);

    const skillsData = skills.map(skill => {
        return (
            <SkillsBar key={skill.id}>
                <div>{skill.title}</div>
                <SkillsPerc>{skill.percentage}</SkillsPerc>
                <SkillsPercParent width={skill.percentage}>
                    <span></span>
                </SkillsPercParent>
            </SkillsBar>
        )
    });

    return (
        <ProfileWrapper>
            <div className="container">
                <ProfileSection>
                    <ProfileTitle><span>My </span>Profile</ProfileTitle>
                    <ul className="profile-list">
                        <ProfileItem>
                            <span>Name</span>
                            Mohammed Basha
                        </ProfileItem>
                        <ProfileItem>
                            <span>Birthday</span>
                            09/09/1979
                        </ProfileItem>
                        <ProfileItem>
                            <span>Address</span>
                            Ghamra, Cairo.
                        </ProfileItem>
                        <ProfileItem>
                            <span>Phone</span>
                            +2 0111 579 3403
                        </ProfileItem>
                        <ProfileItem>
                            <span>Email</span>
                            mohammedbasha9191@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <span>Website</span>
                            <span className="web">
                                <a href="https://www.linkedin.com/in/mohammed-basha/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">LinkedIn</a>
                            </span>
                        </ProfileItem>
                    </ul>
                </ProfileSection>
                <ProfileSection>
                    <ProfileTitle>Some <span>skills</span></ProfileTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {skillsData}
                </ProfileSection>
            </div>
        </ProfileWrapper>
    )
}

export default Profile