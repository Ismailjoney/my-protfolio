import React, { useEffect, useState } from 'react';
import './MyProjects.css'
import ProjectDetails from './ProjectDetails';


const MyProject = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch(`https://protfolio-server-nine.vercel.app/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div  className='mt-35 mb-14 font-bold'>
            <h1 className='text-3xl tracking-widest mt-32 my-22'>My Projects</h1>
                <div className='grid justify-items-center sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 mt-5 text-black'>
                    {
                        projects.map(project => <ProjectDetails
                            id={project.id}
                            project={project}
                        ></ProjectDetails>)
                    }
                </div>
        </div>
    );
};

export default MyProject;
 