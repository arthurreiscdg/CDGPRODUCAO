# CDGPDF Frontend

Sistema de formulários para processamento e geração de documentos PDF.

## Tecnologias

- React
- Vite
- TailwindCSS
- ShadcnUI (componentes baseados em Tailwind)
- React Router
- Context API para gerenciamento de estado

## Requisitos

- Node.js 18+ 
- npm ou yarn

## Configuração inicial

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd CDGPDF/FRONTEND
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Copie o arquivo de exemplo de variáveis de ambiente:
   ```bash
   cp .env.example .env.local
   ```

4. Edite o arquivo `.env.local` e configure a URL da API:
   ```
   VITE_API_URL=http://localhost:8000/api/formulario
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## Estrutura do projeto

- `src/`
  - `assets/`: Arquivos estáticos como imagens e ícones
  - `components/`: Componentes React reutilizáveis
    - `AdminDashboard.jsx`: Painel de administração
    - `Home.jsx`: Página inicial
    - `LoginModal.jsx`: Modal de login
    - `ProtectedRoute.jsx`: Componente de rota protegida
  - `config/`: Arquivos de configuração
  - `constants/`: Constantes e enumerações
  - `formularios/`: Componentes e lógica específicos de cada formulário
    - `ZeroHum/`
    - `Pensi/`
    - `Elite/`
    - `Coleguium/`
  - `services/`: Serviços para comunicação com API e outras funcionalidades
    - `apiService.js`: Integração com backend
    - `authService.js`: Serviços de autenticação
  - `App.jsx`: Componente principal
  - `main.jsx`: Ponto de entrada da aplicação

## Formulários disponíveis

### Zero Hum Excel
Formulário para processamento de documentos PDF com dados provenientes de uma planilha Excel

### Pensi
Formulário específico para o cliente Pensi

### Elite
Formulário específico para o cliente Elite

### Coleguium
Formulário específico para o cliente Coleguium

## Autenticação

O sistema utiliza autenticação baseada em cookies e tokens CSRF para segurança:

1. O login é feito através do componente `LoginModal.jsx`
2. A autenticação é gerenciada pelo serviço `authService.js`
3. Rotas protegidas são implementadas pelo componente `ProtectedRoute.jsx`

## Deploy na Vercel

O projeto está configurado para deploy automatizado na Vercel:

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente:
   - `VITE_API_URL`: URL completa da API backend

Ou faça deploy manualmente via CLI:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

## Configuração para produção

Para gerar a build de produção:

```bash
npm run build
# ou
yarn build
```

O resultado será gerado na pasta `dist/`, pronto para ser servido por qualquer servidor web estático.

## Variáveis de ambiente

- `VITE_API_URL`: URL base da API backend (obrigatória)

## Comandos disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a versão de produção
- `npm run preview`: Visualiza a versão de produção localmente
- `npm run lint`: Executa o linter para verificar o código
