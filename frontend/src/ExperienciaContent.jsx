import React, { useRef } from 'react';
import { motion } from 'framer-motion';
// Agregamos FaChevronLeft
import { FaExternalLinkAlt, FaAndroid, FaTools, FaCube, FaYoutube, FaArrowRight, FaLeaf, FaHome, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ExperienciaContent = ({ goToContact, onClose }) => {
  const scrollRef = useRef(null);

  // Lógica para mover el scroll con las flechas
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Desplaza 350px (aprox el ancho de una carta)
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // DATOS DE LAS TARJETAS
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
      desc: 'Mis experiencias de vida me hacen poseer un gran amor por el entorno, el cual siempre me lleva a pensar desde distintos prismas, sin olvidar la Eficiencia y Responsabilidad. ',
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

  // Estilos para los botones de flecha
  const arrowButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.6)',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 20,
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        padding: '0 2%' 
      }}
    >
      
      {/* --- BREADCRUMB --- */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        color: 'rgba(255,255,255,0.4)', 
        fontSize: '0.9rem', 
        marginBottom: '10px',
        marginTop: '-10px' 
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

      <h2 style={{ 
        fontSize: '2rem', 
        margin: '0 0 10px 0', 
        color: 'white', 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '10px'
      }}>
        Galería de Proyectos
      </h2>

      {/* --- WRAPPER RELATIVO PARA POSICIONAR FLECHAS --- */}
      <div style={{ position: 'relative', flex: 1, width: '100%', overflow: 'hidden' }}>

        {/* FLECHA IZQUIERDA */}
        <motion.button 
            whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            style={{ ...arrowButtonStyle, left: '10px' }}
        >
            <FaChevronLeft size={20} />
        </motion.button>

        {/* FLECHA DERECHA */}
        <motion.button 
            whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            style={{ ...arrowButtonStyle, right: '10px' }}
        >
            <FaChevronRight size={20} />
        </motion.button>

        {/* --- CONTENEDOR DE SCROLL HORIZONTAL --- */}
        <div 
            ref={scrollRef}
            style={{
            display: 'flex',
            gap: '2%', 
            overflowX: 'auto',
            padding: '10px 0',
            height: '100%', 
            alignItems: 'center', 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth' 
            }}
        >
            {cards.map((card) => (
            <motion.div
                key={card.id}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                minWidth: '22vw', 
                maxWidth: '350px', 
                height: '85%', 
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '15px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: `1px solid ${card.color}33`, 
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                position: 'relative',
                flexShrink: 0 
                }}
            >
                <div style={{ height: '55%', background: '#000', position: 'relative', overflow: 'hidden' }}>
                {card.type === 'video' ? (
                    <iframe 
                    width="100%" height="100%" 
                    src={`https://www.youtube.com/embed/${card.videoId}`} 
                    title={card.title} frameBorder="0" allowFullScreen
                    />
                ) : (card.action && !card.media) ? ( 
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #e74c3c, #c0392b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FaArrowRight style={{ fontSize: '4vw', color: 'white', opacity: 0.5 }} />
                    </div>
                ) : (
                    <img 
                    src={card.media} 
                    alt={card.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: card.type === 'soft' ? 0.8 : 1 }} 
                    onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300?text=Proyecto'}}
                    />
                )}
                
                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', padding: '8px', borderRadius: '50%', color: card.color, fontSize: '0.9rem' }}>
                    {card.icon}
                </div>
                </div>

                <div style={{ height: '45%', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(10,10,10,0.95)' }}>
                <div>
                    <h3 style={{ margin: 0, color: card.color, fontSize: '1.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{card.title}</h3>
                    <h4 style={{ margin: '5px 0', color: '#888', fontSize: '0.8rem', textTransform: 'uppercase' }}>{card.subtitle}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: '1.3', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {card.desc}
                    </p>
                </div>

                {card.action ? (
                    <button onClick={goToContact} style={{ width: '100%', padding: '10px', background: '#e74c3c', border: 'none', color: 'white', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem', boxSizing: 'border-box' }}>
                    Ir a Contacto
                    </button>
                ) : card.link && (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ textAlign: 'center', width: '100%', padding: '8px', border: `1px solid ${card.color}`, color: card.color, borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold', display: 'block', boxSizing: 'border-box' }}>
                    Ver Proyecto
                    </a>
                )}
                </div>

            </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienciaContent;