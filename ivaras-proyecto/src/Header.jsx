import React from 'react';
import './index.css';

export default function Header() {
    return (
        <header className="sticky-top bg-dark border-bottom">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark container-fluid">
                <img src="/logo_iv.png" alt="Logo" className="navbar-logo ms-0" />
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#quienes">QUIÉNES SOMOS</a></li>
                        <li className="nav-item"><a className="nav-link" href="#catalogos">CATÁLOGOS</a></li>
                        <li className="nav-item"><a className="nav-link" href="#faq">PREGUNTAS FRECUENTES</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contacto">CONTACTO</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
