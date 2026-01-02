import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FondoAnimado = () => {
  const canvasRef = useRef(null);

  // --- EFECTO MATRIX HORIZONTAL (Lluvia de letras suave) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const characters = '01JAVASCRIPTREACTPYTHONDJANGOIOTESP32CODIGO<>{}[]';
    const fontSize = 14;
    const columns = width / fontSize;
    const drops = [];

    // Inicializamos las gotas en posiciones aleatorias verticales
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * height; // Posición Y inicial aleatoria
    }

    const draw = () => {
      // Fondo semi-transparente para dejar estela
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'; // Letras blancas tenues
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Dibujamos: X fija (columna), Y variable (caída)
        // Para hacerlo "horizontal" tipo viento, podríamos sumar a X, 
        // pero el efecto Matrix clásico vertical se lee mejor como fondo. 
        // Si quieres horizontal literal (izquierda a derecha), avísame.
        // Por ahora, haremos una caída vertical con un ligero "drift" si quisieras.
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reinicio aleatorio cuando sale de la pantalla
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50); // Velocidad de caída

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // --- PULSO RÍTMICO (90 BPM) ---
  // 90 BPM = 1.5 beats por segundo = un ciclo cada 0.666 segundos
  // Para que sea relajado, usaremos 2 tiempos (cada 1.33s un pulso completo)
  const bpmDuration = 60 / 90; // 0.66s

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', background: '#050505' }}>
      
      {/* 1. LAYER CANVAS (Matrix) */}
      <canvas 
        ref={canvasRef} 
        style={{ position: 'absolute', top: 0, left: 0, opacity: 0.9, filter: 'blur(1px)' }} 
      />

      {/* 2. LAYER PULSO DE LUZ (Glow) */}
      <motion.div
        animate={{
          opacity: [0.2, 0.6, 0.2], // Brilla y se apaga
          scale: [1, 2.0, 1], // Crece un poco
        }}
        transition={{
          duration: bpmDuration * 2, // Duración del ciclo (sincronizado a 90bpm pero a medio tiempo para no marear)
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120vw', height: '120vh',
          background: 'radial-gradient(circle, rgba(52, 152, 219, 0.4) 0%, rgba(0,0,0,0) 80%)', // Azul muy suave
          zIndex: 1
        }}
      />
      
      {/* 3. VIGNETTE (Oscurecer bordes para centrar atención) */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle, transparent 40%, #000 100%)',
        zIndex: 2
      }} />

    </div>
  );
};

export default FondoAnimado;