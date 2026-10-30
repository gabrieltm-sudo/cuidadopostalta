import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header.tsx'
import Menu from './components/Menu.tsx'
import FontButtons from './components/acessibilityFontButtons.tsx'

import Home from './pages/Home.tsx'
import LesaoPorPressao from './pages/LesaoPressao.tsx'
import Diabetes from './pages/Diabetes.tsx'
import Sondas from './pages/Sondas.tsx'
import Drenos from './pages/Drenos.tsx'
import Estomias from './pages/Estomias.tsx'
import Traqueostomia from './pages/Traqueostomia.tsx'
import CateterVenosoCentral from './pages/CateterVenosoCentral.tsx'
import Hipertensao from './pages/Hipertensao.tsx'
import FeridaOperatoria from './pages/FeridaOperatoria.tsx'

// import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Menu />
        <FontButtons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesao-pressao" element={<LesaoPorPressao />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/estomias" element={<Estomias />} />
          <Route path="/sondas" element={<Sondas />} />
          <Route path="/drenos" element={<Drenos />} />
          <Route path="/traqueostomia" element={<Traqueostomia />} />
          <Route path="/cateter" element={<CateterVenosoCentral />} />
          <Route path="/hipertensao" element={<Hipertensao />} />
          <Route path="/feridaOperatoria" element={<FeridaOperatoria />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
