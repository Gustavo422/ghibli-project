Miniprojeto Fullstack: Catálogo Studio Ghibli

> Este documento detalha o projeto de desenvolvimento de uma aplicação web para catalogar filmes do Studio Ghibli, com foco em Next.js, React e Tailwind CSS. O projeto será estruturado para facilitar a implementação e o acompanhamento das tarefas.

## 1. Visão Geral do Projeto

Desenvolver uma aplicação web que consome a API do Studio Ghibli para exibir informações sobre filmes, personagens e locais do universo Ghibli.

### 1.1. Stack Tecnológica

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Next.js (API Routes)
- **API Externa:** Studio Ghibli API

### 1.2. Funcionalidades Principais

- Listagem de filmes em formato de catálogo
- Sistema de busca por filmes, personagens e locais
- Filtros para refinar buscas (diretor, ano de lançamento)
- Páginas detalhadas para cada filme
- Design responsivo para diferentes dispositivos

## 2. Estrutura do Projeto

```
📦 /app
 ┣ 📂 /api
 ┃ ┣ 📂 /films
 ┃ ┃ ┗ 📜 route.js                # 🎬 Endpoint: retorna lista de filmes da API
 ┃ ┣ 📂 /auth
 ┃ ┃ ┣ 📜 login.js                # 🔐 Endpoint: login de usuário
 ┃ ┃ ┣ 📜 register.js             # 📝 Endpoint: registro de usuário
 ┃ ┃ ┗ 📜 logout.js               # 🚪 Endpoint: logout e limpeza de sessão
 ┃ ┗ 📜 middleware.js             # 🧱 Protege rotas autenticadas (NextAuth / JWT)
 ┣ 📂 /films
 ┃ ┣ 📂 /[id]
 ┃ ┃ ┗ 📜 page.jsx                # 🎞️ Página de detalhes de filme (rota dinâmica)
 ┃ ┗ 📜 page.jsx                  # 🗂️ Página principal de listagem de filmes
 ┣ 📂 /auth
 ┃ ┣ 📜 login.jsx                 # 🔑 Página de login
 ┃ ┣ 📜 register.jsx              # 🧾 Página de registro
 ┃ ┗ 📜 layout.jsx                # 🎨 Layout base para telas de autenticação
 ┣ 📜 layout.jsx                  # 🧩 Layout global da aplicação
 ┗ 📜 page.jsx                    # 🏠 Página inicial / redirecionamento

📦 /components
 ┣ 📂 /ui
 ┃ ┣ 📜 Button.jsx                # 🔘 Botão reutilizável
 ┃ ┣ 📜 Card.jsx                  # 🪪 Card base
 ┃ ┣ 📜 Input.jsx                 # ✏️ Campo de input genérico
 ┃ ┣ 📜 SearchBar.jsx             # 🔍 Barra de busca com debounce
 ┃ ┗ 📜 Dropdown.jsx              # 🎛️ Componente de filtro (diretor, ano)
 ┣ 📜 FilmList.jsx                # 🧱 Grid de filmes (usa FilmCard)
 ┣ 📜 FilmCard.jsx                # 🎬 Card individual de filme
 ┣ 📜 Navbar.jsx                  # 🧭 Barra de navegação (home, login, logout)
 ┣ 📜 AuthForm.jsx                # 🧑‍💻 Formulário de login/registro
 ┗ 📜 Loader.jsx                  # ⏳ Componente visual de loading

📦 /lib
 ┣ 📜 api.js                      # 🌐 Funções de fetch para API externa e interna
 ┣ 📜 auth.js                     # 🔒 Funções de autenticação (login, register, logout)
 ┣ 📜 fetcher.js                  # 🧩 Função genérica de fetch (com tratamento de erro)
 ┣ 📜 validators.js               # ✅ Validação de formulários (email, senha, etc.)
 ┣ 📜 utils.js                    # 🧮 Funções utilitárias genéricas (formatar data, etc.)
 ┣ 📜 constants.js                # ⚙️ Constantes globais (URLs, mensagens, etc.)
 ┗ 📜 storage.js                  # 💾 Utilitários para localStorage / cookies

📦 /styles
 ┣ 📜 globals.css                 # 🎨 Estilos globais
 ┗ 📜 animations.css              # 💫 Animações personalizadas

📦 /config
 ┣ 📜 nextAuth.js                 # ⚙️ Configuração NextAuth (provedores, callbacks)
 ┗ 📜 env.js                      # 🌱 Variáveis de ambiente centralizadas

📦 /public
 ┣ 📜 favicon.ico
 ┣ 📂 /images
 ┃ ┣ 📜 logo-ghibli.png           # 🐉 Logotipo da aplicação
 ┃ ┣ 📜 placeholder-film.jpg      # 🎥 Imagem padrão de filme
 ┗ 📜 robots.txt

```

