import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './DetailsInfo.css'

const DetailsInformation = () => {
    const projectInfo = useLoaderData([])
    console.log(projectInfo)
    const { image, project_name, project_info, project_tools,
        project_create_time, image_two, image_three } = projectInfo;

    return (
        <div className="grid grid-cols-1 ">
            <div className='images'>
                <img src={image} alt="Shoes" className="rounded-xl " />
                <img src={image_two} alt="Shoes" className="rounded-xl mt-6" />
                <img src={image_three} alt="Shoes" className="rounded-xl mt-6" />
            </div>
            <div className="flex justify-center align-middle">
                <div className='text-justify'>
                    <h2 className="card-title text-3xl">{project_name}</h2>
                    <p>Project Create :{project_create_time}</p>
                    <p>Project Information :{project_info}</p>
                    <p>Tools :{project_tools}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsInformation;