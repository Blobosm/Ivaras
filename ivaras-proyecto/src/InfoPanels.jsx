// InfoPanels.jsx
import React from 'react';
import { ChevronRight } from "lucide-react";

export default function InfoPanels() {
    return (
        <div className="info-panels-container">
            {/* Panel CITT */}
            <div className="info-panel">
                <div className="panel-image citt-image"></div>
                <div className="panel-content">
                    <span className="panel-title text-white fs-4 fw-bold">CITT</span>
                    <button className="btn btn-primary btn-lg d-inline-flex align-items-center">
                        VER CITT
                        <ChevronRight className="ms-2" size={16} />
                    </button>
                </div>
            </div>

            {/* Panel IVARAS LAB */}
            <div className="info-panel">
                <div className="panel-image ivaras-lab-image"></div>
                <div className="panel-content">
                    <span className="panel-title text-white fs-4 fw-bold">IVARAS LAB</span>
                    <button className="btn btn-primary btn-lg d-inline-flex align-items-center">
                        VER IVARAS LAB
                        <ChevronRight className="ms-2" size={16} />
                    </button>
                </div>
            </div>

            {/* Panel IVARAS PROYECTOS */}
            <div className="info-panel">
                <div className="panel-image ivaras-proyectos-image"></div>
                <div className="panel-content">
                    <span className="panel-title text-white fs-4 fw-bold">IVARAS PROYECTOS</span>
                    <button className="btn btn-primary btn-lg d-inline-flex align-items-center">
                        VER IVARAS PROYECTOS
                        <ChevronRight className="ms-2" size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
