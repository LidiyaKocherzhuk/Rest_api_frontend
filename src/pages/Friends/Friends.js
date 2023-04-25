import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import './Friends.css';
import {userService} from '../../services';
import {Friend} from '../../components';

const Friends = () => {
    const {id} = useParams();

    const [userFriends, setUserFriends] = useState({id: 0, first_name: '', friends: [], gender: ''});

    useEffect(() => {
        userService.getById(id).then(({data}) => setUserFriends(data));
    }, [id]);

    return (
        <div className={'userFriends'}>

            {
                userFriends
                    ? <div>

                        <h2>
                            <span className={'avatar'}>{userFriends.first_name[0]}</span>
                            {userFriends.id}. {userFriends.first_name}
                        </h2>

                        <ul>
                            <h4>Friends:</h4> {userFriends.friends.map((friend, index) =>
                            <Friend key={friend.id} friend={friend} index={++index}/>)}
                        </ul>

                    </div>

                    : 'Friends do not exist!'
            }

        </div>
    );
};

export {Friends};
