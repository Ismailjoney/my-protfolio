import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ project }) => {
    
    const { image, project_name, project_info, live_link, _id } = project;
    return (
        <div className="card w-100  bg-base-100 shadow-xl  ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {project_name}
                </h2>
                <p className='text-left'>{project_info.length > 65 ? project_info.slice(0, 65) +'...' :project_info }</p>
                <div className="card-actions justify-end mt-7 ">
                    <Link to={`/detailsinfo/${_id}`}>
                    <button className="btn btn-sm btn-primary">Details</button>
                </Link>
                <a href={live_link}>
                    <button className="btn btn-sm btn-primary">Website Link</button>
                </a>
            </div>
        </div>
        </div >
    );
};

export default ProjectDetails;