import React from 'react';
import html from '../../../assets/html.png'
import Bootstrap from '../../../assets/Bootstrap.jpg'
import dasiyUi from '../../../assets/dasiyUi.jpg'
import js from '../../../assets/js.png'
import tailwind from '../../../assets/tailwind.png'
import Firebase from '../../../assets/Firebase.png'
import Mongodb from '../../../assets/Mongodb.png'
import css from '../../../assets/css.png'
import react from '../../../assets/react.png'
import './MySkill.css'

const MySkills = () => {

    return (
        <div id="about" className='mt-1 font-bold  grid lg:grid-cols-2 sm:grid-cols-12 md:grid-cols-6'>
            <div>
                <h3 className='text-3xl mt-2 my-7'>About</h3>
                <div className='flex justify-center items-center   text-justify px-3'>
                    <p >
                        I am Mohammad Ismail Hossen.I am a Front end developer.I have been working and learning in this field for the last one year.I am very passionate about coding and i enjoy doing it.I have done many projects and i try to do my projects very carefully and professionally.
                    </p>
                </div>
            </div>

            <div>
                <h2 className='text-3xl mt-8 my-7'>Skills</h2>
                <div className='skill flex flex-row flex-wrap justify-center'>
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={Bootstrap} alt="" />
                    <img src={tailwind} alt="" />
                    <img src={dasiyUi} alt="" />
                    <img src={js} alt="" />
                    <img src={react} alt="" />
                    <img src={Firebase} alt="" />
                    <img src={Mongodb} alt="" />
                </div>
            </div>
        </div>

    );
};

export default MySkills;