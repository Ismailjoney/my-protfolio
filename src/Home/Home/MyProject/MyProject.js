import React, { useEffect, useState } from 'react';
import './MyProjects.css'
import ProjectDetails from './ProjectDetails';


const MyProject = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='mt-35 mb-14 font-bold'>
            <h1 className='text-3xl tracking-widest mt-32 my-22'>My Projects</h1>
                <div className='grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 mt-5'>
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
//https://i.ibb.co/5ncx0Mq/edutwo.png
//https://i.ibb.co/GM623yN/edu3.png

//https://i.ibb.co/hY2BR5D/typerrwo.png
//https://i.ibb.co/VHwMHwX/typerthree.png

//https://i.ibb.co/TTK8kzZ/quiztwo.png
//https://i.ibb.co/TLDrw13/Screenshot-2.png