import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaHandshake } from 'react-icons/fa'; 
import PerfilContent from './PerfilContent';
import ContactoContent from './ContactoContent';
import ExperienciaContent from './ExperienciaContent';
import ShowcaseContent from './ShowcaseContent';
import FondoAnimado from './FondoAnimado';

// DATOS DE LAS SECCIONES
const sections = [
  {
    id: 'perfil',
    title: 'Perfil Profesional',
    subtitle: 'Acerca de mí',
    color: 'linear-gradient(135deg, rgba(44, 62, 80, 0.9) 0%, rgba(0,0,0,0.9) 100%)',
    gridArea: '1 / 1 / 2 / 2',
    align: 'center', 
    justify: 'center',
    image: '/gato.png',
  },
  {
    id: 'experiencia',
    title: 'EXPERIENCIA',
    subtitle: 'Proyectos',
    image: '/pesca.png',
    color: 'linear-gradient(225deg, rgba(44, 62, 80, 0.9) 0%, rgba(0,0,0,0.9) 100%)',
    gridArea: '1 / 2 / 2 / 3',
    align: 'center',
    justify: 'center'
  },
  {
    id: 'contacto',
    title: 'CONTACTO',
    subtitle: 'Hablemos',
    image: '/trabajo.png',
    color: 'linear-gradient(45deg, rgba(44, 62, 80, 0.9) 0%, rgba(0,0,0,0.9) 100%)',
    gridArea: '2 / 1 / 3 / 2',
    align: 'center',
    justify: 'center'
  },
  {
    id: 'showcase',
    title: 'SHOWCASE',
    subtitle: 'Demos',
    image: '/codigo.png',
    color: 'linear-gradient(-45deg, rgba(192, 57, 43, 0.9) 0%, rgba(0,0,0,0.9) 100%)',
    gridArea: '2 / 2 / 3 / 3',
    align: 'center',
    justify: 'center'
  }
];

