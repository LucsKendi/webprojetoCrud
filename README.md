
# Sistema de Gerenciamento de Atividades com Autenticação

Este é um projeto web completo (frontend + backend) criado com TypeScript e PostgreSQL. A aplicação permite que usuários autenticados gerenciem atividades pessoais, com funcionalidades de cadastro, login, e controle de acesso.

## 🛠️ Requisitos

Certifique-se de ter os seguintes softwares instalados antes de começar:

- Node.js (v16 ou superior)
- PostgreSQL
- Um gerenciador de banco de dados como pgAdmin ou DBeaver

## 🚀 Configuração Inicial

### 1. Clonar o Projeto

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd nome-do-projeto
```

### 2. Banco de Dados

1. Crie um banco de dados novo (ex: `atividade_app_db`).
2. Execute o script SQL abaixo para estruturar as tabelas:

```sql
-- Tabela de Usuários
CREATE TABLE usuarios (
  "Username" VARCHAR(30) PRIMARY KEY NOT NULL,
  "Password" VARCHAR(128) NOT NULL,
  "Nome" VARCHAR(120) NOT NULL,
  "Tipo" CHAR(1) NOT NULL,
  "Status" CHAR(1) NOT NULL DEFAULT 'A',
  "Quant_Acesso" INT DEFAULT 0,
  "Failed_Login_Attempts" INT DEFAULT 0
);

-- Tabela de Atividades
CREATE TABLE atividades (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  detalhes TEXT,
  usuario_dono VARCHAR(30) NOT NULL,
  FOREIGN KEY (usuario_dono) REFERENCES usuarios("Username") ON DELETE CASCADE
);
```

### 3. Backend

1. Acesse a pasta do backend:

```bash
cd backend
```

2. Edite o arquivo `.env` com os dados do seu PostgreSQL:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=atividade_app_db

JWT_SECRET=segredo_muito_secreto
JWT_RESET_SECRET=outro_segredo_para_reset
```

3. Instale as dependências:

```bash
npm install
```

### 4. Frontend

1. Em um terminal separado:

```bash
cd frontend
npm install
```

## ▶️ Executando a Aplicação

Você precisará de dois terminais rodando:

- **Terminal 1 (Backend):**

```bash
cd backend
npm run dev
```

- **Terminal 2 (Frontend):**

```bash
cd frontend
npm start
```

- O frontend estará acessível em `http://localhost:3000`
- O backend em `http://localhost:3333`

## 👤 Criando o Usuário Inicial

Para acessar a plataforma, crie um usuário administrador manualmente:

### Passo 1: Gere o hash da senha

```bash
cd backend
node hash-password.js
```

Copie o hash gerado.

### Passo 2: Insira no banco

```sql
INSERT INTO usuarios ("Username", "Password", "Nome", "Tipo", "Status")
VALUES ('admin', '<SEU_HASH_AQUI>', 'Administrador', '0', 'A');
```

Agora é só logar com o usuário `admin` e a senha original.

---

### 📚 Sobre o Projeto

O sistema foi desenvolvido com foco em aprendizado prático de arquitetura web, segurança de autenticação, e organização de tarefas pessoais via CRUD. Interface leve e responsiva, com design personalizado.
