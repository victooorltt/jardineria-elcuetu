import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Home from './Pages/Home.jsx';
import Servicios from './Pages/Servicios.jsx';
import Contacto from './Pages/Contacto.jsx';
import Proyectos from './Pages/Proyectos.jsx';
import Nosotros from './Pages/Nosotros.jsx';

function App() {
  const location = useLocation();
  
  // Truco para saber el nombre de la página actual basado en la URL
  const getPageName = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/servicios') return 'Servicios';
    if (path === '/contacto') return 'Contacto';
    return '';
  };

  return (
    <Layout currentPageName={getPageName()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Layout>
  );
}

export default App;