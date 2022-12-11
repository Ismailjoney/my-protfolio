import React from 'react';


const MySkills = () => {
    const percentage = 66;
    return (
        <div id="about" className='mt-11 font-bold  grid lg:grid-cols-2 sm:grid-cols-12 md:grid-cols-6'>
            
            <div className='flex justify-center items-center   text-justify px-3'>
             
                <p >
                    <h3 className='text-center text-3xl'>About</h3>
                I am Mohammad Ismail Hossen.I am a Front end developer.I have been working and learning in this field for the last one year.I am very passionate about coding and i enjoy doing it.I have done many projects and i try to do my projects very carefully and professionally.
                </p>
            </div>
           <div style={{width: '75%', margin: '0 auto'}}>
           
           <h3>HTML</h3>
            <progress className="progress progress-accent w-56" value="100" max="100"></progress>
            <h3>Css</h3>
            <progress className="progress progress-accent w-56" value="100" max="100"></progress>
            <h3>Javascript</h3>
            <progress className="progress progress-accent w-56" value="90" max="100"></progress>
            <h3>React js</h3>
            <progress className="progress progress-accent w-56" value="90" max="100"></progress>
            <h3>MongodB</h3>
            <progress className="progress progress-accent w-56" value="65" max="100"></progress>
            <h3>Firebase</h3>
            <progress className="progress progress-accent w-56" value="90" max="100"></progress>
           </div>
        </div>

    );
};

export default MySkills;