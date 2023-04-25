import React from 'react';
import {Link} from "react-router-dom";

import './User.css';

const User = ({user}) => {
    const {id, first_name, gender} = user;

    return (
        <div className={'user'}>
            <h3>
                <span className={'avatar'}>{first_name[0]}</span>
                {id}. {first_name}
            </h3>
            <div>
                <h4>gender - {gender}</h4>
                <Link to={`${id}/friends`}>Friends</Link>
            </div>
            <hr/>

        </div>
    );
};

export {User};