const NavigationX = () => {
  const [selectedId, setSelectedId] = useState(null);
  
  // --- LÓGICA DE FINAL DEL JUEGO ---
  const [visited, setVisited] = useState(new Set()); 
  const [showFinale, setShowFinale] = useState(false); 
  const [hasShownFinale, setHasShownFinale] = useState(false); // <--- NUEVO: Para evitar el loop infinito

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // 1. RASTREO: Agregamos la sección al set cuando se abre
  useEffect(() => {
    if (selectedId) {
      setVisited(prev => {
        const newSet = new Set(prev);
        newSet.add(selectedId);
        return newSet;
      });
    }
  }, [selectedId]);

  // 2. DISPARADOR: Se activa SOLO cuando cerramos una sección (selectedId es null)
  useEffect(() => {
    // Si NO hay nada abierto (volvimos al menú) 
    // Y ya visitamos las 4 secciones
    // Y NO hemos mostrado el final todavía
    if (!selectedId && visited.size === sections.length && !hasShownFinale) {
      
      // Pequeño delay para que se sienta natural al cerrar
      const timer = setTimeout(() => {
        setShowFinale(true);
        setHasShownFinale(true); // Bloqueamos para que no vuelva a salir
      }, 800); 
      
      return () => clearTimeout(timer);
    }
  }, [selectedId, visited, hasShownFinale]);

  const renderContent = (id) => {
    switch (id) {
      case 'perfil': return <PerfilContent onClose={() => setSelectedId(null)} />;
      case 'contacto': return <ContactoContent onClose={() => setSelectedId(null)} />;
      case 'experiencia': return <ExperienciaContent goToContact={() => setSelectedId('contacto')} onClose={() => setSelectedId(null)} />;
      case 'showcase': return <ShowcaseContent onClose={() => setSelectedId(null)} />;
      default: return null;
    }
  };

  return (
    <div style={{
      position: 'relative', height: '100vh', width: '100vw',
      background: 'transparent',
      overflow: 'hidden',
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      
      <FondoAnimado />

      {/* GATO OVERLAY */}
      <AnimatePresence>
        {!selectedId && (
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: 'spring', bounce: 0.5 }}
            style={{ position: 'absolute', zIndex: 30, width: '180px', height: '180px', pointerEvents: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <img src="/gato.gif" alt="Gato Bailando" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- EL ROMBO CONTENIDO --- */}
      <motion.div 
        animate={{ 
          rotate: 45,
          scale: selectedId ? 1.2 : 1,
          opacity: selectedId ? 0 : 1 
        }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr',
          gap: '15px',
          width: '80vmin', height: '80vmin',
          zIndex: 10, pointerEvents: selectedId ? 'none' : 'auto'
        }}
      >
        {sections.map((section) => (
          <motion.div
            key={section.id}
            layoutId={section.id}
            onClick={() => setSelectedId(section.id)}
            whileHover={{ filter: 'brightness(1.2)', scale: 1.02, zIndex: 10 }}
            style={{
              background: section.color, gridArea: section.gridArea,
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              alignItems: section.justify, 
              justifyContent: section.align,
              padding: '30px', borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {section.image && (
               <motion.img 
                 src={section.image}
                 initial={{ opacity: 0, scale: 0.8, rotate: -45, x: "-50%", y: "-50%" }}
                 animate={{ opacity: 0.6, scale: 1, rotate: -45, x: "-50%", y: "-50%" }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 style={{
                   position: 'absolute', top: '50%', left: '50%',
                   width: '200%', height: '200%', objectFit: 'cover',
                   zIndex: 0
                 }}
               />
            )}
            <motion.div 
              style={{ 
                transform: 'rotate(-45deg)', textAlign: 'center', zIndex: 2, 
                textShadow: section.image ? '0 2px 15px rgba(0,0,0,0.9)' : 'none'
              }}
            >
              <motion.h2 layoutId={`title-${section.id}`} style={{ margin: 0, color: '#fff', fontSize: '2.5rem', fontWeight: '900', lineHeight: 1 }}>
                {section.title}
              </motion.h2>
              <motion.p layoutId={`subtitle-${section.id}`} style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                {section.subtitle}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* VISTA EXPANDIDA */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            initial={{ rotate: 45, scale: 0.5, borderRadius: '20px' }} animate={{ rotate: 0, scale: 1, borderRadius: '0px' }} exit={{ rotate: 45, scale: 0.5, opacity: 0 }} transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={{ 
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
              background: sections.find(s => s.id === selectedId).color, 
              backdropFilter: 'blur(20px)', 
              zIndex: 50, display: 'flex', flexDirection: 'column', padding: '40px', overflowY: 'hidden', transformOrigin: 'center center' 
            }}
          >
            <motion.div initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.1, duration: 0.4 }} style={{ width: '100%', height: '100%', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <motion.h1 layoutId={`title-${selectedId}`} style={{ fontSize: '3rem', color: 'white', margin: 0 }}>{sections.find(s => s.id === selectedId).title}</motion.h1>
                    <motion.p layoutId={`subtitle-${selectedId}`} style={{ fontSize: '1.2rem', color: '#ddd', margin: 0 }}>{sections.find(s => s.id === selectedId).subtitle}</motion.p>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); setSelectedId(null); }} style={{ background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50px', padding: '10px 20px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}><FaArrowLeft /> VOLVER</button>
                </div>
                
                <div style={{ flex: 1, minHeight: 0 }}>{renderContent(selectedId)}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL DE FINALIZACIÓN --- */}
      <AnimatePresence>
        {showFinale && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'rgba(0,0,0,0.85)', zIndex: 100,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              style={{
                background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
                padding: '40px', borderRadius: '20px', maxWidth: '600px', textAlign: 'center',
                color: 'white', boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }} 
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '4rem', marginBottom: '20px' }}
              >
                🚀
              </motion.div>
              
              <h2 style={{ fontSize: '2.5rem', margin: '0 0 20px 0', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                ¡Recorrido Completo!
              </h2>
              
              <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px', color: '#eee' }}>
                "Estoy recién empezando en este mundo, pero con mucha energía y pasión. 
                <br /><br />
                <strong>Si esto es lo que hago ahora... ¡Imagínense cuando sea Senior!</strong> 
                <br /><br />
                Estamos hechos para cosas grandes."
              </p>

              <button 
                onClick={() => { 
                    setShowFinale(false); 
                    setSelectedId('contacto'); // Lleva a contacto
                }} 
                style={{
                  background: 'white', color: '#b21f1f', border: 'none',
                  padding: '15px 30px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 'bold',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', margin: '0 auto',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}
              >
                <FaHandshake /> ¡Trabajemos Juntos!
              </button>
              
              <div style={{ marginTop: '20px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setShowFinale(false)}>
                Cerrar y seguir explorando
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default NavigationX;