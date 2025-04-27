import { Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { checkAuth } from '../services/authService';

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await checkAuth();
        if (response.isAuthenticated) {
          setUserData(response.user);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  // Se não estiver autenticado, redireciona para home
  if (!userData) {
    return <Navigate to="/" replace />;
  }

  // Verificar permissões baseado na rota atual
  const hasAccess = () => {
    // Admin tem acesso a tudo
    if (userData.is_staff) {
      return true;
    }

    // Verificar acesso baseado nos grupos do usuário
    const userGroups = userData.groups;
    
    switch (location.pathname) {
      case '/admin':
        return userData.is_staff;
      case '/formulario/zerohum':
        return userGroups.includes('Zero Um');
      case '/formulario/pensi':
        return userGroups.includes('Pensi');
      case '/formulario/elite':
        return userGroups.includes('Elite');
      case '/formulario/coleguium':
        return userGroups.includes('Coleguium');
      default:
        return false;
    }
  };

  if (!hasAccess()) {
    return <Navigate to="/" replace />;
  }

  return children;
}