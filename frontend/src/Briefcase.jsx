import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Briefcase = ({ onOpen }) => {
  return (
    <motion.div 
      // Animación de salida: Se agranda (zoom in) y desaparece
      exit={{ scale: 20, opacity: 0, transition: { duration: 0.8 } }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        background: '#1a1a1a',
        position: 'absolute',
        zIndex: 10
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5, color: '#e67e22' }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, y: -100 }}
        animate={{ scale: 1, y: 0 }}
        onClick={onOpen}
        style={{ cursor: 'pointer', color: '#f39c12', fontSize: '120px' }}
      >
        <FaBriefcase />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ marginTop: '20px', color: '#fff', fontFamily: 'monospace' }}
      >
        CLICK PARA ABRIR EL PORTAFOLIO
      </motion.p>
    </motion.div>
  );
};

export default Briefcase;