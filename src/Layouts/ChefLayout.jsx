import React from 'react';
import Info from '../page/ChefInfo/Info/Info';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/NavBar/Footer/Footer';


const ChefLayout = () => {
    return (
        <div >
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;