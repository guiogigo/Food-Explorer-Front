# Food Explorer - Front-End

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Deploy](#deploy)
- [Requisitos](#requisitos)
- [Deploy Local](#deploy-local)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Contato](#contato)

---

## Sobre o Projeto
O **Food Explorer** é uma aplicação fullstack desenvolvida utilizando as tecnologias aprendidas durante o programa Explorer da Rocketseat para facilitar a gestão e visualização de pratos em um cardápio digital. 

Criado como parte do programa Explorer, o projeto incorpora funcionalidades modernas que permitem ao administrador gerenciar o cardápio de forma intuitiva e eficiente, enquanto proporciona uma experiência amigável para os usuários finais. A plataforma segue o conceito **Mobile First**, garantindo uma navegação fluida tanto em dispositivos móveis quanto em desktops.

---

## Deploy

A aplicação está hospedada no Netlify e pode ser acessada no seguinte link:

- [Deploy da Aplicação](https://foodexplorer-guibat.netlify.app)
- [API (Back-End)](https://github.com/guiogigo/Food-Explorer-Back)

Para efetuar login na aplicação, utilize as credenciais abaixo:

**Administrador**:
```
login: admin@email.com
senha: 123456
```
**Usuário**:
```
login: user@email.com
senha: 123456
```
---

## Requisitos
- **Node.js** instalado na máquina.
- **NPM** ou **Yarn** para gerenciamento de pacotes.
- Back-end configurado e em execução (API própria).

---

## Deploy Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/guiogigo/Food-Explorer-Front.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd food-explorer-frontend
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

5. **Ajuste a baseURL em `/services/api.js`:**
   ```bash
   baseURL: "http://localhost:3333"
   ```

5. **Execute a aplicação:**
   ```bash
   npm start
   ```
   ou
   ```bash
   yarn start
   ```

---

## Tecnologias Utilizadas
- **React.js**
- **JavaScript** 
- **CSS3** 
- **HTML5** 
- **Axios** 
- **React Router DOM**
- **JWT (JSON Web Token)**
- **ESLint** e **Prettier**

---

## Funcionalidades
1. **Autenticação JWT**:
   - Tela de login e registro para acesso seguro.
   - Validação de senha.

2. **Admin**:
   - Criar pratos com nome, imagem, categoria, descrição, ingredientes e preço.
   - Editar e excluir pratos já cadastrados.
   - Upload de imagens para os pratos.

3. **Usuário**:
   - Visualizar o cardápio completo.
   - Pesquisar pratos pelo nome ou pelos ingredientes.
   - Visualizar detalhes de um prato específico.
   - Favoritar pratos para facilitar busca.

4. **Responsividade**:
   - A aplicação se adapta a dispositivos móveis e desktops.

5. **Animações**:
   - Transições suaves entre páginas e elementos.

---

## Contato

Para mais informações, entre em contato:

- **Nome:** Guilherme Viana Batista
- **GitHub:** [https://github.com/guiogigo](#)
- **LinkedIn:** [https://www.linkedin.com/in/guilhermebatistadev/](#)