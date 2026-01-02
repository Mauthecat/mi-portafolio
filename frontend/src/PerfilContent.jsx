import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload, FaTerminal, FaServer, FaHome, FaChevronRight } from 'react-icons/fa';

const PerfilContent = ({ onClose }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const skills = [
    'Windows Server', 'Ciberseguridad', 'Linux', 'Sistemas Operativos',
    'Python', 'Java', 'Lenguaje C', 'SQL Developer',
    'Bases de Datos No Estructuradas', 'Oracle Networking', 'Hardware & Software',
    'Seguridad de la Información', 'React (FrontEnd)', 'Django (BackEnd)', 
    'Git', 'DevOps', 'Virtualización (VirtualBox)', 'IA Generativa', 
    'Robótica & Arduino (ESP32)', 'Metodologías Ágiles', 'Administración de Proyectos',
    'Aplicaciones Móviles', 'Innovación & Emprendimiento', 'Soporte TI'
  ];

  const isMobile = window.innerWidth <= 768;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '98%', // Reducimos ligeramente para dar aire a los bordes
        margin: '0 auto', // Centramos el contenido
        gap: '10px',
        overflowY: isMobile ? 'auto' : 'hidden',
        paddingBottom: isMobile ? '40px' : '0',
        paddingRight: '10px', // Espacio de seguridad para el borde derecho
        boxSizing: 'border-box'
      }}
    >
      {/* BREADCRUMB */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        color: 'rgba(255,255,255,0.4)', 
        fontSize: '0.9rem',
        paddingLeft: '5px',
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
        <span style={{ color: 'white', fontWeight: 'bold' }}>Perfil</span>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        gap: isMobile ? '20px' : '30px', 
        flex: 1,
        width: '100%',
        boxSizing: 'border-box'
      }}>

        {/* --- COLUMNA DE BIO + SKILLS --- */}
        <motion.div 
          variants={itemVariants} 
          style={{ 
            flex: '1', 
            display: 'flex', 
            flexDirection: 'column', 
            order: isMobile ? 1 : 2,
            minWidth: 0 // Evita que el flexbox se desborde por contenidos largos
          }}
        >
          <div style={{ paddingRight: isMobile ? '5px' : '15px', zIndex: 2 }}>
              <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', margin: '0 0 5px 0', color: 'white' }}>
                  César Hormazábal
              </h2>
              <h3 style={{ fontSize: '1rem', color: '#3498db', marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaTerminal /> Analista Programador & Soporte TI
              </h3>

              <div style={{ marginTop: '15px', color: '#ccc', fontSize: '0.95rem', lineHeight: '1.5', textAlign: 'justify' }}>
                  <p>Soy estudiante de informática a punto de titularme. Me considero una persona trabajadora y responsable, con ganas de aprender y aportar.</p>
                  <p>En <strong>Solutions OS</strong> desarrollé interfaces visuales (Front End), y en <strong>MPG (Codelco)</strong> realicé soporte técnico y mantención de equipos.</p>
              </div>

              {/* SECCIÓN DE SKILLS */}
              <div style={{ marginTop: '20px' }}>
                  <h4 style={{ color: '#fff', borderBottom: '1px solid #444', paddingBottom: '5px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase' }}>
                      <FaServer /> Herramientas & Conocimientos
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    gap: '6px', 
                    flexWrap: 'wrap', 
                    marginTop: '10px',
                    width: '100%' 
                  }}>
                      {skills.map(skill => (
                          <span key={skill} style={{ 
                              background: 'rgba(255, 255, 255, 0.08)', 
                              color: '#ddd', 
                              border: '1px solid rgba(255, 255, 255, 0.1)', 
                              padding: '4px 10px', 
                              borderRadius: '4px', 
                              fontSize: '0.75rem'
                          }}>
                              {skill}
                          </span>
                      ))}
                  </div>
              </div>
          </div>
        </motion.div>

        {/* --- COLUMNA DE CV --- */}
        <motion.div 
          variants={itemVariants} 
          style={{ 
            flex: '1', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '20px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', 
            flexDirection: 'column',
            minHeight: isMobile ? '350px' : 'auto',
            order: isMobile ? 2 : 1,
            marginBottom: isMobile ? '20px' : '0'
          }}
        >
          <div style={{ padding: '12px', background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ccc', fontWeight: 'bold', fontSize: '0.8rem' }}>
                <FaFilePdf style={{ color: '#e74c3c'}} /> CV
              </span>
              <a href="/cv.pdf" download="Cesar_Hormazabal_CV.pdf" style={{ background: '#3498db', color: 'white', textDecoration: 'none', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold' }}>
                  <FaDownload /> Descargar
              </a>
          </div>
          <iframe 
              src="/cv.pdf#view=FitH" 
              style={{ flex: 1, width: '100%', border: 'none', background: '#fff' }}
              title="Curriculum Vitae"
          />
        </motion.div>
      </div>

      {!isMobile && (
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            style={{ 
                position: 'absolute', bottom: '10px', right: '10px', width: '120px', zIndex: 1, pointerEvents: 'none'
            }}
        >
            <img src="/gif2.gif" alt="Gato" style={{ width: '100%', height: 'auto' }} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default PerfilContent;