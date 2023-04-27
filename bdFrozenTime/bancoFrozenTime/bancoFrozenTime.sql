CREATE DATABASE FrozenTime;
USE FrozenTime;


CREATE TABLE Empresa (
idEmpresa INT PRIMARY KEY,
nomeEmpresa VARCHAR(30),
cnpjEmpresa CHAR(14),
cidade VARCHAR(30),
rua VARCHAR(40),
numero INT,
complemento VARCHAR(20)
);

CREATE TABLE Representante (
idRepresentante INT PRIMARY KEY,
nomeRepresentante VARCHAR(50),
emailRepresentante VARCHAR(50),
whatsappRepresentante CHAR(13),
fkEmpresa INT,
FOREIGN KEY(fkEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Login (
idLogin INT PRIMARY KEY,
emailCliente VARCHAR(50),
senhaCliente VARCHAR(50),
fkRepresentante INT, 
FOREIGN KEY(fkRepresentante) REFERENCES Representante(idRepresentante),
fkEmpresa INT, 
FOREIGN KEY(fkEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Fornecedores (
idFornecedor INT PRIMARY KEY,
nomeFornecedor VARCHAR(50),
cnpjFornecedor CHAR(14),
emailFornecedor VARCHAR(50),
fkEmpresa INT,
FOREIGN KEY(fkEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Rotas (
idRota INT PRIMARY KEY,
tempMin DECIMAL(4,2),
tempMax DECIMAL(4,2),
localPartida VARCHAR(50),
localDestino VARCHAR(50),
dtSaida DATETIME,
dtChegada DATETIME,
distancia DECIMAL(5,2)
);

CREATE TABLE Automoveis (
idTransporte INT PRIMARY KEY,
modelo VARCHAR(25),
placa CHAR(7),
cor VARCHAR(25),
fkRota INT,
FOREIGN KEY(fkRota) REFERENCES Rotas(idRota),
fkDistribuidora INT,
FOREIGN KEY(fkDistribuidora) REFERENCES Distribuidoras(idDistribuidora)
);

CREATE TABLE Kit (
idKit INT PRIMARY KEY
);

CREATE TABLE Sensor (
fkKit INT,
idSensor INT,
PRIMARY KEY(fkKit, idSensor),
statusSensor VARCHAR(20),
fkTransporte INT,
FOREIGN KEY(fkTransporte) REFERENCES Automoveis(idTransporte)
);

CREATE TABLE Produto (
idProduto INT PRIMARY KEY,
nomeProduto VARCHAR(50),
categoriaProduto VARCHAR(50),
tempMinProduto DECIMAL(4,2),
tempMaxProduto DECIMAL(4,2),
fabricanteProduto CHAR(50),
descricaoProduto VARCHAR(50),
dtFabricacao DATE,
dtVencimento DATE,
valorProduto DECIMAL(5,2),
fkFornecedor INT,
FOREIGN KEY(fkFornecedor) REFERENCES Fornecedores(idFornecedor)
);

CREATE TABLE Lotes (
idLotes INT PRIMARY KEY,
qtdProdutos INT,
dimensao DECIMAL(4,2),
fkTransporte INT,
FOREIGN KEY(fkTransporte) REFERENCES Automoveis(idTransporte),
fkProduto INT,
FOREIGN KEY(fkProduto) REFERENCES Produto(idProduto)
);



