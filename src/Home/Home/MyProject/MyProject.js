import React from 'react';
import one from '../../../assets/one.png'
import two from '../../../assets/two.png'
import three from '../../../assets/three.png'
import './MyProjects.css'
const MyProject = () => {

    return (
        <div className='mt-14 mb-14 font-bold'>
            <h1 className='text-3xl tracking-widest my-7'>My Projects</h1>
            <div style={{width: '94%', margin: '0 auto'}} className='grid  sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-3  gap-x-16 justify-center items-center '>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={one} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Speed Typer website</h2>
                         
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <a href="https://spontaneous-frangipane-b80e8d.netlify.app/"> Live Link</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={two} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Quiz Website</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <a href="https://darling-banoffee-9623e2.netlify.app/"> Live Link</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card   bg-base-100 shadow-xl">
                    <figure><img src={three} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Educational Website</h2>
                       
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <a href="https://edu-website-d9487.firebaseapp.com/courses"> Live Link</a>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProject;