import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex space-x-9 justify-center">
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/product">Product</Link></li> */}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
             
            </ul>
        </nav>
    );
};

export default Navbar;
