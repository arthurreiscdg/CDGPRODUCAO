import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (route) => {
    setIsLoginModalOpen(false);
    navigate(route);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Casa da Gráfica</h1>
          <p className="text-lg text-gray-600">Sistema de Gestão de Formulários PDF</p>
        </div>

        <button
          onClick={() => setIsLoginModalOpen(true)}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-colors text-lg"
        >
          Fazer Login
        </button>

        <LoginModal 
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={handleLogin}
        />
      </div>
    </div>
  );
}