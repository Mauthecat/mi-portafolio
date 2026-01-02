import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaCopy, FaCheck, FaHome, FaChevronRight } from 'react-icons/fa';

const ContactoContent = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const cardStyle = {
    flex: '1 1 250px',
    maxWidth: '300px',
    minWidth: '250px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '15px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.1)',
    position: 'relative',
    cursor: 'pointer'
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '10px',
        boxSizing: 'border-box'
      }}
    >
      {/* BREADCRUMB */}
      <div style={{ 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        color: 'rgba(255,255,255,0.4)', 
        fontSize: '0.9rem',
        marginBottom: '20px'
      }}>
        <span onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
          <FaHome /> Inicio
        </span>
        <FaChevronRight style={{ fontSize: '0.7rem' }} />
        <span style={{ color: 'white', fontWeight: 'bold' }}>Contacto</span>
      </div>

      {/* CONTENIDO */}
      <div style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}>
        <motion.div variants={itemVariants}>
          <div style={{ display: 'inline-block', padding: '5px 15px', background: 'rgba(46, 204, 113, 0.2)', color: '#2ecc71', borderRadius: '20px', marginBottom: '15px', border: '1px solid rgba(46, 204, 113, 0.4)', fontWeight: 'bold', fontSize: '0.8rem' }}>
            ● DISPONIBILIDAD INMEDIATA
          </div>
          
          <h2 style={{ fontSize: isMobile ? '1.8rem' : '3rem', margin: '0 0 15px 0', color: 'white', lineHeight: 1.1 }}>
            Busco mi <span style={{ color: '#3498db' }}>Práctica Profesional</span>
          </h2>
          
          <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', color: '#ccc', lineHeight: '1.6', margin: '0 auto', maxWidth: '600px' }}>
            ¡Hola! Ya finalicé todas mis asignaturas y estoy listo para integrarme a tu equipo.
            <br /><br />
            Busco una oportunidad para aplicar mis conocimientos en <strong>Desarrollo Full Stack</strong>, <strong>IoT</strong>, <strong>Redes y Ciberseguridad</strong> o <strong>Infraestructura TI</strong>. Tengo las ganas, la base técnica y la energía para aportar desde el día uno.
          </p>
        </motion.div>

        {/* TARJETAS */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px', paddingBottom: '50px' }}>
          
          <motion.a variants={itemVariants} href="https://wa.me/56941122963" target="_blank" style={cardStyle}>
            <FaWhatsapp style={{ fontSize: '2.5rem', color: '#25D366', marginBottom: '10px' }} />
            <h3 style={{ margin: '0', fontSize: '1.1rem' }}>WhatsApp</h3>
            <p style={{ margin: '5px 0 0 0', color: '#aaa', fontSize: '0.9rem' }}>(+569) 4112 2963</p>
          </motion.a>

          <motion.div variants={itemVariants} onClick={() => handleCopy('ces.hormazabal.g@gmail.com')} style={cardStyle}>
            <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.7rem', color: copied ? '#2ecc71' : '#555' }}>
              {copied ? <FaCheck /> : <FaCopy />}
            </div>
            <FaEnvelope style={{ fontSize: '2.5rem', color: '#e74c3c', marginBottom: '10px' }} />
            <h3 style={{ margin: '0', fontSize: '1.1rem' }}>Correo</h3>
            <p style={{ margin: '5px 0 0 0', color: '#aaa', fontSize: '0.8rem' }}>ces.hormazabal.g@gmail.com</p>
          </motion.div>

          <motion.a variants={itemVariants} href="https://www.linkedin.com/in/césar-hormazábal-2a0719a4" target="_blank" style={cardStyle}>
            <FaLinkedin style={{ fontSize: '2.5rem', color: '#0077b5', marginBottom: '10px' }} />
            <h3 style={{ margin: '0', fontSize: '1.1rem' }}>LinkedIn</h3>
            <p style={{ margin: '5px 0 0 0', color: '#aaa', fontSize: '0.9rem' }}>Ver Perfil Profesional</p>
          </motion.a>

        </div>
      </div>
    </motion.div>
  );
};

export default ContactoContent;