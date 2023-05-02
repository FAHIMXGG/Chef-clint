import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard/ChefCard';
import { useLoaderData } from 'react-router-dom';


const Chef = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-server-fahimxgg.vercel.app/chef/')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])
    //console.log(chef);

    // const chef = useLoaderData()
    // console.log(chef)

    return (
        <div>
            <div>
                {
                    chef.map(data => <ChefCard
                    key={data._id}
                    data = {data}
                    ></ChefCard>
                        )
                }
            </div>
        </div>
    );
};

export default Chef;