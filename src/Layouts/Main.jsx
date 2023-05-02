import React from 'react';

import Chef from '../Home/Chef/Chef';
import NavBar from '../Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div className='md:mx-32'>
            <NavBar></NavBar>
            
            
            <Chef></Chef>
        </div>
    );
};

export default Main;