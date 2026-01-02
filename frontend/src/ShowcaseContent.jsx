import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaChevronRight, FaChevronLeft, FaSearch, FaPlus, FaShoppingCart, FaChartLine, FaUsers, FaBox, FaTrash, FaUser, FaBars, FaCog, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';

// ESTILOS GLOBALES PARA CENTRADO Y RESPONSIVE SIN ROMPER DISEÑO INTERNO
const MobileStyles = () => (
  <style>{`
    * { box-sizing: border-box; }
    @media (max-width: 768px) {
      .demo-container-internal { 
        zoom: 0.8; /* Escala el contenido para que quepa sin reordenar */
        -moz-transform: scale(0.8);
        -moz-transform-origin: top center;
      }
      .mobile-title { font-size: 1.6rem !important; }
      .mobile-desc { font-size: 0.9rem !important; }
      .responsive-wrapper { padding: 5px !important; }
    }
  `}</style>
);

// --- DEMO 1: ECOMMERCE (RESTAURADO) ---
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
    <div className="demo-container-internal" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
      <div style={{ background: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#333' }}>SHOP<span style={{ color: '#e74c3c' }}>ify</span></div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <FaSearch style={{ color: '#777' }} />
          <FaShoppingCart style={{ color: '#333' }} />
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaUser style={{ color: '#555', fontSize: '0.8rem' }} />
          </div>
        </div>
      </div>
      <div style={{ height: '160px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode='wait'>
          <motion.div key={currentSlide} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', background: slides[currentSlide].color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
            <h2 style={{ color: 'white', fontSize: '1.8rem', textShadow: '0 2px 10px rgba(0,0,0,0.2)', textAlign: 'center' }}>{slides[currentSlide].text}</h2>
          </motion.div>
        </AnimatePresence>
      </div>
      <div style={{ flex: 1, display: 'flex', padding: '15px', gap: '15px', overflow: 'hidden' }}>
        <div style={{ flex: 3, overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px' }}>
            {products.map(p => (
              <motion.div whileHover={{ y: -5 }} key={p.id} style={{ background: 'white', borderRadius: '10px', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '5px' }}>{p.img}</div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{p.name}</div>
                <div style={{ color: '#e74c3c', fontWeight: 'bold', fontSize: '0.8rem' }}>{p.price}</div>
                <button style={{ background: '#333', color: 'white', border: 'none', padding: '5px', borderRadius: '5px', fontSize: '0.7rem', width: '100%', cursor: 'pointer' }}>Comprar</button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- DEMO 2: INVENTORY (RESTAURADO CON CATEGORÍA Y BORRADO) ---
const InventoryDemo = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Monitor 24"', stock: 15, cat: 'Hardware' },
    { id: 2, name: 'Teclado Mecánico', stock: 8, cat: 'Periféricos' },
    { id: 3, name: 'Mouse Wireless', stock: 22, cat: 'Periféricos' },
    { id: 4, name: 'Cable HDMI', stock: 50, cat: 'Cables' },
  ]);

  const handleDelete = (id) => setItems(items.filter(item => item.id !== id));

  return (
    <div className="demo-container-internal" style={{ width: '100%', height: '100%', display: 'flex', background: '#f4f6f9' }}>
      <div style={{ width: '160px', background: '#2c3e50', color: '#ecf0f1', display: 'flex', flexDirection: 'column', padding: '15px' }}>
        <div style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px' }}><FaBox /> STOCK</div>
        <div style={{ fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ opacity: 0.7 }}><FaChartLine /> Dashboard</div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '4px' }}><FaBox /> Productos</div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '15px', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ margin: 0 }}>Listado</h4>
          <button style={{ background: '#27ae60', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', fontSize: '0.7rem' }}>+ Nuevo</button>
        </div>
        <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '10px', overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 0.5fr', padding: '5px', fontWeight: 'bold', fontSize: '0.75rem', borderBottom: '2px solid #f0f0f0' }}>
            <span>Nombre</span><span>Categoría</span><span>Stock</span><span></span>
          </div>
          <AnimatePresence>
            {items.map(item => (
              <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }}
                style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1fr 0.5fr', padding: '10px 5px', borderBottom: '1px solid #f9f9f9', fontSize: '0.8rem', alignItems: 'center' }}>
                <span style={{ fontWeight: '500' }}>{item.name}</span>
                <span style={{ background: '#ecf0f1', padding: '2px 6px', borderRadius: '10px', fontSize: '0.7rem', width: 'fit-content' }}>{item.cat}</span>
                <span style={{ fontWeight: 'bold', color: item.stock < 10 ? '#e74c3c' : '#27ae60' }}>{item.stock}</span>
                <FaTrash onClick={() => handleDelete(item.id)} style={{ color: '#e74c3c', cursor: 'pointer' }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// --- DEMO 3: IA VIDEO (RESTAURADO CON TEXTO ORIGINAL) ---
const VideoDemo = () => (
  <div className="demo-container-internal" style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px' }}>
    <div style={{ height: '55%', background: '#000', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/geurTVG5b5k" title="Demo IA" frameBorder="0" allowFullScreen />
    </div>
    <div style={{ flex: 1, overflowY: 'auto', padding: '5px' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50', borderLeft: '4px solid #3498db', paddingLeft: '10px', fontSize: '1.1rem' }}>Reconocimiento Facial con Python</h3>
      <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.5', color: '#555' }}>
        Este sistema utiliza bibliotecas de <strong>OpenCV</strong> y <strong>Redes Neuronales</strong> para detectar rostros en tiempo real. 
        Ideal para control de acceso, análisis de emociones o seguridad biométrica. La integración permite procesar flujos de video en vivo con baja latencia.
      </p>
    </div>
  </div>
);

// --- DEMO 4: DASHBOARD (RESTAURADO CON GRÁFICO Y FILTROS) ---
const DashboardDemo = () => {
  const [timeRange, setTimeRange] = useState('Semana');
  const data = {
    'Día': [20, 40, 60, 30, 70, 50, 90, 40],
    'Semana': [40, 70, 30, 85, 50, 90, 60, 45],
    'Mes': [60, 80, 50, 90, 70, 60, 80, 50]
  };

  return (
    <div className="demo-container-internal" style={{ display: 'flex', flexDirection: 'column', gap: '15px', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0 }}>Analytics</h4>
        <div style={{ display: 'flex', background: '#fff', borderRadius: '6px', overflow: 'hidden', border: '1px solid #ddd' }}>
          {['Día', 'Semana', 'Mes'].map(r => (
            <button key={r} onClick={() => setTimeRange(r)} style={{ border: 'none', background: timeRange === r ? '#3498db' : 'transparent', color: timeRange === r ? 'white' : '#666', padding: '4px 8px', fontSize: '0.7rem', cursor: 'pointer' }}>{r}</button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        <div style={{ background: 'white', padding: '10px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <FaUsers color="#3498db" />
          <div style={{ fontWeight: 'bold' }}>1.2k</div>
        </div>
        <div style={{ background: 'white', padding: '10px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <FaChartLine color="#e67e22" />
          <div style={{ fontWeight: 'bold' }}>$45k</div>
        </div>
        <div style={{ background: 'white', padding: '10px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <FaBox color="#9b59b6" />
          <div style={{ fontWeight: 'bold' }}>340</div>
        </div>
      </div>
      <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '15px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
        {data[timeRange].map((h, i) => (
          <motion.div key={`${timeRange}-${i}`} initial={{ height: 0 }} animate={{ height: `${h}%` }} style={{ width: '12px', background: i % 2 === 0 ? '#3498db' : '#bdc3c7', borderRadius: '10px 10px 0 0' }} />
        ))}
      </div>
    </div>
  );
};

// --- COMPONENTE SHOWCASE (CENTRADOR FINAL) ---
const ShowcaseContent = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const demos = [
    { id: 1, title: "¿Buscas un E-commerce?", desc: "Plataformas de venta modernas y rápidas.", component: <EcommerceDemo />, color: '#ecf0f1' },
    { id: 2, title: "¿Sistemas de Gestión?", desc: "Paneles de control para inventarios.", component: <InventoryDemo />, color: '#ecf0f1' },
    { id: 3, title: "Integración con IA", desc: "Automatización inteligente con visión artificial.", component: <VideoDemo />, color: '#ecf0f1' },
    { id: 4, title: "Analítica de Datos", desc: "Dashboards interactivos en tiempo real.", component: <DashboardDemo />, color: '#ecf0f1' }
  ];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 10px', overflowX: 'hidden' }}>
      <MobileStyles />
      
      <div style={{ width: '100%', maxWidth: '1000px', display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: '15px 0' }}>
        <span onClick={onClose} style={{ cursor: 'pointer' }}><FaHome /> Inicio</span>
        <FaChevronRight /> <span style={{ color: 'white' }}>Showcase</span>
      </div>

      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '1000px' }}>
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => setCurrentIndex((currentIndex - 1 + demos.length) % demos.length)} style={{ position: 'absolute', left: '-5px', zIndex: 20, background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer' }}>
          <FaChevronLeft />
        </motion.button>

        <motion.button whileTap={{ scale: 0.9 }} onClick={() => setCurrentIndex((currentIndex + 1) % demos.length)} style={{ position: 'absolute', right: '-5px', zIndex: 20, background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer' }}>
          <FaChevronRight />
        </motion.button>

        <div style={{ width: '100%', height: '98%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <h2 className="mobile-title" style={{ fontSize: '2.4rem', color: '#3498db', margin: 0 }}>{demos[currentIndex].title}</h2>
            <p className="mobile-desc" style={{ fontSize: '1.1rem', color: '#ccc', margin: '5px 0' }}>{demos[currentIndex].desc}</p>
          </div>

          <div style={{ flex: 1, background: demos[currentIndex].color, borderRadius: '20px', padding: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.4)', position: 'relative' }}>
            {/* Simulación Navegador */}
            <div style={{ position: 'absolute', top: '10px', left: '15px', display: 'flex', gap: '5px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>

            <div style={{ marginTop: '15px', height: 'calc(100% - 15px)', width: '100%' }}>
              <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ height: '100%' }}>
                  {demos[currentIndex].component}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContent;