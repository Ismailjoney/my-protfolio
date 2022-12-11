import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavationBar from '../Home/Home/NavationBar/NavationBar';

const Main = () => {
    return (
        <div>
            <NavationBar></NavationBar>
            <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Main;