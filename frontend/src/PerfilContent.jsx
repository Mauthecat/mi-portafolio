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
        width: '98%',
        margin: '0 auto',
        gap: '10px',
        overflowY: 'auto', // Habilitamos scroll para ambas vistas si el contenido desborda
        overflowX: 'hidden',
        /* AGREGAMOS UN PADDING REAL ABAJO PARA QUE NADA CHOQUE */
        paddingBottom: isMobile ? '80px' : '40px', 
        paddingRight: '10px',
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
        gap: isMobile ? '25px' : '30px', 
        flexShrink: 0, // Evita que se colapse
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
            minWidth: 0 
          }}
        >
          <div style={{ paddingRight: isMobile ? '5px' : '15px', zIndex: 2 }}>
              <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', margin: '0 0 5px 0', color: 'white' }}>
                  César Hormazábal
              </h2>
              <h3 style={{ fontSize: '1rem', color: '#3498db', marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaTerminal /> Analista Programador & Soporte TI
              </h3>

              <div style={{ marginTop: '20px', color: '#ccc', fontSize: '1rem', lineHeight: '1.6', textAlign: 'justify' }}>
                  <p>
                      Soy estudiante de informática a punto de titularme. Me considero una persona trabajadora y responsable, con ganas de aprender y aportar en lo que sea necesario.
                  </p>
                  <p>
                      En mi experiencia laboral, trabajé como <strong>Front End Developer</strong> en <em>Solutions OS</em> desarrollando el apartado visual para proyectos como neumaticospro.cl. Anteriormente, cubrí un puesto de <strong>Soporte TI</strong> en <em>MPG (Codelco)</em>, encargándome de la mantención de equipos y soporte a usuarios.
                  </p>
                  <p>
                      Cuento con conocimientos variados, desde el desarrollo de software hasta infraestructura y soporte técnico.
                  </p>
              </div>

              <div style={{ marginTop: '20px' }}>
                  <h4 style={{ color: '#fff', borderBottom: '1px solid #444', paddingBottom: '5px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', textTransform: 'uppercase' }}>
                      <FaServer /> Herramientas & Conocimientos
                  </h4>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' }}>
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
            /* Altura fija en móvil para que el iframe no se pierda */
            height: isMobile ? '450px' : '550px', 
            order: isMobile ? 2 : 1
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

      {/* ESPACIADOR FINAL: La clave para que el margin funcione siempre */}
      <div style={{ height: '4px', width: '100%', flexShrink: 0 }}></div>

      {!isMobile && (
        <motion.div 
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            style={{ position: 'absolute', bottom: '10px', right: '10px', width: '120px', zIndex: 1, pointerEvents: 'none' }}
        >
            <img src="/gif2.gif" alt="Gato" style={{ width: '100%', height: 'auto', flexShrink: 0 }} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default PerfilContent;