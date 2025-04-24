import { useState } from 'react';
import { enviarFormularioElite } from '../services/apiService';

export default function FormularioElite() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    titulo: '',
    data_entrega: '',
    observacoes: '',
    formato: 'A4',
    cor_impressao: 'PB',
    impressao: '1_LADO',
    gramatura: '75g',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await enviarFormularioElite(formData);
      console.log('Formulário enviado com sucesso:', response);
      setFormData({
        nome: '',
        email: '',
        titulo: '',
        data_entrega: '',
        observacoes: '',
        formato: 'A4',
        cor_impressao: 'PB',
        impressao: '1_LADO',
        gramatura: '75g',
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Formulário Elite</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Título do Trabalho:</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Data de Entrega:</label>
          <input
            type="date"
            name="data_entrega"
            value={formData.data_entrega}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Observações:</label>
          <textarea
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>

        <div>
          <label className="block mb-1">Formato:</label>
          <select
            name="formato"
            value={formData.formato}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="A4">A4</option>
            <option value="A3">A3</option>
            <option value="A5">A5</option>
            <option value="Carta">Carta</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Cor da Impressão:</label>
          <select
            name="cor_impressao"
            value={formData.cor_impressao}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="PB">Preto e Branco</option>
            <option value="Color">Colorido</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Tipo de Impressão:</label>
          <select
            name="impressao"
            value={formData.impressao}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="1_LADO">Um Lado</option>
            <option value="2_LADOS">Frente e Verso</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Gramatura:</label>
          <select
            name="gramatura"
            value={formData.gramatura}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="75g">75g</option>
            <option value="90g">90g</option>
            <option value="120g">120g</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Enviar Formulário
        </button>
      </form>
    </div>
  );
}