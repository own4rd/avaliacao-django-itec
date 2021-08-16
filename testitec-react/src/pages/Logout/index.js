import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {logout} from '../../store/actions/user'
import { useDispatch } from 'react-redux';


export default function Logout() {
    const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(logout());
		history.push('/');
	});

	return <div>Logout</div>;
}