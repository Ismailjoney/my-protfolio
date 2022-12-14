import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './DetailsInfo.css'

const DetailsInformation = () => {
    const projectInfo = useLoaderData([])
    console.log(projectInfo)
    const { image, project_name, project_info, project_tools,
        project_create_time, image_two, image_three } = projectInfo;

    return (
        <div className="grid justify-center">
            <div className='images flex items-center flex-col sm:flex-row'>
                <img src={image} alt="" className="rounded-xl " />
                <img src={image_two} alt="" className="rounded-xl mt-6" />
                <img src={image_three} alt="" className="rounded-xl mt-12" />
            </div>
            <div className="flex justify-center  align-middle items-center mt-12 text-justify">
                <div className='text-justify'>
                    <h2 className="card-title text-3xl">{project_name}</h2>
                    <h2>Project Create :{project_create_time}</h2>
                    <p className='flex justify-start w-2/4'>Project Information :{project_info}</p>
                    <p>Tools :{project_tools}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsInformation;