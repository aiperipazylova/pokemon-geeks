import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <ul>
                <Link to='/pokemon'>
                    pokemon
                </Link>
        </ul>
    );
};

export default Menu;