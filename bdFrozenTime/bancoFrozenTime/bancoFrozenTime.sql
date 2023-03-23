CREATE DATABASE bancoFrozenTime;
USE bancoFrozenTime;
CREATE TABLE tbProduto(
	idProduto INT PRIMARY KEY AUTO_INCREMENT,
	nomeProduto VARCHAR(50),
	categoriaProduto VARCHAR(50),
	tempMaxProduto VARCHAR(50),
	tempMinProduto VARCHAR(50),
	fabricanteProduto VARCHAR(50),
	descricaoProduto VARCHAR(50),
	dtFabricacao DATETIME,
	dtVencimento DATETIME,
	valorProduto DECIMAL
);
SELECT *
FROM tbProduto;
CREATE TABLE tbColaborador(
	idColaborador INT PRIMARY KEY AUTO_INCREMENT,
	nomeColaborador VARCHAR(50),
	fkEmpresa INT,
	cargoColaborador VARCHAR(50),
	telefoneColaborador VARCHAR(20),
	emailColaborador VARCHAR(50)
);
SELECT *
FROM tbColaborador;
CREATE TABLE tbMotorista(
	idMotorista INT PRIMARY KEY AUTO_INCREMENT,
	nomeMotorista VARCHAR(50),
	cnh VARCHAR(12),
	fkDistrubuidora INT
);
SELECT *
FROM tbMotorista;
CREATE TABLE tbFornecedores(
	idFornecedor INT PRIMARY KEY AUTO_INCREMENT,
	nomeFornecedor VARCHAR(50),
	cnpjFornecedor VARCHAR(25),
	emailFornecedor VARCHAR(50)
);
SELECT *
FROM tbMotorista;
CREATE TABLE tbDistribuidoras(
	idDistribuidor INT PRIMARY KEY AUTO_INCREMENT,
	nomeDistribuidoras VARCHAR(50),
	cnpjDistribuidora VARCHAR(25),
	emailDistribuidor VARCHAR(50)
);
SELECT *
FROM tbDistribuidoras;
CREATE TABLE tbAutomoveis(
	idTransporte INT PRIMARY KEY AUTO_INCREMENT,
	modelo VARCHAR(25),
	placa VARCHAR(25),
	cor VARCHAR(25)
);
SELECT *
FROM tbAutomoveis;
CREATE TABLE tbRotas(
	idRotas INT PRIMARY KEY AUTO_INCREMENT,
	tempMin VARCHAR(50),
	tempMax VARCHAR(50),
	localPartida VARCHAR(50),
	localDestino VARCHAR(50),
	dtSaida DATETIME,
	dtChegada DATETIME,
	distancia VARCHAR(50)
);
SELECT *
FROM tbRotas;
CREATE TABLE tbLogin(
	idLogin INT PRIMARY KEY AUTO_INCREMENT,
	emailCliente VARCHAR(50),
	senhaCliente VARCHAR(20)
);
SELECT *
FROM tbLogin;
CREATE TABLE tbSensor(
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
	FKTransporte VARCHAR(50),
	statusSensor VARCHAR(20)
);
SELECT *
FROM tbSensor;
CREATE TABLE tbLotes(
	idLote INT PRIMARY KEY AUTO_INCREMENT,
	qtdeProdutos INT,
	dimensao DECIMAL,
	FKTransporte INT,
	FKProduto INT
);
SELECT *
FROM tbLotes;