import React from 'react'

export default function Footer() {
    return (
        <footer className="container py-5">
            <div className="row">
                <div className="col-12 col-md">
                    <small className="d-block mb-3 text-muted">© Wagner Palmeira - 2021</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Tecnologias</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary" href="#">Bootstrap</a></li>
                        <li><a className="link-secondary" href="#">Django Rest</a></li>
                        <li><a className="link-secondary" href="#">React.js</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Úteis</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary" href="#">Github</a></li>
                        <li><a className="link-secondary" href="#">Linkedin</a></li>
                        <li><a className="link-secondary" href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Sobre</h5>
                    <p>
                        Bacharel em Análise de Sistemas e pós-graduado em Engenharia de software.
                    </p>
                </div>
            </div>
            </footer>
    )
}
