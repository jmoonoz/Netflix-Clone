import React, { useEffect, useState } from 'react';
import "./style/NavBar.css";

function NavBar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else setShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>
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