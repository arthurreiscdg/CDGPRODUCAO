const API_BASE_URL = 'http://localhost:8000/api/formulario';

export async function enviarFormularioZeroHum(formData) {
  const response = await fetch(`${API_BASE_URL}/zerohum-excel/`, {
    method: 'POST',
    body: formData, // FormData já está configurado corretamente, não precisa de headers
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar formulário');
  }

  return response.json();
}

export async function enviarFormularioPensi(formData) {
  const response = await fetch(`${API_BASE_URL}/pensi/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar formulário');
  }

  return response.json();
}

export async function enviarFormularioElite(formData) {
  const response = await fetch(`${API_BASE_URL}/elite/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar formulário');
  }

  return response.json();
}

export async function enviarFormularioColeguium(formData) {
  const response = await fetch(`${API_BASE_URL}/coleguium/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar formulário');
  }

  return response.json();
}