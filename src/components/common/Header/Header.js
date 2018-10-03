import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Movies</Link>
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
                    <NavLink  className="nav-item nav-link" to="/rentals">Rentals</NavLink>
                    <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
                    <NavLink className="nav-item nav-link" to="/login">login</NavLink>
                </div>
              
      
            </nav>
        </header>
    );
};

export default Header;