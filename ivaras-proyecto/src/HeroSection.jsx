// HeroSection.jsx
import React from 'react';
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
    return (
        <a href="/event-link" className="hero-link"> {/* Enlace a la página del evento */}
            <div className="hero-content position-relative text-center text-white d-flex flex-column align-items-center justify-content-center">
                <img
                    src="/all_in_duoc.jpg"
                    alt="Torneo background"
                    className="hero-image position-absolute" 
                />
                <div className="hero-text position-relative">
                    <h1 className="mb-4 fs-1 fw-bold">Torneo All in Chile<br />2024</h1>
                    <button className="btn btn-outline-light d-inline-flex align-items-center">
                        ver eventos
                        <ChevronRight className="ms-2" size={16} />
                    </button>
                </div>
            </div>
        </a>
    );
}
