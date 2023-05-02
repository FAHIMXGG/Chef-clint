import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe/Recipe';


const Info = () => {
    // const {id} = useParams()
    // console.log(id)
    const chef = useLoaderData()
    console.log(chef)
    const {_id, name, exp, num_rec, like, recipe_info} = chef
    return (
        <div>
            <h1>{name}</h1>
            {
                recipe_info.map(rec => <Recipe
                key={rec.ingredients}
                rec={rec}
                
                >

                </Recipe>)
            }
        </div>
    );
};

export default Info;