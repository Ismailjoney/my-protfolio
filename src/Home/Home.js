import React from 'react';
import MySkillQuality from '../MySkillQuality/MySkillQuality';
import MyProject from './Home/MyProject/MyProject';
import MySkills from './Home/MySkills/MySkills';
import TopBanner from './Home/TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <MySkills></MySkills>
            <MySkillQuality></MySkillQuality>
            <MyProject></MyProject>
            
        </div>
    );
};

export default Home;