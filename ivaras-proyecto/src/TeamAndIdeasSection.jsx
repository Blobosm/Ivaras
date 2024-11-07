import React from 'react';
import './index.css';

function TeamAndIdeasSection() {
    return (
        <div className="jumbotron carreras-por-escuela p-0 my-1">
            <div className="wrapper-on-top-image d-flex flex-column flex-lg-row quit-absolute-xs justify-content-end">
                <div className="col-12 col-lg-6 descripcion bg-dark text-white">
                    <h2>Vida en Sedes</h2>
                    <p className="dark">Nuestra comunidad en acción a lo largo del país.</p>
                    <a className="btn btn-primary" href="#vida-en-sedes" role="button">
                        Ver Vida en Sedes
                        <span className="icon-chevron-right"></span>
                    </a>
                </div>
            </div>
            <img src="/Foto_oficial_grupal.jpg" alt="Torneo background" className="img-object-fit"/>
        </div>
    );
}

export default TeamAndIdeasSection;
