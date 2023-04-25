import React, {useEffect, useState} from 'react';

import './Max-following.css';
import {userService} from '../../services';

const MaxFollowing = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getMaxFollowing().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>

            {
                users && users.map((user, index) =>
                    <div key={user.id} className={'max-following'}>
                        <span className={'avatar'}>{user.first_name[0]}</span>
                        <h2>{++index}. {user.first_name}</h2>
                        <h2>id: {user.id}</h2>
                        <h3>gender: {user.gender}</h3>
                        <h3>friends count: {user.friendsCount}</h3>
                        <hr/>
                    </div>
                )
            }

        </div>
    );
};

export {MaxFollowing};
