import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaHandshake } from 'react-icons/fa'; 
import PerfilContent from './PerfilContent';
import ContactoContent from './ContactoContent';
import ExperienciaContent from './ExperienciaContent';
import ShowcaseContent from './ShowcaseContent';
import FondoAnimado from './FondoAnimado';

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
  const [visited, setVisited] = useState(new Set()); 
  const [showFinale, setShowFinale] = useState(false); 
  const [hasShownFinale, setHasShownFinale] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedId) {
      setVisited(prev => {
        const newSet = new Set(prev);
        newSet.add(selectedId);
        return newSet;
      });
    }
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId && visited.size === sections.length && !hasShownFinale) {
      const timer = setTimeout(() => {
        setShowFinale(true);
        setHasShownFinale(true);
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

      {/* BICI OVERLAY (Reemplazo del gato) */}
      <AnimatePresence>
        {!selectedId && (
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: 'spring', bounce: 0.5 }}
            style={{ position: 'absolute', zIndex: 30, width: '150px', height: '150px', pointerEvents: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <img src="/bici.gif" alt="Bici Animada" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- EL ROMBO CONTENIDO (Achicado un 5%) --- */}
      <motion.div 
        animate={{ 
          rotate: 45,
          scale: selectedId ? 1.2 : 1,
          opacity: selectedId ? 0 : 1 
        }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr',
          gap: '12px', // Ligera reducción del gap
          width: '75vmin', height: '75vmin', // REDUCIDO DE 80vmin A 75vmin
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
              padding: '20px', borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {section.image && (
               <motion.img 
                 src={section.image}
                 initial={{ opacity: 0, scale: 0.8, rotate: -45, x: "-50%", y: "-50%" }}
                 animate={{ opacity: 0.4, scale: 1, rotate: -45, x: "-50%", y: "-50%" }}
                 transition={{ duration: 0.8 }}
                 style={{
                   position: 'absolute', top: '50%', left: '50%',
                   width: '180%', height: '180%', objectFit: 'cover',
                   zIndex: 0
                 }}
               />
            )}
            <motion.div 
              style={{ 
                transform: 'rotate(-45deg)', textAlign: 'center', zIndex: 2, 
                textShadow: '0 2px 10px rgba(0,0,0,0.8)'
              }}
            >
              {/* Ajuste dinámico de texto para que no desborde en móvil */}
              <motion.h2 layoutId={`title-${section.id}`} style={{ margin: 0, color: '#fff', fontSize: 'clamp(1.2rem, 4vw, 2.2rem)', fontWeight: '900', lineHeight: 1 }}>
                {section.title}
              </motion.h2>
              <motion.p layoutId={`subtitle-${section.id}`} style={{ margin: 0, color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.7rem, 2vw, 1rem)' }}>
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
            initial={{ rotate: 45, scale: 0.5, borderRadius: '20px' }} 
            animate={{ rotate: 0, scale: 1, borderRadius: '0px' }} 
            exit={{ rotate: 45, scale: 0.5, opacity: 0 }} 
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={{ 
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
              background: sections.find(s => s.id === selectedId).color, 
              zIndex: 50, display: 'flex', flexDirection: 'column', padding: '20px', // Menos padding en móvil
              overflowY: 'hidden' 
            }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ width: '100%', height: '100%', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <div>
                    <motion.h1 layoutId={`title-${selectedId}`} style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', color: 'white', margin: 0 }}>{sections.find(s => s.id === selectedId).title}</motion.h1>
                  </div>
                  <button onClick={() => setSelectedId(null)} style={{ background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50px', padding: '8px 15px', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}><FaArrowLeft /> VOLVER</button>
                </div>
                
                <div style={{ flex: 1, minHeight: 0 }}>{renderContent(selectedId)}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL DE FINALIZACIÓN RESPONSIVO */}
      <AnimatePresence>
        {showFinale && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'rgba(0,0,0,0.9)', zIndex: 100,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              backdropFilter: 'blur(10px)', padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }} animate={{ scale: 1 }}
              style={{
                background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
                padding: '30px', borderRadius: '20px', maxWidth: '500px', width: '100%', textAlign: 'center',
                color: 'white', border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🚀</div>
              <h2 style={{ fontSize: '1.8rem', margin: '0 0 15px 0' }}>¡Recorrido Completo!</h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.4', marginBottom: '20px' }}>
                "Estoy recién empezando en este mundo... <br/><b>¡Imagínense cuando sea Senior!</b>"
              </p>
              <button 
                onClick={() => { setShowFinale(false); setSelectedId('contacto'); }} 
                style={{ background: 'white', color: '#b21f1f', border: 'none', padding: '12px 25px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                ¡Trabajemos Juntos!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default NavigationX;