import React from 'react';
import Info from '../page/ChefInfo/Info/Info';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';


const ChefLayout = () => {
    return (
        <div >
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default ChefLayout;