import React from 'react';
import "./style/NavBar.css";

function NavBar() {
    return (
        <div className='nav'>
            <img
                className='nav-logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className='nav-avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt='Netflix Logo'
            />
        </div>
    )
}

export default NavBar