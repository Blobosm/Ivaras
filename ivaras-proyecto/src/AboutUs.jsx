import React from 'react';
import Accordion from './Accordion';
import './index.css';

export default function AboutUsSection() {
    return (
        <div className="about-us">
            <h2>QUIÉNES SOMOS</h2>
            <p>
                El proyecto educativo de Duoc UC que ofrece una formación cristiana e integral, permite a sus estudiantes
                desarrollar al máximo sus capacidades, competencias y valores, convirtiéndolos en mejores personas y en
                profesionales preparados para insertarse en la sociedad global.
            </p>
            <p>
                La ruta de excelencia que quiere seguir Duoc UC está marcada por la educación centrada en las personas,
                el aporte al desarrollo del país, la vinculación con el medio y la búsqueda constante de transformación
                social.
            </p>
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <Accordion />
        </div>
    );
}