## 3. Especificações de Implementação

#### **3.1. Configuração do Ambiente** - Fácil

**Tags:** #config #nextjs #tailwindcss

**Enunciado:** Configurar o ambiente de desenvolvimento inicial para o projeto Next.js, incluindo a instalação e configuração do Tailwind CSS.

**Passos Detalhados:**

1. Inicializar um novo projeto Next.js utilizando `create-next-app`.
2. Instalar e configurar o Tailwind CSS conforme a documentação oficial do Next.js.
3. Organizar a estrutura básica de pastas do projeto.
4. Verificar o funcionamento do ambiente de desenvolvimento executando a aplicação.

**Requisitos de Implementação:**

- Projeto Next.js configurado com App Router.
- Tailwind CSS integrado e funcional.
- Estrutura de pastas `/app`, `/components`, `/lib` criada.

#### **3.2. API Route para Filmes** - Médio

**Tags:** #backend #api #nextjs

**Enunciado:** Implementar uma API Route no Next.js para buscar e retornar dados de filmes da API do Studio Ghibli.

**Contexto Next.js:** `app/api/films/route.js`

**Passos Detalhados:**

1. Criar o arquivo `route.js` dentro de `app/api/films`.
2. Implementar a função `GET` para lidar com as requisições.
3. Realizar uma requisição HTTP para `https://ghibliapi.vercel.app/films`.
4. Configurar tratamento de erros para requisições à API externa.
5. Retornar os dados obtidos em formato JSON.
6. Testar o endpoint acessando `/api/films` no navegador ou via ferramenta como Postman/Insomnia.

**Requisitos de Implementação:**

- Endpoint `/api/films` deve retornar uma lista de filmes.
- Tratamento de erros para falhas na requisição à API externa.
- Resposta em formato JSON.

#### **3.3. Listagem de Filmes** - Médio

**Tags:** #frontend #react #ui

**Enunciado:** Desenvolver a página principal de listagem de filmes, exibindo os dados obtidos da API em um formato de catálogo.

**Contexto Next.js:** `app/films/page.js`

**Passos Detalhados:**

1. Criar a página `page.js` dentro de `app/films`.
2. Implementar a chamada para a API Route `/api/films` para obter os dados dos filmes.
3. Criar um componente `FilmCard` para exibir individualmente cada filme.
4. Estruturar um grid responsivo para exibir os `FilmCard`s.
5. Adicionar estados de carregamento (loading states) enquanto os dados são buscados.
6. Implementar tratamento de erros na interface do usuário para exibir mensagens amigáveis.
7. Estilizar a página e os componentes utilizando Tailwind CSS.

**Requisitos de Implementação:**

- Exibição de uma lista de filmes com seus respectivos cards.
- Layout responsivo que se adapta a diferentes tamanhos de tela.
- Indicadores visuais de carregamento e erro.

#### **3.4. Página de Detalhes do Filme** - Difícil

**Tags:** #frontend #react #routing

**Enunciado:** Criar uma página dinâmica para exibir os detalhes completos de um filme específico.

**Contexto Next.js:** `app/films/[id]/page.js`

**Passos Detalhados:**

1. Criar a rota dinâmica `[id]` dentro de `app/films`.
2. Implementar a obtenção do parâmetro `id` da URL.
3. Fazer uma requisição à API do Studio Ghibli para obter os detalhes do filme com base no `id`.
4. Criar o layout da página de detalhes, incluindo título, diretor, ano de lançamento, etc.
5. Implementar uma seção para a sinopse do filme.
6. Adicionar uma seção para listar os personagens relacionados ao filme.
7. Incluir uma seção para listar os locais apresentados no filme.
8. Implementar um botão ou link para navegação de volta à listagem de filmes.
9. Adicionar tratamento de erros e estados de carregamento para a página de detalhes.

**Requisitos de Implementação:**

- Rota dinâmica funcional para `/films/[id]`.
- Exibição de todas as informações relevantes do filme.
- Navegação intuitiva de volta à listagem.

#### **3.5. Busca e Filtros** - Difícil

**Tags:** #frontend #react #state-management

**Enunciado:** Implementar funcionalidades de busca e filtragem para a listagem de filmes.

**Contexto Next.js:** `app/films/page.js`

**Passos Detalhados:**

