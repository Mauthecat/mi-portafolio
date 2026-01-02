import React from 'react';
import { motion } from 'framer-motion';
// Agregamos FaHome y FaChevronRight
import { FaFilePdf, FaDownload, FaTerminal, FaServer, FaHome, FaChevronRight } from 'react-icons/fa';

// Recibimos onClose
const PerfilContent = ({ onClose }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const skills = [
    'Windows Server', 'Ciberseguridad', 'Linux', 
    'Python', 'Java', 'Lenguaje C', 
    'React', 'Django', 'SQL Developer', 
    'Git', 'DevOps', 'VirtualBox',
    'Soporte TI', 'Redes Neuronales'
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        flexDirection: 'column', // Cambiamos a columna para poner el breadcrumb arriba
        height: '100%',
        width: '100%',
        gap: '10px'
      }}
    >
      {/* --- BREADCRUMB INTERACTIVO --- */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        color: 'rgba(255,255,255,0.4)', 
        fontSize: '0.9rem',
        paddingLeft: '5px' // Un poco de aire a la izquierda
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

      {/* --- CONTENIDO PRINCIPAL (Dos Columnas) --- */}
      <div style={{ 
        display: 'flex', 
        gap: '40px', 
        flex: 1, // Ocupa el resto de la altura
        alignItems: 'stretch',
        width: '100%'
      }}>

        {/* --- COLUMNA IZQUIERDA: VISUALIZADOR CV --- */}
        <motion.div 
          variants={itemVariants} 
          style={{ 
            flex: '1', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '20px', 
            overflow: 'hidden', 
            position: 'relative', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', flexDirection: 'column'
          }}
        >
          <div style={{ padding: '15px', background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc', fontWeight: 'bold', fontSize: '0.9rem' }}>
                <FaFilePdf style={{ color: '#e74c3c'}} /> Curriculum Vitae
              </span>
              <a href="/cv.pdf" download="Cesar_Hormazabal_CV.pdf" style={{ background: '#3498db', color: 'white', textDecoration: 'none', padding: '8px 15px', borderRadius: '20px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                  <FaDownload /> Descargar
              </a>
          </div>
          <iframe 
              src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0" 
              style={{ flex: 1, width: '100%', border: 'none', background: '#fff' }}
              title="Curriculum Vitae"
          />
        </motion.div>

        {/* --- COLUMNA DERECHA: BIO + SKILLS + GATO --- */}
        <motion.div variants={itemVariants} style={{ flex: '1', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          
          <div style={{ paddingRight: '20px', zIndex: 2 }}>
              <h2 style={{ fontSize: '2.8rem', margin: '0 0 5px 0', color: 'white' }}>
                  César Hormazábal
              </h2>
              <h3 style={{ fontSize: '1.1rem', color: '#3498db', marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
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

              {/* SECCIÓN DE SKILLS */}
              <div style={{ marginTop: '25px' }}>
                  <h4 style={{ color: '#fff', borderBottom: '1px solid #444', paddingBottom: '5px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FaServer /> Herramientas & Conocimientos
                  </h4>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px', maxWidth: '90%' }}>
                      {skills.map(skill => (
                          <span key={skill} style={{ 
                              background: 'rgba(255, 255, 255, 0.08)', 
                              color: '#ddd', 
                              border: '1px solid rgba(255, 255, 255, 0.1)', 
                              padding: '4px 12px', 
                              borderRadius: '6px', 
                              fontSize: '0.8rem',
                              cursor: 'default',
                              whiteSpace: 'nowrap'
                          }}>
                              {skill}
                          </span>
                      ))}
                  </div>
              </div>
          </div>

          {/* GATO */}
          <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              style={{ 
                  position: 'absolute', 
                  bottom: '0px', 
                  right: '0px', 
                  width: '160px', 
                  zIndex: 1,
                  pointerEvents: 'none'
              }}
          >
              <img src="/gif2.gif" alt="Gato programador" style={{ width: '100%', height: 'auto' }} />
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default PerfilContent;