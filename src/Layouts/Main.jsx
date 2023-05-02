import React from 'react';

import Chef from '../Home/Chef/Chef';
import NavBar from '../Shared/NavBar/NavBar';
import { useNavigation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div className='md:mx-32'>
            <NavBar></NavBar>
            {navigation.state ===

                'loading'

                &&

                <div className="text-center">
                    <Spinner aria-label="Default status example" />
                </div>

            }

            <Chef></Chef>
        </div>
    );
};

export default Main;