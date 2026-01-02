import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaTools, FaCube, FaYoutube, FaArrowRight, FaLeaf, FaHome, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ExperienciaContent = ({ goToContact, onClose }) => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const cards = [
    { id: 1, type: 'web', title: 'NeumaticosPro', subtitle: 'Frontend Web', desc: 'Desarrollo FrontEnd y contribución en Interfaz y UX.', color: '#e67e22', icon: <FaExternalLinkAlt />, media: '/neumaticos.png', link: 'https://neumaticospro.cl' },
    { id: 2, type: 'video', title: 'HealthStream', subtitle: 'Gestión Salud', desc: 'Sistema integral de ambulancias para la gestión de pacientes.', color: '#c0392b', icon: <FaYoutube />, videoId: 'p7j2k0sj9Hc' },
    { id: 3, type: 'video', title: 'FoodStream', subtitle: 'App Android IoT', desc: 'Control de dispensadores para gatos (Android + Firebase + ESP32).', color: '#27ae60', icon: <FaYoutube />, videoId: 'lXWkZpCrunY' },
    { id: 4, type: 'hardware', title: 'Soporte TI', subtitle: 'Mantenimiento', desc: 'Diagnóstico y reparación de equipos computacionales.', color: '#3498db', icon: <FaTools />, media: '/compu.png' },
    { id: 5, type: '3d', title: 'Modelado 3D', subtitle: 'Prototipado', desc: 'Diseño de piezas e impresión de sistemas IoT.', color: '#9b59b6', icon: <FaCube />, media: '/iot.png' },
    { id: 6, type: 'soft', title: 'Visión', subtitle: 'Sustentabilidad', desc: 'Enfoque en eficiencia y responsabilidad ambiental.', color: '#16a085', icon: <FaLeaf />, media: '/vision.png' },
    { id: 7, type: 'cta', title: 'Contacto', subtitle: 'Hablemos', desc: 'Trabajemos juntos.', color: '#fff', icon: <FaArrowRight />, media: '/paisaje.png', action: true }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        padding: '0 2%',
        boxSizing: 'border-box'
      }}
    >
      {/* BREADCRUMB */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        color: 'rgba(255,255,255,0.4)', 
        fontSize: '0.85rem', 
        marginBottom: '5px' 
      }}>
        <motion.span 
            onClick={onClose} 
            whileHover={{ scale: 1.05, color: 'white' }} 
            style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
        >
            <FaHome /> Inicio
        </motion.span>
        <FaChevronRight style={{ fontSize: '0.7rem' }} />
        <span style={{ color: 'white', fontWeight: 'bold' }}>Experiencia</span>
      </div>

      {/* Título más compacto para ganar espacio vertical */}
      <h2 style={{ 
        fontSize: isMobile ? '1.2rem' : '1.8rem', 
        margin: '0 0 5px 0', 
        color: 'white', 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '5px'
      }}>
        Galería de Proyectos
      </h2>

      {/* WRAPPER DE TARJETAS */}
      <div style={{ position: 'relative', flex: 1, width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        
        {!isMobile && (
          <>
            <button onClick={() => scroll('left')} style={{ position: 'absolute', left: '5px', zIndex: 20, background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}><FaChevronLeft /></button>
            <button onClick={() => scroll('right')} style={{ position: 'absolute', right: '5px', zIndex: 20, background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}><FaChevronRight /></button>
          </>
        )}

        <div 
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: '15px', 
              overflowX: 'auto',
              padding: '10px 0',
              height: isMobile ? 'auto' : '100%', // En móvil que el contenido mande
              maxHeight: isMobile ? '420px' : 'none', // LIMITAMOS ALTURA EN MÓVIL PARA QUE NO SE CORTE
              alignItems: 'center', 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth' 
            }}
        >
            {cards.map((card) => (
            <motion.div
                key={card.id}
                style={{
                  minWidth: isMobile ? '280px' : '280px', 
                  width: isMobile ? '280px' : '280px',
                  height: isMobile ? '380px' : '90%', // ALTURA FIJA EN MÓVIL
                  background: 'rgba(20,20,20,0.9)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: `1px solid ${card.color}33`, 
                  flexShrink: 0 
                }}
            >
                <div style={{ height: '45%', background: '#000', position: 'relative' }}>
                {card.type === 'video' ? (
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${card.videoId}`} title={card.title} frameBorder="0" allowFullScreen />
                ) : (
                    <img src={card.media} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
                </div>

                <div style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                      <h3 style={{ margin: 0, color: card.color, fontSize: '1rem' }}>{card.title}</h3>
                      <h4 style={{ margin: '2px 0', color: '#888', fontSize: '0.7rem' }}>{card.subtitle}</h4>
                      <p style={{ fontSize: '0.75rem', color: '#ccc', lineHeight: '1.2', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {card.desc}
                      </p>
                  </div>

                  {card.action ? (
                      <button onClick={goToContact} style={{ width: '100%', padding: '8px', background: '#e74c3c', border: 'none', color: 'white', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.8rem' }}>
                        Contacto
                      </button>
                  ) : card.link && (
                      <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', width: '100%', padding: '6px', border: `1px solid ${card.color}`, color: card.color, borderRadius: '6px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        Ver Proyecto
                      </a>
                  )}
                </div>
            </motion.div>
            ))}
        </div>
      </div>
      {/* ESPACIADOR FINAL PARA MÓVIL */}
      {isMobile && <div style={{ height: '20px' }}></div>}
    </motion.div>
  );
};

export default ExperienciaContent;