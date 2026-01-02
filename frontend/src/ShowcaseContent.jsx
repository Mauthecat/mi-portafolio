import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaChevronRight, FaChevronLeft, FaSearch, FaPlus, FaShoppingCart, FaChartLine, FaUsers, FaBox, FaTrash, FaUser, FaBars, FaCog, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';

/**
 * ESTILOS DINÁMICOS PARA MÓVILES
 * Estos estilos solo se activan en pantallas pequeñas para evitar el desborde
 * y asegurar que el contenido original se centre y use el 100% del ancho.
 */
const GlobalMobileStyles = () => (
  <style>{`
    @media (max-width: 768px) {
      .responsive-main-container { flex-direction: column !important; padding: 10px !important; gap: 15px !important; overflow-y: auto !important; }
      .mobile-hide { display: none !important; }
      .mobile-w-100 { width: 100% !important; flex: none !important; }
      .mobile-center-text { text-align: center !important; }
      .mobile-grid-2 { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
      .mobile-padding-0 { padding: 0 !important; }
      .mobile-scroll-x { overflow-x: auto !important; }
      /* Forzar que nada se salga del ancho de pantalla */
      * { box-sizing: border-box !important; }
    }
  `}</style>
);

// --- ECOMMERCE DEMO (DISEÑO ORIGINAL) ---
const EcommerceDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, color: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', text: "Nueva Colección Verano" },
    { id: 2, color: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)', text: "Ofertas Deportivas" },
    { id: 3, color: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', text: "Tecnología Premium" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const products = [
    { id: 1, name: 'Nike Air Max', price: '$120', img: '👟' },
    { id: 2, name: 'MacBook M3', price: '$2000', img: '💻' },
    { id: 3, name: 'Sony XM5', price: '$350', img: '🎧' },
    { id: 4, name: 'iPhone 15', price: '$999', img: '📱' },
  ];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
      {/* Header adaptable */}
      <div style={{ background: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#333' }}>SHOP<span style={{ color: '#e74c3c' }}>ify</span></div>
        <div className="mobile-hide" style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#555', fontWeight: '500' }}>
          <span style={{ cursor: 'pointer', color: '#000' }}>Inicio</span>
          <span>Productos</span><span>Blog</span><span>Contacto</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <FaSearch style={{ color: '#777' }} />
          <FaShoppingCart style={{ color: '#333' }} />
          <FaUser className="mobile-hide" style={{ color: '#555' }} />
        </div>
      </div>
      
      <div style={{ height: '180px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode='wait'>
          <motion.div key={currentSlide} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', background: slides[currentSlide].color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
            <h2 className="mobile-center-text" style={{ color: 'white', fontSize: '1.8rem', textShadow: '0 2px 10px rgba(0,0,0,0.2)', padding: '0 20px' }}>{slides[currentSlide].text}</h2>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="responsive-main-container" style={{ flex: 1, display: 'flex', padding: '20px', gap: '20px', overflow: 'hidden' }}>
        <div className="mobile-w-100" style={{ flex: 3, overflowY: 'auto' }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Destacados</h3>
          <div className="mobile-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px' }}>
            {products.map(p => (
              <motion.div key={p.id} style={{ background: 'white', borderRadius: '10px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '2.5rem' }}>{p.img}</div>
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{p.name}</div>
                <div style={{ color: '#e74c3c', fontWeight: 'bold' }}>{p.price}</div>
                <button style={{ background: '#333', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', width: '100%', marginTop: '5px' }}>Comprar</button>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Categorías: Ocultas en móvil para evitar desborde lateral, o se apilan debajo */}
        <div className="mobile-w-100" style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '15px', height: 'fit-content' }}>
          <h4 style={{ margin: '0 0 10px 0', borderBottom: '2px solid #eee' }}>Categorías</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', lineHeight: '2' }}>
            <li>👟 Zapatillas</li><li>💻 Tecnología</li><li>👕 Moda</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- INVENTORY DEMO (DISEÑO ORIGINAL) ---
const InventoryDemo = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Monitor 24"', stock: 15, cat: 'Hardware' },
    { id: 2, name: 'Teclado Mecánico', stock: 8, cat: 'Periféricos' },
    { id: 3, name: 'Mouse Wireless', stock: 22, cat: 'Periféricos' },
  ]);

  return (
    <div className="responsive-main-container" style={{ width: '100%', height: '100%', display: 'flex', background: '#f4f6f9' }}>
      <div className="mobile-hide" style={{ width: '200px', background: '#2c3e50', color: '#ecf0f1', display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '30px' }}><FaBox /> INVENTARIO</div>
        <div style={{ opacity: 0.7 }}><FaChartLine /> Dashboard</div>
      </div>
      <div className="mobile-w-100" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Productos</h3>
          <button style={{ background: '#27ae60', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px' }}>+ Agregar</button>
        </div>
        <div className="mobile-scroll-x" style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '10px', overflowY: 'auto' }}>
          <div style={{ minWidth: '400px' }}> {/* Asegura que la tabla no se rompa en mini-pantallas */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.5fr', padding: '10px', fontWeight: 'bold', borderBottom: '2px solid #f0f0f0' }}>
              <span>Nombre</span><span>Categoría</span><span>Stock</span><span>Acción</span>
            </div>
            {items.map(item => (
              <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.5fr', padding: '15px 10px', borderBottom: '1px solid #f9f9f9' }}>
                <span>{item.name}</span>
                <span style={{ fontSize: '0.8rem', background: '#eee', padding: '2px 5px', borderRadius: '5px' }}>{item.cat}</span>
                <span style={{ color: '#27ae60', fontWeight: 'bold' }}>{item.stock} u.</span>
                <FaTrash style={{ color: '#e74c3c' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- VIDEO DEMO (DISEÑO ORIGINAL) ---
const VideoDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '15px' }}>
    <div style={{ height: '60%', background: '#000', borderRadius: '10px', overflow: 'hidden' }}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/geurTVG5b5k" frameBorder="0" allowFullScreen />
    </div>
    <div style={{ flex: 1, overflowY: 'auto', padding: '0 5px' }}>
      <h3 style={{ margin: '0 0 10px 0', borderLeft: '4px solid #3498db', paddingLeft: '10px' }}>IA con Python</h3>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>Sistemas de visión artificial para control de acceso y seguridad.</p>
    </div>
  </div>
);

// --- DASHBOARD DEMO (DISEÑO ORIGINAL) ---
const DashboardDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
    <div className="mobile-hide" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h3>Panel Administrativo</h3>
      <div style={{ background: 'white', padding: '5px', borderRadius: '5px' }}>Semana</div>
    </div>
    <div className="responsive-main-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        <FaUsers color="#3498db" size={20} />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1.2k</div>
        <div style={{ fontSize: '0.7rem' }}>Usuarios</div>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        <FaChartLine color="#e67e22" size={20} />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$45k</div>
        <div style={{ fontSize: '0.7rem' }}>Ventas</div>
      </div>
      <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        <FaBox color="#9b59b6" size={20} />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>340</div>
        <div style={{ fontSize: '0.7rem' }}>Pedidos</div>
      </div>
    </div>
    <div style={{ flex: 1, background: 'white', borderRadius: '12px', padding: '15px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
      {[40, 70, 30, 85, 50, 90, 60, 45].map((h, i) => (
        <div key={i} style={{ width: '15px', height: `${h}%`, background: '#3498db', borderRadius: '10px 10px 0 0' }} />
      ))}
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---
const ShowcaseContent = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const demos = [
    { id: 1, title: "¿Buscas un E-commerce?", desc: "Plataformas modernas y rápidas.", component: <EcommerceDemo />, color: '#ecf0f1' },
    { id: 2, title: "¿Sistemas de Gestión?", desc: "Control total de inventarios.", component: <InventoryDemo />, color: '#ecf0f1' },
    { id: 3, title: "Integración con IA", desc: "Automatización inteligente.", component: <VideoDemo />, color: '#ecf0f1' },
    { id: 4, title: "Analítica de Datos", desc: "Dashboards en tiempo real.", component: <DashboardDemo />, color: '#ecf0f1' }
  ];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '0 2%', overflowX: 'hidden' }}>
      <GlobalMobileStyles />
      
      {/* BREADCRUMB */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', margin: '10px 0' }}>
        <span onClick={onClose} style={{ cursor: 'pointer' }}><FaHome /> Inicio</span>
        <FaChevronRight style={{ fontSize: '0.7rem' }} />
        <span style={{ color: 'white', fontWeight: 'bold' }}>Showcase</span>
      </div>

      <h2 className="mobile-hide" style={{ fontSize: '2rem', margin: '0 0 20px 0', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
        Demos & Prototipos
      </h2>

      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '20px' }}>
        
        <button onClick={() => setCurrentIndex((prev) => (prev - 1 + demos.length) % demos.length)} style={{ position: 'absolute', left: '-10px', zIndex: 10, background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '15px', borderRadius: '50%', cursor: 'pointer' }}>
            <FaChevronLeft />
        </button>

        <button onClick={() => setCurrentIndex((prev) => (prev + 1) % demos.length)} style={{ position: 'absolute', right: '-10px', zIndex: 10, background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '15px', borderRadius: '50%', cursor: 'pointer' }}>
            <FaChevronRight />
        </button>

        <div style={{ width: '100%', height: '95%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ marginBottom: '15px', textAlign: 'center' }}>
            <h2 className="mobile-title" style={{ fontSize: '2.2rem', color: '#3498db', margin: 0 }}>{demos[currentIndex].title}</h2>
            <p className="mobile-hide" style={{ fontSize: '1.1rem', color: '#ccc', margin: '5px 0' }}>{demos[currentIndex].desc}</p>
          </div>

          <div style={{ flex: 1, background: demos[currentIndex].color, borderRadius: '20px', padding: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', position: 'relative' }}>
            {/* Browser Dots */}
            <div style={{ position: 'absolute', top: '10px', left: '15px', display: 'flex', gap: '5px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>

            <div style={{ marginTop: '20px', height: 'calc(100% - 20px)', width: '100%' }}>
              {demos[currentIndex].component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContent;