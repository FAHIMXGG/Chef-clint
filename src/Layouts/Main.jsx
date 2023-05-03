import React from 'react';

import Chef from '../Home/Chef/Chef';
import NavBar from '../Shared/NavBar/NavBar';
import { useNavigation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
import Slider from '../Home/Slider/Slider';
import Footer from '../Shared/NavBar/Footer/Footer';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div >
            <NavBar></NavBar>
            <Slider></Slider>
            {navigation.state ===

                'loading'

                &&

                <div className="text-center">
                    <Spinner aria-label="Default status example" />
                </div>

            }

            <div className='md:mx-56'>

                <Chef>{navigation.state ===

                    'loading'

                    &&

                    <div className="text-center">
                        <Spinner aria-label="Default status example" />
                    </div>

                }</Chef>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;