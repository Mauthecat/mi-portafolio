import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaChevronRight, FaChevronLeft, FaSearch, FaPlus, FaShoppingCart, FaChartLine, FaUsers, FaBox, FaTrash, FaUser, FaBars, FaCog, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';

// ... (ECOMMERCE DEMO - SIN CAMBIOS DE TEXTO) ...
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
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#f8f9fa', overflow: 'hidden' }}>
      <div style={{ background: '#fff', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.1rem', color: '#333' }}>SHOP<span style={{ color: '#e74c3c' }}>ify</span></div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <FaSearch style={{ color: '#777' }} />
          <FaShoppingCart style={{ color: '#333' }} />
        </div>
      </div>
      <div style={{ height: '120px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ width: '100%', height: '100%', background: slides[currentSlide].color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}
          >
            <h2 style={{ color: 'white', fontSize: '1.2rem', textAlign: 'center', padding: '0 10px' }}>{slides[currentSlide].text}</h2>
          </motion.div>
        </AnimatePresence>
      </div>
      <div style={{ flex: 1, display: 'flex', padding: '10px', gap: '10px', overflow: 'hidden' }}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
            {products.map(p => (
              <div key={p.id} style={{ background: 'white', borderRadius: '8px', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem' }}>{p.img}</div>
                <div style={{ fontWeight: 'bold', fontSize: '0.7rem', textAlign: 'center' }}>{p.name}</div>
                <div style={{ color: '#e74c3c', fontSize: '0.8rem', fontWeight: 'bold' }}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ... (INVENTORY DEMO - SIN CAMBIOS DE TEXTO) ...
const InventoryDemo = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Monitor 24"', stock: 15, cat: 'Hardware' },
    { id: 2, name: 'Teclado Mecánico', stock: 8, cat: 'Periféricos' },
    { id: 3, name: 'Mouse Wireless', stock: 22, cat: 'Periféricos' },
    { id: 4, name: 'Cable HDMI', stock: 50, cat: 'Cables' },
    { id: 5, name: 'Silla Gamer', stock: 2, cat: 'Mobiliario' },
  ]);
  const [search, setSearch] = useState('');

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', background: '#f4f6f9', overflow: 'hidden' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '10px', gap: '10px' }}>
        <div style={{ background: 'white', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <FaSearch style={{ color: '#aaa', fontSize: '0.8rem' }} />
          <input type="text" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.8rem' }} />
        </div>
        <div style={{ flex: 1, background: 'white', borderRadius: '8px', overflowY: 'auto' }}>
          {items.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #f9f9f9', fontSize: '0.8rem' }}>
              <span>{item.name}</span>
              <span style={{ fontWeight: 'bold', color: item.stock < 10 ? '#e74c3c' : '#27ae60' }}>{item.stock} u.</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ... (VIDEO DEMO - SIN CAMBIOS DE TEXTO) ...
const VideoDemo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px', overflowY: 'auto' }}>
       <div style={{ height: '150px', background: '#000', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/geurTVG5b5k" title="Demo IA" frameBorder="0" allowFullScreen />
       </div>
       <div style={{ padding: '0 5px' }}>
         <h3 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#2c3e50' }}>Reconocimiento Facial con Python</h3>
         <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: '1.4', color: '#555' }}>
            Este sistema utiliza bibliotecas de <strong>OpenCV</strong> y <strong>Redes Neuronales</strong> para detectar rostros en tiempo real.
         </p>
       </div>
    </div>
  );
};

// ... (DASHBOARD DEMO - SIN CAMBIOS DE TEXTO) ...
const DashboardDemo = () => {
    const [timeRange, setTimeRange] = useState('Semana');
    const data = {
        'Día': { users: '120', sales: '$4.5k', chart: [20, 40, 60, 30, 70, 50, 90, 40] },
        'Semana': { users: '1.2k', sales: '$45k', chart: [40, 70, 30, 85, 50, 90, 60, 45] },
        'Mes': { users: '5.8k', sales: '$180k', chart: [60, 80, 50, 90, 70, 60, 80, 50] },
        'Año': { users: '68k', sales: '$2.1M', chart: [30, 50, 40, 70, 50, 60, 80, 60] }
    };
    const currentData = data[timeRange];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '5px' }}>
                <h3 style={{ margin: 0, fontSize: '0.9rem', color: '#2c3e50' }}>Analytics</h3>
                <div style={{ display: 'flex', background: '#eee', borderRadius: '4px', fontSize: '0.7rem' }}>
                    {['Día', 'Semana', 'Mes'].map(range => (
                        <button key={range} onClick={() => setTimeRange(range)} style={{ border: 'none', background: timeRange === range ? '#3498db' : 'transparent', color: timeRange === range ? 'white' : '#777', padding: '4px 8px', cursor: 'pointer' }}>{range}</button>
                    ))}
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ background: 'white', padding: '10px', borderRadius: '8px', textAlign: 'center', borderBottom: '2px solid #3498db' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{currentData.users}</div>
                    <div style={{ fontSize: '0.6rem', color: '#777' }}>Usuarios</div>
                </div>
                <div style={{ background: 'white', padding: '10px', borderRadius: '8px', textAlign: 'center', borderBottom: '2px solid #e67e22' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{currentData.sales}</div>
                    <div style={{ fontSize: '0.6rem', color: '#777' }}>Ventas</div>
                </div>
            </div>
            <div style={{ flex: 1, background: 'white', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', minHeight: '60px' }}>
                {currentData.chart.map((h, i) => (
                    <div key={i} style={{ width: '8px', height: `${h}%`, background: '#3498db', borderRadius: '2px' }} />
                ))}
            </div>
        </div>
    )
}

// --- COMPONENTE PRINCIPAL SHOWCASE ---
const ShowcaseContent = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const demos = [
    { id: 1, title: "¿Buscas un E-commerce?", desc: "Plataformas de venta modernas, rápidas y optimizadas para el comercio.", component: <EcommerceDemo />, color: '#ecf0f1' },
    { id: 2, title: "¿Sistemas de Gestión?", desc: "Paneles de control intuitivos para manejar inventarios y activos .", component: <InventoryDemo />, color: '#ecf0f1' },
    { id: 3, title: "Integración con IA", desc: "Potencia tu negocio con visión artificial y automatización inteligente.", component: <VideoDemo />, color: '#ecf0f1' },
    { id: 4, title: "Analítica de Datos", desc: "Dashboards interactivos para visualizar el rendimiento en tiempo real.", component: <DashboardDemo />, color: '#ecf0f1' }
  ];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: isMobile ? '0 5px' : '0 2%', overflow: 'hidden' }}>
      
      {/* BREADCRUMB */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '10px' }}>
        <motion.span onClick={onClose} whileHover={{ scale: 1.05, color: 'white' }} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <FaHome /> Inicio
        </motion.span>
        <FaChevronRight style={{ fontSize: '0.7rem' }} />
        <span style={{ color: 'white', fontWeight: 'bold' }}>Showcase</span>
      </div>

      <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', margin: '0 0 10px 0', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
        Demos & Prototipos
      </h2>

      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        
        <button onClick={() => setCurrentIndex((prev) => (prev - 1 + demos.length) % demos.length)} style={{ position: 'absolute', left: '0px', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><FaChevronLeft /></button>
        <button onClick={() => setCurrentIndex((prev) => (prev + 1) % demos.length)} style={{ position: 'absolute', right: '0px', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><FaChevronRight /></button>

        <div style={{ width: '100%', height: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column' }}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: isMobile ? '1.2rem' : '2rem', color: '#3498db', margin: 0 }}>{demos[currentIndex].title}</h2>
                        <p style={{ fontSize: isMobile ? '0.8rem' : '1.1rem', color: '#ccc', margin: '2px 0' }}>{demos[currentIndex].desc}</p>
                    </div>

                    <div style={{ 
                        flex: 1, 
                        background: demos[currentIndex].color, 
                        borderRadius: '20px', 
                        padding: isMobile ? '10px' : '25px', 
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        {/* Simulación de ventana de navegador */}
                        <div style={{ position: 'absolute', top: '8px', left: '15px', display: 'flex', gap: '5px', zIndex: 5 }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
                        </div>

                        <div style={{ 
                          marginTop: '15px', 
                          height: 'calc(100% - 15px)',
                          /* LA SOLUCIÓN: Escalado responsivo sin scroll */
                          transform: isMobile ? 'scale(0.95)' : 'none',
                          transformOrigin: 'top center'
                        }}>
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