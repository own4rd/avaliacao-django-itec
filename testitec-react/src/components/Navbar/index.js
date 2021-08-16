import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {isUserLoggedIn} from '../../utils'

export default function Navbar() {
    const history = useHistory();
    const {logged} = useSelector(state => state.user);
    console.log(logged)

    return (
        <header>
            <nav>
                <div className="container">
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a onClick={() => {history.push('/')}} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4">WTP</span>
                    </a>
                    <ul className="nav nav-pills">
                    {!logged ? 
                        <>
                        <li className="nav-item"><a href="http://localhost:8000/conta/" target="_blank" className="nav-link" aria-current="page">Registrar</a></li>
                        <li className="nav-item"><button onClick={() => {history.push('/entrar')}} className="nav-link">Entrar</button></li>
                        </>
                        :
                        <>
                        <li className="nav-item"><button onClick={() => {history.push('/promocoes')}} className="nav-link">Minhas Promoções</button></li>
                        <li className="nav-item"><button onClick={() => {history.push('/sair')}} className="nav-link">Sair</button></li>
                        </>
                    }
                    </ul>
                    </header>
                </div>
            </nav>
        </header>
    )
}
