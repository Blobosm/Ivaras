import React, { useState } from 'react';
import './index.css';

const Accordion = () => {
  // Estados locales para controlar la apertura de cada acordeón
  const [isOpen, setIsOpen] = useState({
    description: false,
    objectives: false,
    results: false,
  });

  // Función para alternar el estado de cada acordeón
  const toggleAccordion = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="accordion-container">
      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion('description')}
        >
          <h4>Descripción</h4>
          <span className="accordion-icon">{isOpen.description ? '-' : '+'}</span>
        </div>
        {isOpen.description && (
          <div className="accordion-content">
            <p>Agregar cualquier tipo de contenido en la descripción.</p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion('objectives')}
        >
          <h4>Objetivos</h4>
          <span className="accordion-icon">{isOpen.objectives ? '-' : '+'}</span>
        </div>
        {isOpen.objectives && (
          <div className="accordion-content">
            <p>Agregar cualquier tipo de contenido en los objetivos.</p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion('results')}
        >
          <h4>Resultados</h4>
          <span className="accordion-icon">{isOpen.results ? '-' : '+'}</span>
        </div>
        {isOpen.results && (
          <div className="accordion-content">
            <p>Agregar cualquier tipo de contenido en los resultados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
