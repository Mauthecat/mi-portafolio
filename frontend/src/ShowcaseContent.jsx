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
    { id: 1, name: 'Nike Air Max', price: '$120.000', img: '👟' },
    { id: 2, name: 'MacBook M3', price: '$1.000.000', img: '💻' },
    { id: 3, name: 'Sony XM5', price: '$50.000', img: '🎧' },
    { id: 4, name: 'iPhone 15', price: '$999.000', img: '📱' },
  ];

  return (
    <div className="demo-container-internal" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
      <div style={{ background: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: '#333' }}>SHOP<span style={{ color: '#e74c3c' }}>ify</span></div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#555', fontWeight: '500' }}>
          <span style={{ cursor: 'pointer', color: '#000' }}>Inicio</span>
          <span style={{ cursor: 'pointer' }}>Productos</span>
          <span style={{ cursor: 'pointer' }}>Blog</span>
          <span style={{ cursor: 'pointer' }}>Contacto</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <FaSearch style={{ color: '#777', cursor: 'pointer' }} />
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <FaShoppingCart style={{ color: '#333' }} />
            <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#e74c3c', color: 'white', borderRadius: '50%', fontSize: '0.6rem', padding: '2px 5px' }}>2</span>
          </div>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <FaUser style={{ color: '#555', fontSize: '0.8rem' }} />
          </div>
        </div>
      </div>
      <div style={{ height: '160px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode='wait'>
          <motion.div key={currentSlide} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', background: slides[currentSlide].color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' , top: 0, left: 0}}>
            <h2 style={{ color: 'white', fontSize: '1.8rem', textShadow: '0 2px 10px rgba(0,0,0,0.2)', textAlign: 'center' }}>{slides[currentSlide].text}</h2>
          </motion.div>
        </AnimatePresence>
        <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '5px' }}>
          {slides.map((_, i) => (
            <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === currentSlide ? 'white' : 'rgba(255,255,255,0.5)' }} />
          ))}
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', padding: '20px', gap: '20px', overflow: 'hidden' }}>
        <div style={{ flex: 3, overflowY: 'auto', paddingRight: '5px' }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Destacados</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px' }}>
            {products.map(p => (
              <motion.div whileHover={{ y: -5 }} key={p.id} style={{ background: 'white', borderRadius: '10px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{p.img}</div>
                <div style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>{p.name}</div>
                <div style={{ color: '#e74c3c', fontWeight: 'bold', margin: '5px 0' }}>{p.price}</div>
                <button style={{ background: '#333', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '5px', fontSize: '0.8rem', cursor: 'pointer', width: '100%' }}>Comprar</button>
              </motion.div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, background: 'white', borderRadius: '10px', padding: '15px', height: 'fit-content', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#333', borderBottom: '2px solid #eee', paddingBottom: '5px' }}>Categorías</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#666', lineHeight: '2' }}>
            <li style={{ cursor: 'pointer' }}>👟 Zapatillas</li>
            <li style={{ cursor: 'pointer' }}>💻 Tecnología</li>
            <li style={{ cursor: 'pointer' }}>👕 Moda</li>
            <li style={{ cursor: 'pointer' }}>🏠 Hogar</li>
          </ul>
          <div style={{ marginTop: '20px', background: '#fff3cd', padding: '10px', borderRadius: '5px', fontSize: '0.8rem', color: '#856404' }}>
            <strong>¡Envío Gratis!</strong><br/>En compras sobre $50
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
  const [search, setSearch] = useState('');

  const handleDelete = (id) => setItems(items.filter(item => item.id !== id));

  return (
    <div className="demo-container-internal" style={{ width: '100%', height: '100%', display: 'flex', background: '#f4f6f9' }}>
      <div style={{ width: '160px', background: '#2c3e50', color: '#ecf0f1', display: 'flex', flexDirection: 'column', padding: '15px' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaBox /> INVENTARIO
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', cursor: 'pointer' }}>
            <FaChartLine /> Dashboard
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', cursor: 'pointer', opacity: 0.7 }}>
            <FaBox /> Productos
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', cursor: 'pointer', opacity: 0.7 }}>
            <FaUsers /> Proveedores
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', cursor: 'pointer', opacity: 0.7 }}>
            <FaCog /> Ajustes
          </div>
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', opacity: 0.7 }}>
          <FaSignOutAlt /> Salir
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '15px', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, color: '#2c3e50' }}>Listado de Productos</h3>
          <button style={{ background: '#27ae60', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <FaPlus /> Agregar Producto
          </button>
        </div>
        <div style={{ background: 'white', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
          <FaSearch style={{ color: '#aaa' }} />
          <input 
            type="text" placeholder="Buscar por nombre, SKU o categoría..." 
            value={search} onChange={(e) => setSearch(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', color: '#333', fontSize: '0.95rem' }}
          />
        </div>
        <div style={{ flex: 1, background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', padding: '10px', overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.5fr', padding: '10px', borderBottom: '2px solid #f0f0f0', fontWeight: 'bold', color: '#7f8c8d', fontSize: '0.9rem' }}>
            <span>Nombre</span>
            <span>Categoría</span>
            <span>Stock</span>
            <span style={{ textAlign: 'center' }}>Acción</span>
          </div>
          <AnimatePresence>
            {items.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map(item => (
              <motion.div 
                key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, height: 0 }}
                style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.5fr', padding: '15px 10px', borderBottom: '1px solid #f9f9f9', alignItems: 'center', fontSize: '0.95rem', color: '#2c3e50' }}
              >
                <span style={{ fontWeight: '500' }}>{item.name}</span>
                <span style={{ background: '#ecf0f1', padding: '2px 8px', borderRadius: '10px', width: 'fit-content', fontSize: '0.8rem', color: '#7f8c8d' }}>{item.cat}</span>
                <span style={{ color: item.stock < 10 ? '#e74c3c' : '#27ae60', fontWeight: 'bold' }}>{item.stock} u.</span>
                <button onClick={() => handleDelete(item.id)} title="Eliminar" style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', textAlign: 'center', fontSize: '1rem', padding: '5px' }}><FaTrash /></button>
              </motion.div>
            ))}
          </AnimatePresence>
          {items.length === 0 && <div style={{ padding: '20px', textAlign: 'center', color: '#aaa' }}>No hay productos en el inventario.</div>}
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

const DashboardDemo = () => {
    const [timeRange, setTimeRange] = useState('Semana'); // Estado para el filtro

    // Datos simulados según el filtro
    const data = {
        'Día': { users: '120', sales: '$4.5k', orders: '45', chart: [20, 40, 60, 30, 70, 50, 90, 40, 60, 80, 50, 70] },
        'Semana': { users: '1.2k', sales: '$45k', orders: '340', chart: [40, 70, 30, 85, 50, 90, 60, 45, 80, 55, 30, 95] },
        'Mes': { users: '5.8k', sales: '$180k', orders: '1.5k', chart: [60, 80, 50, 90, 70, 60, 80, 50, 70, 90, 60, 80] },
        'Año': { users: '68k', sales: '$2.1M', orders: '18k', chart: [30, 50, 40, 70, 50, 60, 80, 60, 90, 70, 80, 100] }
    };

    const currentData = data[timeRange];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
            {/* Header con Filtro */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h3 style={{ margin: 0, color: '#2c3e50' }}>Panel Administrativo</h3>
                    <span style={{ fontSize: '0.8rem', background: '#e0e0e0', padding: '2px 8px', borderRadius: '10px', color: '#555' }}>v2.0</span>
                </div>
                
                {/* SELECTOR DE TIEMPO */}
                <div style={{ display: 'flex', background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    {['Día', 'Semana', 'Mes', 'Año'].map(range => (
                        <button 
                            key={range}
                            onClick={() => setTimeRange(range)}
                            style={{
                                border: 'none',
                                background: timeRange === range ? '#3498db' : 'transparent',
                                color: timeRange === range ? 'white' : '#7f8c8d',
                                padding: '8px 15px',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                transition: 'all 0.2s',
                                fontWeight: timeRange === range ? 'bold' : 'normal'
                            }}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Stats Cards (Dinámicas) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
                <motion.div 
                    layoutId="card1"
                    style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderBottom: '4px solid #3498db' }}
                >
                    <FaUsers size={25} style={{ color: '#3498db', marginBottom: '10px' }} />
                    <motion.div 
                        key={currentData.users} // Key para animar el cambio
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333' }}
                    >
                        {currentData.users}
                    </motion.div>
                    <div style={{ fontSize: '0.85rem', color: '#777' }}>Usuarios Activos</div>
                </motion.div>

                <motion.div 
                    layoutId="card2"
                    style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderBottom: '4px solid #e67e22' }}
                >
                    <FaChartLine size={25} style={{ color: '#e67e22', marginBottom: '10px' }} />
                    <motion.div 
                        key={currentData.sales}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333' }}
                    >
                        {currentData.sales}
                    </motion.div>
                    <div style={{ fontSize: '0.85rem', color: '#777' }}>Ingresos</div>
                </motion.div>

                <motion.div 
                    layoutId="card3"
                    style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderBottom: '4px solid #9b59b6' }}
                >
                    <FaBox size={25} style={{ color: '#9b59b6', marginBottom: '10px' }} />
                    <motion.div 
                        key={currentData.orders}
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333' }}
                    >
                        {currentData.orders}
                    </motion.div>
                    <div style={{ fontSize: '0.85rem', color: '#777' }}>Pedidos</div>
                </motion.div>
            </div>

            {/* Gráfico de Barras (Dinámico) */}
            <div style={{ flex: 1, background: 'white', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', border: '1px solid #f0f0f0', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                <h4 style={{ margin: '0 0 15px 0', color: '#7f8c8d', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FaCalendarAlt /> Rendimiento por {timeRange}
                </h4>
                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
                    {currentData.chart.map((h, i) => (
                        <motion.div 
                            key={`${timeRange}-${i}`} // Key única para re-animar al cambiar filtro
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: i * 0.05 }}
                            style={{ 
                                width: '15px', 
                                background: i % 2 === 0 ? '#3498db' : '#bdc3c7', 
                                borderRadius: '10px 10px 0 0', 
                                opacity: 0.8 
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
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