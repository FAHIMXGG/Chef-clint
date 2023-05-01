import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({data}) => {
    //console.log(data)
    const {_id, name, exp, num_rec, like} = data
    return (
        <div>
            <Link to={`/chef/${_id}`}>GOO</Link>
        </div>
    );
};

export default ChefCard;