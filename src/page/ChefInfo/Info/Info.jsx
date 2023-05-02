import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Info = () => {
    // const {id} = useParams()
    // console.log(id)
    const chef = useLoaderData()
    console.log(chef)
    const {_id, name, exp, num_rec, like} = chef
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Info;