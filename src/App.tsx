import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'

import Header from './pages/Header.tsx'
import Menu from './components/Menu.tsx'
import LesaoPorPressao from './pages/LesaoPressao.tsx'
import Diabetes from './pages/Diabetes.tsx'
import Sondas from './pages/Sondas.tsx'
import Drenos from './pages/Drenos.tsx'
import Estomias from './pages/Estomias.tsx'
import CateterVenosoCentral from './pages/CateterVenosoCentral.tsx'

// import './App.css'

function App() {
  return (
    <>
      <Router>
        
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<LesaoPorPressao />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/estomias" element={<Estomias />} />
          <Route path="/sondas" element={<Sondas />} />
          <Route path="/drenos" element={<Drenos />} />
          {/* Traqueostomia */}
          <Route path="/cateter" element={<CateterVenosoCentral />} />
          {/* Hipertensão */}
        </Routes>
      
      </Router>
    </>
  )
}

export default App
