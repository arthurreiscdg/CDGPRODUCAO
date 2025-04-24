import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Sistema de Formulários PDF</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          to="/formulario/zerohum" 
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Formulário Zero Um</h2>
          <p className="text-gray-600">Gerenciar formulários e arquivos PDF para Zero Um</p>
        </Link>

        <Link 
          to="/formulario/pensi" 
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Formulário Pensi</h2>
          <p className="text-gray-600">Gerenciar formulários e arquivos PDF para Pensi</p>
        </Link>

        <Link 
          to="/formulario/elite" 
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Formulário Elite</h2>
          <p className="text-gray-600">Gerenciar formulários e arquivos PDF para Elite</p>
        </Link>

        <Link 
          to="/formulario/coleguium" 
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Formulário Coleguium</h2>
          <p className="text-gray-600">Gerenciar formulários e arquivos PDF para Coleguium</p>
        </Link>
      </div>
    </div>
  );
}