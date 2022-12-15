import React from 'react';
import { Link } from 'react-router-dom';
import './NavationBar.css'
 


const NavationBar = () => {
    const menubar = <>
        <li><Link to='/'> Home </Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {/* <li><a href='#about'><Link to='/about'>About</Link></a></li> */}
        <li><a href="https://docs.google.com/document/d/1A-9JnmG-5LTGHqmx4ZmgG3WED7UUzt7X0ahNzYm-Prs/edit?usp=share_link">Resume </a></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>

    return (
        <div style={{background:'#0f172a'}} className="navbar bg-base-100">
            <div className="navbar-start">
            <div className="dropdown lg:hidden fixed sm:flex justify-start">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  ">
                        {menubar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl mx-4">
                    JoneY
                </a>
            </div>
            <div style={{width:'100%'}} className="navbar-end">
            
                <div className='nav max-[768px]:hidden  md:hidden  list-none '>
                    {menubar}
                </div>
            </div>

        </div>
        // </div>
    );
};

export default NavationBar;
