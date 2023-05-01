import React from 'react';

import Chef from '../Home/Chef/Chef';
import NavBar from '../Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1>main</h1>
            
            <Chef></Chef>
        </div>
    );
};

export default Main;