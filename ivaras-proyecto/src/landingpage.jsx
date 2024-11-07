// LandingPage.jsx
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import InfoPanels from './InfoPanels';
import AboutUs from './AboutUs';

export default function LandingPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">
                {/* Contenedor principal con imagen de fondo compartida */}
                <div className="hero-container d-flex">
                    <div className="col-md-8 hero-section">
                        <HeroSection />
                    </div>
                    <div className="col-md-4 info-panels">
                        <InfoPanels />
                    </div>
                </div>
                
                {/* Sección "QUIÉNES SOMOS" */}
                <AboutUs />
            </main>
        </div>
    );
}
