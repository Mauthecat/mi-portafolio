import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaChevronRight, FaChevronLeft, FaSearch, FaPlus, FaShoppingCart, FaChartLine, FaUsers, FaBox, FaTrash, FaUser, FaCog, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';

// --- ECOMMERCE DEMO (RESTURADA COMPLETA) ---
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
      <div style={{ background: '#fff', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#333' }}>SHOP<span style={{ color: '#e74c3c' }}>ify</span></div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <FaSearch style={{ color: '#777' }} />
          <FaShoppingCart style={{ color: '#333' }} />
          <FaUser style={{ color: '#555' }} />
        </div>
      </div>
      <div style={{ height: '140px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
            style={{ width: '100%', height: '100%', background: slides[currentSlide].color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}
          >
            <h2 style={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>{slides[currentSlide].text}</h2>
          </motion.div>
        </AnimatePresence>
      </div>
      <div style={{ flex: 1, display: 'flex', padding: '10px', gap: '10px', overflow: 'hidden' }}>
        <div style={{ flex: 3, overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '10px' }}>
            {products.map(p => (
              <div key={p.id} style={{ background: 'white', borderRadius: '8px', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem' }}>{p.img}</div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{p.name}</div>
                <div style={{ color: '#e74c3c', fontSize: '0.8rem' }}>{p.price}</div>
                <button style={{ background: '#333', color: 'white', border: 'none', padding: '5px', borderRadius: '5px', fontSize: '0.7rem', width: '100%' }}>Comprar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- INVENTORY DEMO (RESTAURADA COMPLETA) ---
const InventoryDemo = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Monitor 24"', stock: 15, cat: 'Hardware' },
    { id: 2, name: 'Teclado Mecánico', stock: 8, cat: 'Periféricos' },
    { id: 3, name: 'Mouse Wireless', stock: 22, cat: 'Periféricos' },
    { id: 4, name: 'Cable HDMI', stock: 50, cat: 'Cables' },
  ]);
  const [search, setSearch] = useState('');

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', background: '#f4f6f9' }}>
      <div style={{ width: '100px', background: '#2c3e50', color: '#ecf0f1', display: 'flex', flexDirection: 'column', padding: '10px', fontSize: '0.7rem' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '20px' }}><FaBox /> INVENTARIO</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span><FaChartLine /> Dash</span>
          <span><FaBox /> Stock</span>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '10px', gap: '10px' }}>
        <input 
          type="text" placeholder="Buscar..." 
          value={search} onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '0.8rem' }}
        />
        <div style={{ flex: 1, background: 'white', borderRadius: '8px', overflowY: 'auto', fontSize: '0.8rem' }}>
          {items.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #f0f0f0' }}>
              <span>{item.name}</span>
              <span style={{ color: item.stock < 10 ? 'red' : 'green' }}>{item.stock} u.</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- VIDEO DEMO (RESTAURADA COMPLETA) ---
const VideoDemo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '10px' }}>
       <div style={{ height: '60%', background: '#000', borderRadius: '10px', overflow: 'hidden' }}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/geurTVG5b5k" title="Demo IA" frameBorder="0" allowFullScreen />
       </div>
       <div style={{ flex: 1, overflowY: 'auto' }}>
         <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#2c3e50' }}>Reconocimiento Facial con Python</h3>
         <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', color: '#555' }}>
            Este sistema utiliza bibliotecas de <strong>OpenCV</strong> y <strong>Redes Neuronales</strong> para detectar rostros en tiempo real.
         </p>
       </div>
    </div>
  );
};

// --- DASHBOARD DEMO (RESTAURADA COMPLETA CON FILTROS) ---
const DashboardDemo = () => {
    const [timeRange, setTimeRange] = useState('Semana');
    const data = {
        'Día': { users: '120', sales: '$4.5k', chart: [20, 60, 40, 80, 50, 90] },
        'Semana': { users: '1.2k', sales: '$45k', chart: [40, 70, 30, 85, 50, 95] },
        'Mes': { users: '5.8k', sales: '$180k', chart: [60, 80, 50, 90, 70, 80] }
    };
    const currentData = data[timeRange];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1rem' }}>Admin Panel</h3>
                <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} style={{ fontSize: '0.7rem' }}>
                    <option>Día</option><option>Semana</option><option>Mes</option>
                </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ background: 'white', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{currentData.users}</div>
                    <div style={{ fontSize: '0.6rem' }}>Usuarios</div>
                </div>
                <div style={{ background: 'white', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{currentData.sales}</div>
                    <div style={{ fontSize: '0.6rem' }}>Ventas</div>
                </div>
            </div>
            <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '10px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
                {currentData.chart.map((h, i) => (
                    <motion.div key={i} animate={{ height: `${h}%` }} style={{ width: '12px', background: '#3498db', borderRadius: '5px' }} />
                ))}
            </div>
        </div>
    )
}

// --- COMPONENTE PRINCIPAL SHOWCASE (SOLUCIÓN VISUAL) ---
const ShowcaseContent = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth <= 768;

  const demos = [
    { id: 1, title: "¿Buscas un E-commerce?", desc: "Plataformas de venta modernas, rápidas y optimizadas para el comercio.", component: <EcommerceDemo />, color: '#ecf0f1' },
    { id: 2, title: "¿Sistemas de Gestión?", desc: "Paneles de control intuitivos para manejar inventarios y activos.", component: <InventoryDemo />, color: '#ecf0f1' },
    { id: 3, title: "Integración con IA", desc: "Potencia tu negocio con visión artificial y automatización inteligente.", component: <VideoDemo />, color: '#ecf0f1' },
    { id: 4, title: "Analítica de Datos", desc: "Dashboards interactivos para visualizar el rendimiento en tiempo real.", component: <DashboardDemo />, color: '#ecf0f1' }
  ];

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '0 2%', overflow: 'hidden' }}>
      
      {/* BREADCRUMB */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '5px' }}>
        <span onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}><FaHome /> Inicio</span>
        <FaChevronRight style={{ fontSize: '0.7rem' }} />
        <span style={{ color: 'white', fontWeight: 'bold' }}>Showcase</span>
      </div>

      <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', margin: '0 0 10px 0', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '5px' }}>
        Demos & Prototipos
      </h2>

      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
        
        <button onClick={() => setCurrentIndex((prev) => (prev - 1 + demos.length) % demos.length)} style={{ position: 'absolute', left: '-5px', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><FaChevronLeft /></button>
        <button onClick={() => setCurrentIndex((prev) => (prev + 1) % demos.length)} style={{ position: 'absolute', right: '-5px', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><FaChevronRight /></button>

        <div style={{ width: '100%', height: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: isMobile ? '1.3rem' : '2.2rem', color: '#3498db', margin: 0 }}>{demos[currentIndex].title}</h2>
                        <p style={{ fontSize: isMobile ? '0.85rem' : '1.1rem', color: '#ccc', margin: '2px 0' }}>{demos[currentIndex].desc}</p>
                    </div>

                    <div style={{ 
                        flex: 1, 
                        background: demos[currentIndex].color, 
                        borderRadius: '15px', 
                        padding: isMobile ? '15px 5px' : '20px', 
                        overflow: 'hidden',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                        position: 'relative'
                    }}>
                        {/* CONTENEDOR DE LA DEMO CON ZOOM AUTOMÁTICO PARA MÓVIL */}
                        <div style={{ 
                          height: '100%', 
                          width: '100%',
                          transform: isMobile ? 'scale(0.85)' : 'none',
                          transformOrigin: 'top center',
                          overflow: isMobile ? 'visible' : 'hidden'
                        }}>
                            {demos[currentIndex].component}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
      {isMobile && <div style={{ height: '15px' }}></div>}
    </div>
  );
};

export default ShowcaseContent;