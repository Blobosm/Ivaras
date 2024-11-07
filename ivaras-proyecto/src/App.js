import React from 'react';
import LandingPage from './landingpage';
import TeamAndIdeasSection from './TeamAndIdeasSection';

function App() {
  return (
    <div>
      {/* Asegúrate de que solo uno de estos se esté renderizando según lo que necesites */}
      <LandingPage showAboutUs={false} /> {/* Cambia a true o false según sea necesario */}
      <TeamAndIdeasSection />
    </div>
  );
}
export default App;
