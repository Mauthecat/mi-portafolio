import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaChevronRight, FaChevronLeft, FaSearch, FaPlus, FaShoppingCart, FaChartLine, FaUsers, FaBox, FaTrash, FaUser, FaBars, FaCog, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';

// ESTILOS CSS INYECTADOS PARA MÓVILES
const MobileStyles = () => (
  <style>{`
    /* Reset base para evitar desbordamientos */
    * { box-sizing: border-box; }
    
    @media (max-width: 768px) {
      .responsive-container { flex-direction: column !important; padding: 10px !important; gap: 15px !important; }
      .mobile-hide { display: none !important; }
      .mobile-full-width { width: 100% !important; flex: none !important; }
      .mobile-grid { grid-template-columns: 1fr 1fr !important; }
      .mobile-inventory-grid { grid-template-columns: 1.5fr 1fr 0.5fr !important; font-size: 0.8rem !important; }
      .mobile-header { padding: 10px !important; }
      .mobile-title { font-size: 1.5rem !important; }
      .mobile-card-stack { grid-template-columns: 1fr !important; }
      .mobile-nav-arrows { padding: 8px !important; }
    }
  `}</style>
);

const EcommerceDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, color: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', text: "Verano" },
    { id: 2, color: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)', text: "Ofertas" },
    { id: 3, color: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', text: "Tech" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const products = [{ id: 1, name: 'Air Max', price: '$120', img: '👟' }, { id: 2, name: 'MacBook', price: '$2000', img: '💻' }, { id: 3, name: 'Sony XM5', price: '$350', img: '🎧' }, { id: 4, name: 'iPhone 15', price: '$999', img: '📱' }];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#f8f9fa', overflowX: 'hidden' }}>
      <div className="mobile-header" style={{ background: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', width: '100%' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#333' }}>SHOP<span style={{ color: '#e74c3c' }}>ify</span></div>
        <div className="mobile-hide" style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#555', fontWeight: '500' }}>
          <span>Inicio</span><span>Productos</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <FaSearch style={{ color: '#777' }} /><FaShoppingCart style={{ color: '#333' }} />
        </div>
      </div>

      <div style={{ height: '140px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode='wait'>
          <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ width: '100%', height: '100%', background: slides[currentSlide].color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
            <h2 style={{ color: 'white', fontSize: '1.5rem' }}>{slides[currentSlide].text}</h2>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="responsive-container" style={{ flex: 1, display: 'flex', padding: '20px', gap: '20px', width: '100%' }}>
        <div className="mobile-full-width" style={{ flex: 3 }}>
          <div className="mobile-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
            {products.map(p => (
              <div key={p.id} style={{ background: 'white', borderRadius: '10px', padding: '10px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2rem' }}>{p.img}</div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{p.name}</div>
                <div style={{ color: '#e74c3c', fontSize: '0.8rem' }}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mobile-full-width" style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '15px' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}>Categorías</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.8rem' }}>
            <span>👟 Zapatillas</span><span>💻 Tecnología</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InventoryDemo = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Monitor 24"', stock: 15, cat: 'Hardware' },
    { id: 2, name: 'Teclado', stock: 8, cat: 'Perifer.' },
    { id: 3, name: 'Mouse', stock: 22, cat: 'Perifer.' },
  ]);

  return (
    <div className="responsive-container" style={{ width: '100%', height: '100%', display: 'flex', background: '#f4f6f9', overflow: 'hidden' }}>
      <div className="mobile-hide" style={{ width: '200px', background: '#2c3e50', color: '#ecf0f1', padding: '20px' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '20px' }}><FaBox /> INVENTARIO</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '15px', gap: '15px', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: '1rem' }}>Productos</h3>
          <button style={{ background: '#27ae60', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', fontSize: '0.7rem' }}>+ Añadir</button>
        </div>
        <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '10px', overflowY: 'auto', width: '100%' }}>
          <div className="mobile-inventory-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.5fr', padding: '5px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
            <span>Item</span><span className="mobile-hide">Cat</span><span>Stock</span><span></span>
          </div>
          {items.map(item => (
            <div key={item.id} className="mobile-inventory-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.5fr', padding: '10px 5px', borderBottom: '1px solid #f9f9f9', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem' }}>{item.name}</span>
              <span className="mobile-hide" style={{ fontSize: '0.7rem' }}>{item.cat}</span>
              <span style={{ color: '#27ae60', fontWeight: 'bold' }}>{item.stock}</span>
              <FaTrash style={{ color: '#e74c3c', cursor: 'pointer' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VideoDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px', width: '100%' }}>
    <div style={{ height: '50%', background: '#000', borderRadius: '10px', overflow: 'hidden', width: '100%' }}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/geurTVG5b5k" title="Demo IA" frameBorder="0" allowFullScreen />
    </div>
    <div style={{ flex: 1, padding: '10px' }}>
      <h3 style={{ fontSize: '1rem', margin: '0 0 5px 0' }}>IA & Python</h3>
      <p style={{ fontSize: '0.85rem', color: '#555', margin: 0 }}>Detección de rostros y análisis de datos avanzado.</p>
    </div>
  </div>
);

const DashboardDemo = () => {
  const [range] = useState('Semana');
  const stats = [
    { label: 'Users', val: '1.2k', col: '#3498db', icon: <FaUsers /> },
    { label: 'Sales', val: '$45k', col: '#e67e22', icon: <FaChartLine /> },
    { label: 'Orders', val: '340', col: '#9b59b6', icon: <FaBox /> }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', height: '100%', width: '100%' }}>
      <div className="mobile-card-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: 'white', padding: '10px', borderRadius: '10px', textAlign: 'center', borderBottom: `3px solid ${s.col}`, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <div style={{ color: s.col }}>{s.icon}</div>
            <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{s.val}</div>
            <div style={{ fontSize: '0.7rem', color: '#777' }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '10px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', width: '100%' }}>
        {[40, 70, 30, 85, 50, 90, 60].map((h, i) => (
          <div key={i} style={{ width: '10%', height: `${h}%`, background: '#3498db', borderRadius: '5px 5px 0 0' }} />
        ))}
      </div>
    </div>
  );
};

const ShowcaseContent = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const demos = [
    {
      id: 1,
      title: "¿Buscas un E-commerce?",
      desc: "Plataformas de venta modernas, rápidas y optimizadas para el comercio.",
      component: <EcommerceDemo />,
      color: '#ecf0f1'
    },
    {
      id: 2,
      title: "¿Sistemas de Gestión?",
      desc: "Paneles de control intuitivos para manejar inventarios y activos.",
      component: <InventoryDemo />,
      color: '#ecf0f1'
    },
    {
      id: 3,
      title: "Integración con IA",
      desc: "Potencia tu negocio con visión artificial y automatización inteligente.",
      component: <VideoDemo />,
      color: '#ecf0f1'
    },
    {
      id: 4,
      title: "Analítica de Datos",
      desc: "Dashboards interactivos para visualizar el rendimiento en tiempo real.",
      component: <DashboardDemo />,
      color: '#ecf0f1'
    }
  ];
  const nextDemo = () => setCurrentIndex((prev) => (prev + 1) % demos.length);
  const prevDemo = () => setCurrentIndex((prev) => (prev - 1 + demos.length) % demos.length);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '0 1%', overflowX: 'hidden' }}>
      <MobileStyles />

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: '10px 0' }}>
        <span onClick={onClose} style={{ cursor: 'pointer' }}><FaHome /> Inicio</span>
        <FaChevronRight /> <span style={{ color: 'white' }}>Showcase</span>
      </div>

      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <button onClick={() => setCurrentIndex((currentIndex - 1 + demos.length) % demos.length)} className="mobile-nav-arrows" style={{ position: 'absolute', left: '0px', zIndex: 10, background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer' }}>
          <FaChevronLeft />
        </button>

        <button onClick={() => setCurrentIndex((currentIndex + 1) % demos.length)} className="mobile-nav-arrows" style={{ position: 'absolute', right: '0px', zIndex: 10, background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer' }}>
          <FaChevronRight />
        </button>

        <div style={{ width: '100%', height: '98%', maxWidth: '1000px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <h2 className="mobile-title" style={{ fontSize: '2rem', color: '#3498db', margin: 0 }}>{demos[currentIndex].title}</h2>
          </div>

          <div style={{ flex: 1, background: demos[currentIndex].color, borderRadius: '15px', padding: '10px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.3)', position: 'relative', width: '100%' }}>
            <div style={{ position: 'absolute', top: '5px', left: '10px', display: 'flex', gap: '4px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            </div>
            <div style={{ marginTop: '15px', height: 'calc(100% - 15px)', width: '100%' }}>
              {demos[currentIndex].component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContent;