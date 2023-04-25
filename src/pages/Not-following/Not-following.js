import React, {useEffect, useState} from 'react';

import './Not-following.css';
import {userService} from '../../services';

const NotFollowing = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getNotFollowing().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>

            <h1>
                All users without friends = {users.length};
            </h1>

            {
                users && users.map((user, index) =>
                    <div key={user.id} className={'not-following'}>
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

export {NotFollowing};
