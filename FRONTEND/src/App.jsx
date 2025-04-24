import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import FormularioZeroHum from './formularios/components/FormularioZeroHum'
import FormularioPensi from './formularios/components/FormularioPensi'
import FormularioElite from './formularios/components/FormularioElite'
import FormularioColeguium from './formularios/components/FormularioColeguium'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario/zerohum" element={<FormularioZeroHum />} />
        <Route path="/formulario/pensi" element={<FormularioPensi />} />
        <Route path="/formulario/elite" element={<FormularioElite />} />
        <Route path="/formulario/coleguium" element={<FormularioColeguium />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
