import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {setIsLoading} from '../users/usersSlice';

import logo from '../../logo.svg';

const Users: React.FC = React.memo(() => {
    const {data} = useSelector((state: RootState) => state.users.fetchUsers);
    console.log('RENDER')

    return <>{data.map(u => <div key={u.id}>{u.firstName}</div>)}</>
})

const Home: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button type="button" onClick={() => dispatch(setIsLoading())}>Click me!</button>
            <Users />
        </div>
    );
};

export default Home;
