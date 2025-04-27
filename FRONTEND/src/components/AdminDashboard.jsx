import { useState } from 'react';
import FormularioZeroHum from '../formularios/components/FormularioZeroHum';
import FormularioPensi from '../formularios/components/FormularioPensi';
import FormularioElite from '../formularios/components/FormularioElite';
import FormularioColeguium from '../formularios/components/FormularioColeguium';

export default function AdminDashboard() {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('isAdmin');
    window.location.href = '/';
  };

  const renderSelectedForm = () => {
    switch(selectedForm) {
      case 'zerohum':
        return <FormularioZeroHum />;
      case 'pensi':
        return <FormularioPensi />;
      case 'elite':
        return <FormularioElite />;
      case 'coleguium':
        return <FormularioColeguium />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Painel do Administrador</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Sair
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div 
            onClick={() => setSelectedForm('zerohum')}
            className={`p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer ${
              selectedForm === 'zerohum' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">Formulário Zero Um</h2>
            <p className="text-gray-600">Gerenciar formulários Zero Um</p>
          </div>

          <div 
            onClick={() => setSelectedForm('pensi')}
            className={`p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer ${
              selectedForm === 'pensi' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">Formulário Pensi</h2>
            <p className="text-gray-600">Gerenciar formulários Pensi</p>
          </div>

          <div 
            onClick={() => setSelectedForm('elite')}
            className={`p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer ${
              selectedForm === 'elite' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">Formulário Elite</h2>
            <p className="text-gray-600">Gerenciar formulários Elite</p>
          </div>

          <div 
            onClick={() => setSelectedForm('coleguium')}
            className={`p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer ${
              selectedForm === 'coleguium' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">Formulário Coleguium</h2>
            <p className="text-gray-600">Gerenciar formulários Coleguium</p>
          </div>
        </div>

        {/* Área do formulário selecionado */}
        {selectedForm && (
          <div className="bg-white rounded-lg shadow-md p-6">
            {renderSelectedForm()}
          </div>
        )}
      </div>
    </div>
  );
}