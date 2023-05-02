import React from 'react';
import Info from '../page/ChefInfo/Info/Info';
import { Outlet } from 'react-router-dom';


const ChefLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default ChefLayout;