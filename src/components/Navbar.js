import React from 'react';
import { useLocation } from 'react-router-dom';

const withouSidebarRoutes = ["/login", "/"];

const Navbar = () => {
    const {pathname} = useLocation();

    if (withouSidebarRoutes.some((item) => pathname.endsWith(item))) return null;

    return ( 
        <nav className="navbar">
            <h1></h1>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/flights">Flights</a>
                <a href="/login">Login</a>
            </div>
        </nav>
     );
}
 
export default Navbar;