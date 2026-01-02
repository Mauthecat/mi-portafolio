import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaChevronRight, FaChevronLeft, FaSearch, FaPlus, FaShoppingCart, FaChartLine, FaUsers, FaBox, FaTrash, FaUser, FaBars, FaCog, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';

// --- CAPA DE INTELIGENCIA RESPONSIVA (Solo afecta a móviles) ---
const ResponsiveLogic = () => (
  <style>{`
    * { box-sizing: border-box; }
    @media (max-width: 768px) {
      /* Forzamos que los flex se vuelvan columnas */
      .stack-mobile { flex-direction: column !important; gap: 15px !important; }
      /* Quitamos anchos fijos de sidebars */
      .no-fixed-width { width: 100% !important; min-width: 100% !important; }
      /* Ajustamos rejillas para que no se desborden */
      .grid-mobile { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)) !important; }
      /* Escondemos elementos que saturan el espacio en móvil */
      .hide-mobile { display: none !important; }
      /* Centrado de títulos y textos */
      .text-center-mobile { text-align: center !important; }
      /* Ajuste de padding para no generar bordes fantasmas */
      .compact-padding { padding: 10px !important; }
      /* Evitar que el dashboard rompa el layout */
      .stats-grid-mobile { grid-template-columns: 1fr !important; }
    }
  `}</style>
);

