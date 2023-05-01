import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
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
                            Sign out
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