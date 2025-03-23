# 🚀 Intranet

## 📌 Sobre o Projeto
A **Intranet** é um sistema interno desenvolvido para empresas, permitindo a autenticação de usuários via **Active Directory (AD)** e proporcionando um ambiente seguro para consulta de e-mails e ramais.

## 🔒 Funcionalidades
- Login integrado ao **Active Directory**
- Autenticação via **JWT** (persistência entre dispositivos)
- Proteção de rotas para impedir acesso sem login
- Interface responsiva usando **HTML, CSS, JavaScript e Bootstrap**
- Armazenamento seguro de tokens no **LocalStorage**

## 🛠 Tecnologias Utilizadas
- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Backend:** Node.js, Express.js
- **Autenticação:** JWT
- **Banco de Dados:** JSON (simulação de usuários)

## 📂 Estrutura do Projeto
```
/ frontend
  ├── index.html  # Página de login
  ├── dashboard.html  # Painel principal
  ├── styles.css  # Estilos da aplicação
  ├── script.js  # Lógica de login e autenticação

/ backend
  ├── server.js  # Servidor Node.js
  ├── usuarios.json  # Base de usuários
  ├── .env  # Configuração da chave secreta JWT
```

## 🚀 Como Executar o Projeto
### 🔹 1. Clonar o Repositório
```bash
git clone https://github.com/sillviojr/Intranet.git
cd Intranet
```

### 🔹 2. Configurar o Backend
```bash
cd backend
npm install  # Instalar dependências
cp .env.example .env  # Criar arquivo de configuração
node server.js  # Iniciar o servidor
```
O servidor rodará em **http://localhost:3000**

### 🔹 3. Executar o Frontend
Basta abrir o arquivo `index.html` no navegador ou rodar um servidor local:
```bash
cd frontend
npx http-server  # Alternativa rápida para rodar localmente
```

## 🛡 Segurança
- O sistema utiliza **JWT** para autenticação, garantindo segurança e persistência do login.
- As rotas protegidas exigem um token válido para acesso.

## 📜 Licença
Este projeto está licenciado sob a **MIT License**. Sinta-se à vontade para contribuir! 😃

---
**Desenvolvido por Silvio Júnior** 🚀