1. Criar um componente `SearchBar` para a entrada de texto de busca.
2. Implementar um campo de input para a busca de filmes, personagens ou locais.
3. Criar componentes de filtro, como um dropdown para selecionar diretores.
4. Implementar gerenciamento de estado para os termos de busca e filtros, utilizando `useState` ou `useReducer`.
5. Desenvolver a lógica de filtragem no lado do cliente para os dados já carregados.
6. Adicionar filtros por ano de lançamento.
7. Implementar busca em tempo real (debounced input) para melhor experiência do usuário.
8. Criar indicadores visuais para os filtros ativos.
9. Adicionar funcionalidade para limpar todos os filtros aplicados.

**Requisitos de Implementação:**

- Campo de busca funcional que filtra a lista de filmes.
- Filtros por diretor e ano de lançamento.
- Gerenciamento de estado eficiente para as funcionalidades de busca e filtro.

## 4. Requisitos Técnicos

### 4.1. Performance e SEO

- Implementar Server-Side Rendering (SSR) para a listagem inicial de filmes.
- Otimizar imagens e outros assets para carregamento rápido.
- Garantir a inclusão de meta tags adequadas para otimização de motores de busca (SEO).

### 4.2. Experiência do Usuário

- Implementar interatividade no lado do cliente para buscas e filtros.
- Adicionar estados de carregamento claros durante as requisições de dados.
- Criar mensagens de erro amigáveis e informativas.
- Garantir acessibilidade (ARIA labels, semântica HTML) para todos os componentes.

### 4.3. Qualidade do Código

- Promover a componentização e reutilização de código.
- Manter uma estilização consistente utilizando Tailwind CSS.
- Implementar tratamento de erros robusto em todas as chamadas de API.
- Escrever código limpo, legível e bem documentado.

## 5. Checklist de Desenvolvimento

### Fase 1: Setup e Configuração

- [x] Ambiente Next.js configurado
- [x] Tailwind CSS funcionando
- [x] Estrutura de pastas criada
- [x] Repositório Git inicializado

### Fase 2: Backend e API

- [x] API Route `/api/films` implementada
- [x] Tratamento de erros na API
- [ ] Testes manuais dos endpoints

### Fase 3: Frontend Básico

- [ ] Página de listagem de filmes
- [ ] Componente `FilmCard` estilizado
- [ ] Layout responsivo
- [ ] Navegação entre páginas

### Fase 4: Funcionalidades Avançadas

- [ ] Página de detalhes do filme
- [ ] Sistema de busca implementado
- [ ] Filtros por diretor e ano
- [ ] Estados de loading e error

### Fase 5: Autenticação

- [ ] Estratégia de autenticação definida
- [ ] Rotas de API para login/registro implementadas
- [ ] Lógica de validação de credenciais no backend
- [ ] Formulário de login/registro no frontend
- [ ] Rotas protegidas por autenticação
- [ ] Funcionalidade de logout implementada
- [ ] Tratamento de erros de autenticação

### Fase 6: Polimento e Otimização

- [ ] Design refinado com Tailwind
- [ ] Performance otimizada
- [ ] Testes em diferentes dispositivos
- [ ] Tratamento de todos os edge cases

### Fase 7: Deploy e Finalização

- [ ] Aplicação deployada (Vercel recomendado)
- [ ] Testes finais em produção
- [ ] Documentação atualizada

## 6. Critérios de Aceitação

- ✅ Aplicação funciona sem erros no console

- ✅ Todas as funcionalidades principais implementadas

- ✅ Design responsivo em mobile e desktop

- ✅ Performance adequada nas requisições

- ✅ Código organizado e componentizado

- ✅ Sistema de autenticação funcional (login, registro, logout)

- ✅ Rotas protegidas por autenticação conforme especificado

- ✅ Deploy realizado e acessível publicamente#### **3.6. Sistema de Autenticação** - Difícil

**Tags:** #autenticacao #nextjs #backend #frontend

**Enunciado:** Implementar um sistema de autenticação básico para proteger certas rotas ou funcionalidades da aplicação.

**Contexto Next.js:** `app/api/auth/...`, `lib/auth.js`, `components/AuthForm.js`

**Passos Detalhados:**

1. Escolher uma estratégia de autenticação (e.g., JWT com NextAuth.js ou autenticação manual com cookies/sessions).
2. Configurar as rotas de API para login e registro de usuários.
3. Implementar a lógica de validação de credenciais no backend.
4. Criar um formulário de login e registro no frontend.
5. Proteger rotas específicas no frontend e/ou backend, exigindo autenticação.
6. Implementar funcionalidade de logout.
7. Adicionar tratamento de erros para falhas de autenticação.

**Requisitos de Implementação:**

- Capacidade de registrar novos usuários.
- Capacidade de usuários existentes fazerem login.
- Proteção de rotas ou dados sensíveis.
- Funcionalidade de logout.
- Mensagens de erro claras para falhas de autenticação.
