import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
import { login } from '../../store/actions/user';
import { useHistory } from 'react-router-dom';
import {isUserLoggedIn} from '../../utils'

export default function Login() {
	const history = useHistory();
        
    const dispatch = useDispatch();
    const {logged, messageError} = useSelector(state => state.user);
    if(logged) {
        history.push("/");
    }  
    const initialFormData = Object.freeze({
		email: '',
		password: '',
	});
	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData.email, formData.password, null))
    }

    return (
        <div>
            <main>
            <div className="card form-login">
                <div className="card-body">
                    <form className="">
                        <h1 className="h3 mb-3 fw-normal">Entrar</h1>
                        <div className="form-floating">
                            <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange}/>
                            <label>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange}/>
                            <label>Password</label>
                        </div>
                        {messageError != '' ? 
                        <p className="text-danger">{ messageError }</p>
                        : null}
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Entrar</button>
                    </form>
                </div>
            </div>
            </main>
        </div>
    )
}