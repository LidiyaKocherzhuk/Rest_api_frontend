import React, {useEffect, useState} from 'react';

import {userService} from '../../services';
import {User} from '../../components';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>

            {
                users
                    ? users.map((user, index) => <User key={user.id} user={user} index={++index}/>)
                    : 'Users do not exist!'
            }

        </div>
    );
};

export {Users};
