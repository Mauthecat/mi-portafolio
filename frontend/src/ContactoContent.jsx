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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', 
        height: '100%',
        width: '100%', // Ancho total
        boxSizing: 'border-box',
        gap: '15px',
        padding: isMobile ? '10px' : '20px',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      
      {/* BREADCRUMB - Alineado al borde del contenido centrado */}
      <div style={{ 
        width: '100%', 
        maxWidth: '800px', // Tope para que no se pegue a los bordes en PC
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px', 
        color: 'rgba(255,255,255,0.4)', 
        fontSize: '0.9rem',
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
        <span style={{ color: 'white', fontWeight: 'bold' }}>Contacto</span>
      </div>

      {/* CONTENEDOR PRINCIPAL CENTRADO */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: isMobile ? 'flex-start' : 'center', 
        flex: 1, 
        width: '100%',
        maxWidth: '900px', // Centra el bloque entero
        margin: '0 auto' 
      }}>
        
        {/* ENCABEZADO */}
        <motion.div variants={itemVariants} style={{ textAlign: 'center', width: '100%' }}>
          <div style={{ display: 'inline-block', padding: '5px 15px', background: 'rgba(46, 204, 113, 0.2)', color: '#2ecc71', borderRadius: '20px', marginBottom: '15px', border: '1px solid rgba(46, 204, 113, 0.4)', fontWeight: 'bold', fontSize: '0.8rem' }}>
              <span style={{ marginRight: '8px' }}>●</span> DISPONIBILIDAD INMEDIATA
          </div>
          
          <h2 style={{ fontSize: isMobile ? '1.8rem' : '3rem', margin: '0 auto', color: 'white', lineHeight: 1.2, maxWidth: '600px' }}>
            Busco mi <span style={{ color: '#3498db' }}>Práctica Profesional</span>
          </h2>
          
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            color: '#ccc', 
            marginTop: '20px', 
            lineHeight: '1.6', 
            textAlign: 'center', // Cambiado de justify a center para móviles
            maxWidth: '650px',
            margin: '20px auto 0' // Centra el bloque de texto
          }}>
            ¡Hola! Ya finalicé todas mis asignaturas y estoy listo para integrarme a tu equipo.
            <br />
            Busco una oportunidad para aplicar mis conocimientos en <strong>Desarrollo Full Stack</strong>, <strong>IoT</strong>, <strong>Redes y Ciberseguridad</strong> o <strong>Infraestructura TI</strong>. Tengo las ganas, la base técnica y la energía para aportar desde el día uno.
          </p>
        </motion.div>

        {/* GRID DE TARJETAS */}
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          width: '100%', 
          marginTop: '25px',
          paddingBottom: '40px' 
        }}>
          
          {/* WHATSAPP */}
          <motion.a 
            variants={itemVariants}
            href="https://wa.me/56941122963" 
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(37, 211, 102, 0.15)', borderColor: '#25D366' }}
            whileTap={{ scale: 0.95 }}
            style={cardStyle}
          >
            <FaWhatsapp style={{ fontSize: '2rem', color: '#25D366', marginBottom: '10px' }} />
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>WhatsApp</h3>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.8rem' }}>(+569) 4112 2963</p>
          </motion.a>

          {/* CORREO */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(231, 76, 60, 0.15)', borderColor: '#e74c3c' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCopy('ces.hormazabal.g@gmail.com')}
            style={{ ...cardStyle, cursor: 'copy' }}
          >
            <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.6rem', color: copied ? '#2ecc71' : '#555' }}>
              {copied ? <FaCheck /> : <FaCopy />}
            </div>
            <FaEnvelope style={{ fontSize: '2rem', color: '#e74c3c', marginBottom: '10px' }} />
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>Correo</h3>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.8rem', wordBreak: 'break-all' }}>ces.hormazabal.g@gmail.com</p>
          </motion.div>

          {/* LINKEDIN */}
          <motion.a 
            variants={itemVariants}
            href="https://www.linkedin.com/in/césar-hormazábal-2a0719a4" 
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 119, 181, 0.15)', borderColor: '#0077b5' }}
            whileTap={{ scale: 0.95 }}
            style={cardStyle}
          >
            <FaLinkedin style={{ fontSize: '2rem', color: '#0077b5', marginBottom: '10px' }} />
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem' }}>LinkedIn</h3>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.8rem' }}>Ver Perfil Profesional</p>
          </motion.a>

        </div>
      </div>
    </motion.div>
  );
};

const cardStyle = {
  flex: isMobile ? '1 1 100%' : '1 1 200px', // En móvil ocupan todo el ancho para centrar mejor
  maxWidth: '280px',
  minWidth: '220px',
  background: 'rgba(255,255,255,0.03)',
  borderRadius: '15px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: 'white',
  border: '1px solid rgba(255,255,255,0.08)',
  transition: 'all 0.3s ease',
  position: 'relative'
};

export default ContactoContent;