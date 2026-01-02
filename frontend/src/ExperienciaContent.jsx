import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaTools, FaCube, FaYoutube, FaArrowRight, FaLeaf, FaHome, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ExperienciaContent = ({ goToContact, onClose }) => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleBack = () => {
    setIsClosing(true); // Desactiva interacciones inmediatamente
    onClose();
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      id: 1,
      type: 'web',
      title: 'NeumaticosPro',
      subtitle: 'Frontend Web',
      desc: 'Trabajos de desarrollo FrontEnd y junior en el BackEnd para contribuir en la Interfaz y UX.',
      color: '#e67e22',
      icon: <FaExternalLinkAlt />,
      media: '/neumaticos.png', 
      link: 'https://neumaticospro.cl'
    },
    {
      id: 2,
      type: 'video',
      title: 'HealthStream',
      subtitle: 'Gestión Salud',
      desc: 'Como proyecto final del Ramo de Proyecto integrado desarrollé un Sistema integral de ambulancias para la gestion de pacientes.',
      color: '#c0392b',
      icon: <FaYoutube />,
      videoId: 'p7j2k0sj9Hc' 
    },
    {
      id: 3,
      type: 'video', 
      title: 'FoodStream',
      subtitle: 'App Android IoT',
      desc: 'Como proyecto final del Ramo de Desarrollo IOT, asi como del ramo "Ingenieria de Software" cree un sistema de Control de dispensadores para gatos. (android studio + firebase + esp32)',
      color: '#27ae60',
      icon: <FaYoutube />,
      videoId: 'lXWkZpCrunY' 
    },
    {
      id: 4,
      type: 'hardware',
      title: 'Soporte TI',
      subtitle: 'Mantenimiento',
      desc: 'Diagnóstico y reparación de equipos computacionales.',
      color: '#3498db',
      icon: <FaTools />,
      media: '/compu.png'
    },
    {
      id: 5,
      type: '3d',
      title: 'Modelado 3D y Desarrollo IOT',
      subtitle: 'Prototipado',
      desc: 'Diseño de piezas para impresión y de sistemas iot capaces de solucionar problemas reales.',
      color: '#9b59b6',
      icon: <FaCube />,
      media: '/iot.png'
    },
    {
      id: 6,
      type: 'soft',
      title: 'Visión',
      subtitle: 'Sustentabilidad',
      desc: 'Mis amor por el entorno y el autoconocimiento, me lleva a pensar desde distintos prismas, sin olvidar la Eficiencia y Responsabilidad. ',
      color: '#16a085',
      icon: <FaLeaf />,
      media: '/vision.png'
    },
    {
      id: 7,
      type: 'cta',
      title: 'Contacto',
      subtitle: 'Hablemos',
      desc: 'Trabajemos juntos.',
      color: '#fff',
      icon: <FaArrowRight />,
      media: '/paisaje.png',
      action: true
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, pointerEvents: 'none' }} // Crucial: Al salir, deja de capturar clics
      transition={{ duration: 0.3 }}
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        padding: '0 2%',
        boxSizing: 'border-box'
        pointerEvents: isClosing ? 'none' : 'auto',
        position: 'relative',
        zIndex: isClosing ? 0 : 50 // Se baja el nivel al cerrar
      }}
    >
      {/* BREADCRUMB */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '5px' }}>
        <motion.span 
          onClick={handleBack} // Usamos la función handleBack mejorada
          whileHover={{ scale: 1.05, color: 'white' }} 
          style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
        >
            <FaHome /> Inicio
        </motion.span>
        <FaChevronRight style={{ fontSize: '0.7rem' }} />
        <span style={{ color: 'white', fontWeight: 'bold' }}>Experiencia</span>
      </div>

      <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', margin: '0 0 5px 0', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '5px' }}>
        Galería de Proyectos
      </h2>

      <div style={{ position: 'relative', flex: 1, width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        
        {!isMobile && (
          <>
            <button onClick={() => scroll('left')} style={{ position: 'absolute', left: '10px', zIndex: 20, background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '45px', height: '45px', cursor: 'pointer' }}><FaChevronLeft /></button>
            <button onClick={() => scroll('right')} style={{ position: 'absolute', right: '10px', zIndex: 20, background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '45px', height: '45px', cursor: 'pointer' }}><FaChevronRight /></button>
          </>
        )}

        <div 
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: '20px', 
              overflowX: 'auto',
              padding: '10px 0',
              height: isMobile ? 'auto' : '100%',
              maxHeight: isMobile ? '450px' : 'none', // Control de altura para móvil
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
                  minWidth: isMobile ? '300px' : '350px', 
                  width: isMobile ? '300px' : '350px',
                  height: isMobile ? '400px' : '90%', // Altura fija en móvil
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: `1px solid ${card.color}33`, 
                  flexShrink: 0 
                }}
            >
                <div style={{ height: '50%', background: '#000', position: 'relative' }}>
                {card.type === 'video' ? (
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${card.videoId}`} title={card.title} frameBorder="0" allowFullScreen />
                ) : (
                    <img src={card.media} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', padding: '8px', borderRadius: '50%', color: card.color }}>
                    {card.icon}
                </div>
                </div>

                <div style={{ flex: 1, padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(10,10,10,0.95)' }}>
                  <div>
                      <h3 style={{ margin: 0, color: card.color, fontSize: '1.2rem' }}>{card.title}</h3>
                      <h4 style={{ margin: '5px 0', color: '#888', fontSize: '0.8rem' }}>{card.subtitle}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: '1.3', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {card.desc}
                      </p>
                  </div>

                  {card.action ? (
                      <button onClick={goToContact} style={{ width: '100%', padding: '10px', background: '#e74c3c', border: 'none', color: 'white', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Ir a Contacto
                      </button>
                  ) : card.link && (
                      <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', width: '95%', padding: '8px', border: `1px solid ${card.color}`, color: card.color, borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        Ver Proyecto
                      </a>
                  )}
                </div>
            </motion.div>
            ))}
        </div>
      </div>
      {isMobile && <div style={{ height: '30px', flexShrink: 0 }}></div>}
    </motion.div>
  );
};

export default ExperienciaContent;