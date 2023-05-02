import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    return (
        <div className=''>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Seoul Garden
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <div className='flex gap-3'>
                        <Link to="/login"><button>Login</button></Link>
                        <Link to="/reg"><button>Register</button></Link>
                    </div>

                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            {
                                user ?
                                <Link onClick={handleLogOut}>Logout</Link> :
                                <Link to="/login">Login</Link>
                            }
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    
                        <Link to="/">Home</Link>
                    
                

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;