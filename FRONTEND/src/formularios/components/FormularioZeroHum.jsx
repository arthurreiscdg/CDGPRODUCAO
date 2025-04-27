import { useState } from 'react';
import { enviarFormularioZeroHum } from '../services/apiService';

export default function FormularioZeroHum() {
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
    grampos: '',
    arquivos_pdf: [],
    arquivo_excel: null
  });

  const [pdfPreview, setPdfPreview] = useState({
    show: false,
    url: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'arquivos_pdf') {
      setFormData(prev => ({
        ...prev,
        arquivos_pdf: Array.from(files)
      }));
    } else if (name === 'arquivo_excel') {
      setFormData(prev => ({
        ...prev,
        arquivo_excel: files[0]
      }));
    }
  };

  const handlePdfPreview = (file) => {
    const url = URL.createObjectURL(file);
    setPdfPreview({ show: true, url });
  };

  const closePdfPreview = () => {
    if (pdfPreview.url) {
      URL.revokeObjectURL(pdfPreview.url);
    }
    setPdfPreview({ show: false, url: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Criar um FormData para enviar os arquivos
      const formDataToSend = new FormData();
      formData.arquivos_pdf.forEach(file => {
        formDataToSend.append('files[]', file);
      });
      if (formData.arquivo_excel) {
        formDataToSend.append('excel_file', formData.arquivo_excel);
      }
      // Adicionar os outros campos com os valores formatados corretamente
      formDataToSend.append('nome', formData.nome);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('titulo', formData.titulo);
      formDataToSend.append('data_entrega', formData.data_entrega);
      formDataToSend.append('observacoes', formData.observacoes || '');
      formDataToSend.append('formato', formData.formato.toUpperCase());
      formDataToSend.append('cor_impressao', formData.cor_impressao);
      formDataToSend.append('impressao', formData.impressao);
      formDataToSend.append('gramatura', formData.gramatura);
      // Só envia grampos se tiver um valor válido
      if (formData.grampos && formData.grampos !== 'nenhum') {
        formDataToSend.append('grampos', formData.grampos);
      }

      const response = await enviarFormularioZeroHum(formDataToSend);
      console.log('Formulário enviado com sucesso:', response);
      
      // Limpar formulário após envio
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
        grampos: '',
        arquivos_pdf: [],
        arquivo_excel: null
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário: ' + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Formulário de Pedido de Produção ZeroHum</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Seção de Upload de PDFs */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Upload de PDFs</h3>
          <div className="space-y-4">
            <label className="block">
              <span className="sr-only">Escolher arquivos PDF</span>
              <input
                type="file"
                name="arquivos_pdf"
                onChange={handleFileChange}
                accept=".pdf"
                multiple
                required
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </label>
            {formData.arquivos_pdf.length > 0 && (
              <ul className="space-y-2">
                {Array.from(formData.arquivos_pdf).map((file, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handlePdfPreview(file)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Visualizar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Seção de Upload de Excel */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Upload de Excel</h3>
          <div>
            <label className="block">
              <span className="sr-only">Escolher arquivo Excel</span>
              <input
                type="file"
                name="arquivo_excel"
                onChange={handleFileChange}
                accept=".xls,.xlsx"
                required
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </label>
            {formData.arquivo_excel && (
              <p className="mt-2 text-sm text-gray-600">
                Arquivo selecionado: {formData.arquivo_excel.name}
              </p>
            )}
          </div>
        </div>

        {/* Informações do Trabalho */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h3 className="text-lg font-semibold mb-4">Informações do Trabalho</h3>
          
          <div>
            <label className="block mb-1">Título do material:</label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Ex: Apostila de Matemática"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Data de entrega na escola:</label>
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
              placeholder="Informações adicionais sobre o trabalho"
            />
          </div>
        </div>

        {/* Especificações para Produção */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h3 className="text-lg font-semibold mb-4">Especificações para Produção</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Formato:</label>
              <select
                name="formato"
                value={formData.formato}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
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
                required
              >
                <option value="PB">Preto e Branco</option>
                <option value="Color">Colorido</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Impressão:</label>
              <select
                name="impressao"
                value={formData.impressao}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="1_LADO">Só frente</option>
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
                required
              >
                <option value="75g">75g (Padrão)</option>
                <option value="90g">90g</option>
                <option value="120g">120g</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Grampos:</label>
              <select
                name="grampos"
                value={formData.grampos}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Selecione a quantidade</option>
                <option value="nenhum">Nenhum</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dados de Contato */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h3 className="text-lg font-semibold mb-4">Dados de Contato</h3>
          
          <div>
            <label className="block mb-1">Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Seu nome completo"
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
              placeholder="seu.email@exemplo.com"
              required
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-md text-sm text-blue-700">
            Ao enviar este formulário, você concorda em ser contatado sobre seu pedido de produção de documentos.
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enviar Pedido
          </button>
        </div>
      </form>

      {/* Modal de Visualização do PDF */}
      {pdfPreview.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 h-5/6 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Visualização do PDF</h3>
              <button
                onClick={closePdfPreview}
                className="text-gray-500 hover:text-gray-700"
              >
                Fechar
              </button>
            </div>
            <iframe
              src={pdfPreview.url}
              className="w-full h-full rounded"
              title="PDF Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
}