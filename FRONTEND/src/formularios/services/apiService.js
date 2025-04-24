const API_BASE_URL = 'http://localhost:8000/api';

export async function enviarFormularioZeroHum(formData) {
  const response = await fetch(`${API_BASE_URL}/formulario/zerohum/`, {
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

export async function enviarFormularioPensi(formData) {
  const response = await fetch(`${API_BASE_URL}/formulario/pensi/`, {
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
  const response = await fetch(`${API_BASE_URL}/formulario/elite/`, {
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
  const response = await fetch(`${API_BASE_URL}/formulario/coleguium/`, {
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