// --- ECOMMERCE DEMO (RESTURADA) ---
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
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#f8f9fa', overflowX: 'hidden' }}>
      <div className="compact-padding" style={{ background: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#333' }}>SHOP<span style={{ color: '#e74c3c' }}>ify</span></div>
        <div className="hide-mobile" style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#555', fontWeight: '500' }}>
          <span style={{ cursor: 'pointer', color: '#000' }}>Inicio</span>
          <span>Productos</span><span>Blog</span><span>Contacto</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <FaSearch style={{ color: '#777', cursor: 'pointer' }} />
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <FaShoppingCart style={{ color: '#333' }} />
            <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#e74c3c', color: 'white', borderRadius: '50%', fontSize: '0.6rem', padding: '2px 5px' }}>2</span>
          </div>
          <div className="hide-mobile" style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaUser style={{ color: '#555', fontSize: '0.8rem' }} />
          </div>
        </div>
      </div>
      <div style={{ height: '180px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode='wait'>
          <motion.div key={currentSlide} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', background: slides[currentSlide].color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0 }}>
            <h2 className="text-center-mobile" style={{ color: 'white', fontSize: '1.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.2)', padding: '0 20px' }}>{slides[currentSlide].text}</h2>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="stack-mobile compact-padding" style={{ flex: 1, display: 'flex', padding: '20px', gap: '20px', overflowY: 'auto' }}>
        <div style={{ flex: 3 }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Destacados</h3>
          <div className="grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px' }}>
            {products.map(p => (
              <motion.div whileHover={{ y: -5 }} key={p.id} style={{ background: 'white', borderRadius: '10px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{p.img}</div>
                <div style={{ fontWeight: 'bold', color: '#333', fontSize: '0.8rem', textAlign: 'center' }}>{p.name}</div>
                <div style={{ color: '#e74c3c', fontWeight: 'bold', margin: '5px 0' }}>{p.price}</div>
                <button style={{ background: '#333', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '5px', fontSize: '0.8rem', width: '100%' }}>Comprar</button>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="no-fixed-width" style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '15px', height: 'fit-content', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#333', borderBottom: '2px solid #eee', paddingBottom: '5px' }}>Categorías</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#666', lineHeight: '2' }}>
            <li>👟 Zapatillas</li><li>💻 Tecnología</li><li>👕 Moda</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- INVENTORY DEMO (RESTURADA) ---
const InventoryDemo = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Monitor 24"', stock: 15, cat: 'Hardware' },
    { id: 2, name: 'Teclado Mecánico', stock: 8, cat: 'Periféricos' },
    { id: 3, name: 'Mouse Wireless', stock: 22, cat: 'Periféricos' },
  ]);
  const [search, setSearch] = useState('');
  const handleDelete = (id) => setItems(items.filter(item => item.id !== id));

  return (
    <div className="stack-mobile" style={{ width: '100%', height: '100%', display: 'flex', background: '#f4f6f9', overflow: 'hidden' }}>
      <div className="hide-mobile" style={{ width: '200px', background: '#2c3e50', color: '#ecf0f1', display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaBox /> INVENTARIO
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '15px', gap: '15px', width: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, color: '#2c3e50', fontSize: '1rem' }}>Productos</h3>
          <button style={{ background: '#27ae60', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FaPlus /> <span className="hide-mobile">Agregar</span>
          </button>
        </div>
        <div style={{ background: 'white', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaSearch style={{ color: '#aaa' }} />
          <input type="text" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ border: 'none', outline: 'none', width: '100%' }} />
        </div>
        <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '10px', overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.5fr', padding: '10px', borderBottom: '2px solid #f0f0f0', fontWeight: 'bold', fontSize: '0.8rem' }}>
            <span>Nombre</span><span className="hide-mobile">Cat</span><span>Stock</span><span></span>
          </div>
          {items.map(item => (
            <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.5fr', padding: '15px 10px', borderBottom: '1px solid #f9f9f9', alignItems: 'center', fontSize: '0.85rem' }}>
              <span>{item.name}</span>
              <span className="hide-mobile">{item.cat}</span>
              <span style={{ color: '#27ae60', fontWeight: 'bold' }}>{item.stock}</span>
              <button onClick={() => handleDelete(item.id)} style={{ background: 'none', border: 'none', color: '#e74c3c' }}><FaTrash /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- VIDEO DEMO (RESTURADA) ---
const VideoDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '15px', width: '100%' }}>
    <div style={{ height: '60%', background: '#000', borderRadius: '10px', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/geurTVG5b5k" title="Demo IA" frameBorder="0" allowFullScreen />
    </div>
    <div style={{ flex: 1, overflowY: 'auto', padding: '0 5px' }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50', borderLeft: '4px solid #3498db', paddingLeft: '10px' }}>Reconocimiento Facial</h3>
      <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.4', color: '#555' }}>
        Sistemas integrados con <strong>OpenCV</strong> y Redes Neuronales.
      </p>
    </div>
  </div>
);

// --- DASHBOARD DEMO (RESTURADA) ---
const DashboardDemo = () => {
  const [timeRange, setTimeRange] = useState('Semana');
  const data = {
    'Día': { users: '120', sales: '$4.5k', orders: '45', chart: [20, 40, 60, 30, 70, 50, 90, 40, 60, 80, 50, 70] },
    'Semana': { users: '1.2k', sales: '$45k', orders: '340', chart: [40, 70, 30, 85, 50, 90, 60, 45, 80, 55, 30, 95] },
    'Mes': { users: '5.8k', sales: '$180k', orders: '1.5k', chart: [60, 80, 50, 90, 70, 60, 80, 50, 70, 90, 60, 80] },
    'Año': { users: '68k', sales: '$2.1M', orders: '18k', chart: [30, 50, 40, 70, 50, 60, 80, 60, 90, 70, 80, 100] }
  };
  const currentData = data[timeRange];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', width: '100%', overflowY: 'auto' }}>
      <div className="stack-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '1rem' }}>Panel Administrativo</h3>
        <div style={{ display: 'flex', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          {['Día', 'Semana', 'Mes'].map(range => (
            <button key={range} onClick={() => setTimeRange(range)} style={{ border: 'none', background: timeRange === range ? '#3498db' : 'transparent', color: timeRange === range ? 'white' : '#7f8c8d', padding: '5px 10px', cursor: 'pointer', fontSize: '0.7rem' }}>{range}</button>
          ))}
        </div>
      </div>
      <div className="stats-grid-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', textAlign: 'center', borderBottom: '3px solid #3498db' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{currentData.users}</div>
          <div style={{ fontSize: '0.7rem', color: '#777' }}>Usuarios</div>
        </div>
        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', textAlign: 'center', borderBottom: '3px solid #e67e22' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{currentData.sales}</div>
          <div style={{ fontSize: '0.7rem', color: '#777' }}>Ingresos</div>
        </div>
        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', textAlign: 'center', borderBottom: '3px solid #9b59b6' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{currentData.orders}</div>
          <div style={{ fontSize: '0.7rem', color: '#777' }}>Pedidos</div>
        </div>
      </div>
      <div style={{ flex: 1, background: 'white', borderRadius: '12px', padding: '15px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', minHeight: '150px' }}>
        {currentData.chart.slice(0, 10).map((h, i) => (
          <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} style={{ width: '8px', background: '#3498db', borderRadius: '10px 10px 0 0', opacity: 0.8 }} />
        ))}
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
const ShowcaseContent = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const demos = [
    { id: 1, title: "¿Buscas un E-commerce?", desc: "Venta moderna y optimizada.", component: <EcommerceDemo />, color: '#ecf0f1' },
    { id: 2, title: "¿Sistemas de Gestión?", desc: "Control de inventarios intuitivo.", component: <InventoryDemo />, color: '#ecf0f1' },
    { id: 3, title: "Integración con IA", desc: "Automatización inteligente.", component: <VideoDemo />, color: '#ecf0f1' },
    { id: 4, title: "Analítica de Datos", desc: "Dashboards en tiempo real.", component: <DashboardDemo />, color: '#ecf0f1' }
  ];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '0 2%', overflowX: 'hidden' }}>
      <ResponsiveLogic />
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', margin: '15px 0' }}>
        <motion.span onClick={onClose} whileHover={{ color: 'white' }} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><FaHome /> Inicio</motion.span>
        <FaChevronRight style={{ fontSize: '0.7rem' }} />
        <span style={{ color: 'white', fontWeight: 'bold' }}>Showcase</span>
      </div>

      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '20px', width: '100%' }}>
        <button onClick={() => setCurrentIndex((prev) => (prev - 1 + demos.length) % demos.length)} style={{ position: 'absolute', left: '-10px', zIndex: 10, background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer' }}><FaChevronLeft /></button>
        <button onClick={() => setCurrentIndex((prev) => (prev + 1) % demos.length)} style={{ position: 'absolute', right: '-10px', zIndex: 10, background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer' }}><FaChevronRight /></button>

        <div style={{ width: '100%', height: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column' }}>
          <AnimatePresence mode='wait'>
            <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '15px', textAlign: 'center' }}>
                <h2 className="mobile-title" style={{ fontSize: '1.8rem', color: '#3498db', margin: 0 }}>{demos[currentIndex].title}</h2>
                <p className="hide-mobile" style={{ color: '#ccc', margin: '5px 0' }}>{demos[currentIndex].desc}</p>
              </div>
              <div style={{ flex: 1, background: demos[currentIndex].color, borderRadius: '20px', padding: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', position: 'relative', width: '100%' }}>
                <div className="hide-mobile" style={{ position: 'absolute', top: '10px', left: '15px', display: 'flex', gap: '5px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <div style={{ marginTop: '10px', height: 'calc(100% - 10px)', width: '100%' }}>
                  {demos[currentIndex].component}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContent;