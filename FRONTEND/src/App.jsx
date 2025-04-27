import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import AdminDashboard from './components/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
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
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/formulario/zerohum" 
          element={
            <ProtectedRoute>
              <FormularioZeroHum />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/formulario/pensi" 
          element={
            <ProtectedRoute>
              <FormularioPensi />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/formulario/elite" 
          element={
            <ProtectedRoute>
              <FormularioElite />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/formulario/coleguium" 
          element={
            <ProtectedRoute>
              <FormularioColeguium />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
