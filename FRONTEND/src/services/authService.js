const API_BASE_URL = 'http://localhost:8000/api';

// Função auxiliar para fazer requisições com credenciais e CSRF
async function fetchWithCredentials(url, options = {}) {
    const defaultOptions = {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
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

// Obter o token CSRF antes de fazer requisições POST
export async function getCSRFToken() {
    const response = await fetch(`${API_BASE_URL}/auth/csrf/`, {
        credentials: 'include',
    });
    const data = await response.json();
    return data.csrfToken;
}

// Login com credenciais
export async function login(email, password) {
    const csrfToken = await getCSRFToken();
    
    return fetch(`${API_BASE_URL}/auth/login/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({ email, password }),
    }).then(async response => {
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Erro na requisição');
        }
        return response.json();
    });
}

// Logout
export async function logout() {
    const csrfToken = await getCSRFToken();
    
    return fetchWithCredentials(`${API_BASE_URL}/auth/logout/`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken,
        },
    });
}

// Verificar estado da autenticação
export async function checkAuth() {
    return fetchWithCredentials(`${API_BASE_URL}/auth/check/`, {
        method: 'GET',
    });
}

// Função para verificar se o usuário tem permissão para acessar uma rota
export function checkPermission(user, route) {
    if (!user) return false;
    
    // Admin tem acesso a tudo
    if (user.is_staff) return true;

    // Verificar permissões baseadas nos grupos do usuário
    const userGroups = user.groups || [];
    
    switch (route) {
        case '/formulario/zerohum':
            return userGroups.includes('Zero Um');
        case '/formulario/pensi':
            return userGroups.includes('Pensi');
        case '/formulario/elite':
            return userGroups.includes('Elite');
        case '/formulario/coleguium':
            return userGroups.includes('Coleguium');
        case '/admin':
            return user.is_staff;
        default:
            return false;
    }
}