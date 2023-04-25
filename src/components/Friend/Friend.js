import React from 'react';

const Friend = ({friend, index}) => {
    const {id, first_name, gender} = friend;

    return (
        <li className={'user'}>
            <h3>{index}. {first_name}</h3>
            <h4>id {id}</h4>
            <h4>gender - {gender}</h4>
        </li>
    );
};

export {Friend};
