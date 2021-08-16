import React from 'react'
import './styles.css';

export default function Card(props) {
    const {title, description, link, category} = props
    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ category }</h6>
            <p className="card-text"> { description }</p>
            <a href={link} className="card-link">Visualizar</a>
        </div>
    </div>
    )
}
