import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Info = () => {
    const chefInfo = useLoaderData()
    console.log(chefInfo);
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default Info;