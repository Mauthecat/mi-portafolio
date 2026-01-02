import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Briefcase from './Briefcase';
import NavigationX from './NavigationX';

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  
  // Referencia al audio (asegúrate de tener musica.mp3 en la carpeta public)
  const audioRef = useRef(new Audio('/Sunflower.mp3'));

  const handleStart = () => {
    // 1. Reproducir música
    audioRef.current.volume = 0.3; // Volumen suave
    audioRef.current.loop = true;  // Que se repita
    audioRef.current.play().catch(e => console.log("Audio bloquedo por navegador hasta interactuar"));

    // 2. Cambiar estado para quitar el maletín y mostrar la X
    setIntroFinished(true);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      {/* AnimatePresence permite animar componentes cuando se desmontan (desaparecen) */}
      <AnimatePresence mode='wait'>
        
        {!introFinished ? (
          // PANTALLA 1: MALETÍN
          <Briefcase key="briefcase" onOpen={handleStart} />
        ) : (
          // PANTALLA 2: LA X
          <NavigationX key="navigation" />
        )}

      </AnimatePresence>
    </div>
  );
}

export default App;