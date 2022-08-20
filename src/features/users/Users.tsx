import React, {useEffect} from 'react';

import {fetchUsers} from './usersSlice';
import {useAppSelector, useAppDispatch} from '../../app/hooks';
import styles from './Users.module.css';

const Users: React.FC = () => {
    const dispatch = useAppDispatch();
    const {data, isLoading} = useAppSelector((s) => s.users.fetchUsers);

    useEffect(() => {
        const controller = new AbortController();

        dispatch(fetchUsers({signal: controller.signal}));

        return () => controller.abort();
    }, []);

    if (isLoading) {
        return <h1>Loading</h1>;
    }

    return (
        <ul>
            {data.map((user) => (
                <li key={user.id as string} className={styles.row}>
                    {user.name as string}
                </li>
            ))}
        </ul>
    );
};

export default Users;
