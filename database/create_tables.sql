DROP TABLE IF EXISTS Tarefas;
DROP TABLE IF EXISTS Usuarios;

CREATE TABLE Usuarios (
    Username VARCHAR(30) PRIMARY KEY NOT NULL,
    Password VARCHAR(128) NOT NULL,
    Nome VARCHAR(120) NOT NULL,
    Tipo CHAR(1) NOT NULL,
    Status CHAR(1) NOT NULL DEFAULT 'A',
    Quant_Acesso INT DEFAULT 0,
    Failed_Login_Attempts INT DEFAULT 0
);

CREATE TABLE Atividades (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    detalhes TEXT,
    usuario_dono VARCHAR(30) NOT NULL,
    FOREIGN KEY (usuario_dono) REFERENCES Usuarios(Username) ON DELETE CASCADE
);