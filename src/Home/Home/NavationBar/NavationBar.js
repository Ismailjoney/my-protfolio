import React from 'react';
import { Link } from 'react-router-dom';

const NavationBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl font-bold">Jon<span className='text'>Ey</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href="https://docs.google.com/document/d/1A-9JnmG-5LTGHqmx4ZmgG3WED7UUzt7X0ahNzYm-Prs/edit?usp=share_link">Resume </a></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavationBar;