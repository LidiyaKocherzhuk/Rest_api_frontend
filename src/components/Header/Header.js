import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';

const Header = () => {

    return (
    <div className={'header'}>
        <NavLink to={''}>All users</NavLink>
        <NavLink to={'max-following'}>Max-following</NavLink>
        <NavLink to={'not-following'}>Not-following</NavLink>
    </div>
    );
};

export {Header};
