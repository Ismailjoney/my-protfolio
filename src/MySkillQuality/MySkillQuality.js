import React from 'react';
import './MySkillQualitry.css'
import skill from '../assets/skill.webp'




const MySkillQuality = () => {

    return (
        <div>
            <h2 className='text-3xl font-bold tracking-widest mt-25 my-14'>My Skills</h2>

            <div style={{display:'flex',justifyContent:'space-around'}} className='flex flex-col md:flex-row sm:flex-row sm:w-100'>
                <div  className="container">
                    <div className="skill-box">
                        <span className="title ">HTML</span>
                        <div className="skill-bar">
                            <span className="skill-per html">
                                <span className="tooltip">100%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">CSS</span>
                        <div className="skill-bar">
                            <span className="skill-per css">
                                <span className="tooltip">100%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">JavaScript</span>
                        <div className="skill-bar">
                            <span className="skill-per javascript">
                                <span className="tooltip">90%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">NodeJS</span>
                        <div className="skill-bar">
                            <span className="skill-per nodejs">
                                <span className="tooltip">84%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">ReactJS</span>
                        <div className="skill-bar">
                            <span className="skill-per reactjs">
                                <span className="tooltip">88%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">ExpressJS</span>
                        <div className="skill-bar">
                            <span className="skill-per expressjs">
                                <span className="tooltip">75%</span>
                            </span>
                        </div>
                    </div>

                </div>
                <div style={{ marginTop: '40px',display:'flex',justifyContent:'center',alignItems:'center' }}>
                    <img style={{borderRadius:'10px'}} src={skill} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MySkillQuality;