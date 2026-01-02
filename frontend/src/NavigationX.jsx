import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaHandshake } from 'react-icons/fa'; 
import PerfilContent from './PerfilContent';
import ContactoContent from './ContactoContent';
import ExperienciaContent from './ExperienciaContent';
import ShowcaseContent from './ShowcaseContent';
import FondoAnimado from './FondoAnimado';

const sections = [
  { id: 'perfil', title: 'Perfil Profesional', subtitle: 'Acerca de mí', color: 'linear-gradient(135deg, rgba(44, 62, 80, 0.9) 0%, rgba(0,0,0,0.9) 100%)', gridArea: '1 / 1 / 2 / 2', align: 'center', justify: 'center', image: '/gato.png' },
  { id: 'experiencia', title: 'EXPERIENCIA', subtitle: 'Proyectos', image: '/pesca.png', color: 'linear-gradient(225deg, rgba(44, 62, 80, 0.9) 0%, rgba(0,0,0,0.9) 100%)', gridArea: '1 / 2 / 2 / 3', align: 'center', justify: 'center' },
  { id: 'contacto', title: 'CONTACTO', subtitle: 'Hablemos', image: '/trabajo.png', color: 'linear-gradient(45deg, rgba(44, 62, 80, 0.9) 0%, rgba(0,0,0,0.9) 100%)', gridArea: '2 / 1 / 3 / 2', align: 'center', justify: 'center' },
  { id: 'showcase', title: 'SHOWCASE', subtitle: 'Demos', image: '/codigo.png', color: 'linear-gradient(-45deg, rgba(192, 57, 43, 0.9) 0%, rgba(0,0,0,0.9) 100%)', gridArea: '2 / 2 / 3 / 3', align: 'center', justify: 'center' }
];

const NavigationX = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [visited, setVisited] = useState(new Set()); 
  const [showFinale, setShowFinale] = useState(false); 
  const [hasShownFinale, setHasShownFinale] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => { if (event.key === 'Escape') setSelectedId(null); };
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
      background: 'transparent', overflow: 'hidden',
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      
      <FondoAnimado />

      {/* --- EL ROMBO CONTENIDO AJUSTADO --- */}
      <motion.div 
        animate={{ 
          rotate: 45,
          scale: selectedId ? 1.2 : 1,
          opacity: selectedId ? 0 : 1 
        }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gridTemplateRows: '1fr 1fr',
          gap: '12px',
          /* Tamaño responsivo: en móvil usa el 75% del lado más corto, 
             pero en PC nunca supera los 650px para no cortarse */
          width: 'min(75vmin, 650px)', 
          height: 'min(75vmin, 650px)',
          zIndex: 10, 
          pointerEvents: selectedId ? 'none' : 'auto'
        }}
      >
        {sections.map((section) => (
          <motion.div
            key={section.id}
            layoutId={section.id}
            onClick={() => setSelectedId(section.id)}
            whileHover={{ filter: 'brightness(1.2)', scale: 1.02 }}
            style={{
              background: section.color, gridArea: section.gridArea,
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              alignItems: section.justify, justifyContent: section.align,
              padding: '20px', borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {section.image && (
               <motion.img 
                 src={section.image}
                 initial={{ opacity: 0, rotate: -45, x: "-50%", y: "-50%" }}
                 animate={{ opacity: 0.3, rotate: -45, x: "-50%", y: "-50%" }}
                 style={{
                   position: 'absolute', top: '50%', left: '50%',
                   width: '180%', height: '180%', objectFit: 'cover', zIndex: 0
                 }}
               />
            )}
            <motion.div style={{ transform: 'rotate(-45deg)', textAlign: 'center', zIndex: 2 }}>
              <motion.h2 layoutId={`title-${section.id}`} style={{ 
                margin: 0, color: '#fff', 
                fontSize: 'clamp(1rem, 3.5vmin, 2rem)', 
                fontWeight: '900', textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                {section.title}
              </motion.h2>
              <motion.p layoutId={`subtitle-${section.id}`} style={{ 
                margin: 0, color: 'rgba(255,255,255,0.8)', 
                fontSize: 'clamp(0.6rem, 2vmin, 0.9rem)' 
              }}>
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
            initial={{ rotate: 45, scale: 0.8, opacity: 0 }} 
            animate={{ rotate: 0, scale: 1, opacity: 1 }} 
            exit={{ rotate: 45, scale: 0.8, opacity: 0 }}
            style={{ 
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
              background: sections.find(s => s.id === selectedId).color, 
              zIndex: 50, display: 'flex', flexDirection: 'column', 
              padding: 'clamp(10px, 3vw, 40px)', overflowY: 'hidden' 
            }}
          >
            <div style={{ width: '100%', height: '100%', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ paddingRight: '10px' }}>
                    <motion.h1 layoutId={`title-${selectedId}`} style={{ fontSize: 'clamp(1.2rem, 5vw, 2.5rem)', color: 'white', margin: 0 }}>
                      {sections.find(s => s.id === selectedId).title}
                    </motion.h1>
                  </div>
                  <button onClick={() => setSelectedId(null)} style={{ background: 'rgba(0,0,0,0.6)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', padding: '8px 16px', fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <FaArrowLeft /> VOLVER
                  </button>
                </div>
                <div style={{ flex: 1, minHeight: 0, width: '100%' }}>{renderContent(selectedId)}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL DE FINALIZACIÓN */}
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