import { getCSRFToken } from '../../services/authService';

// URL base dinâmica baseada no ambiente
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api/formulario';

async function fetchWithAuth(url, options = {}) {
    const csrfToken = await getCSRFToken();
    
    const defaultOptions = {
        credentials: 'include',
        headers: {
            'X-CSRFToken': csrfToken,
            ...options.headers,
        },
    };

    const response = await fetch(url, { ...defaultOptions, ...options });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Erro na requisição');
    }
    return response.json();
}

export async function enviarFormularioZeroHum(formData) {
    const csrfToken = await getCSRFToken();
    return fetchWithAuth(`${API_BASE_URL}/zerohum-excel/`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken,
        },
        body: formData,
    });
}

export async function enviarFormularioPensi(formData) {
    return fetchWithAuth(`${API_BASE_URL}/pensi/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
}

export async function enviarFormularioElite(formData) {
    return fetchWithAuth(`${API_BASE_URL}/elite/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
}

export async function enviarFormularioColeguium(formData) {
    return fetchWithAuth(`${API_BASE_URL}/coleguium/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
}