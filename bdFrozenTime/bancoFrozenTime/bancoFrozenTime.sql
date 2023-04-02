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
FROM tbLotes;CREATE DATABASE bancoFrozenTime;
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
CREATE TABLE tbEnderecoEmpresa(
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
CEP CHAR(9),
rua VARCHAR(40),
bairro VARCHAR(30),
cidade VARCHAR(30),
numero INT,
complemento VARCHAR(10)
);

CREATE TABLE tbEmpresa(
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeEmpresa VARCHAR(50),
    cnpjEmpresa VARCHAR(50),
    descricaoEmpresa VARCHAR(50),
    telefoneEmpresa int,
    emailEmpresa VARCHAR(50),
    whatsappEmpresa int,
    fkEndereco int,
    FOREIGN KEY (fkEndereco) REFERENCES tbEnderecoEmpresa(idEndereco)
    );
    
CREATE TABLE tbColaborador(
	idColaborador INT PRIMARY KEY AUTO_INCREMENT,
	nomeColaborador VARCHAR(50),
	fkEmpresa INT,
	cargoColaborador VARCHAR(50),
	telefoneColaborador VARCHAR(20),
	emailColaborador VARCHAR(50),
    FOREIGN KEY (fkEmpresa) REFERENCES tbEmpresa(idEmpresa)
);
SELECT *
FROM tbColaborador;
CREATE TABLE tbDistribuidoras(
	idDistribuidora INT PRIMARY KEY AUTO_INCREMENT,
	nomeDistribuidora VARCHAR(50),
	cnpjDistribuidora CHAR(14),
	emailDistribuidora VARCHAR(50)
);
CREATE TABLE tbMotorista(
	idMotorista INT PRIMARY KEY AUTO_INCREMENT,
	nomeMotorista VARCHAR(50),
	CNH CHAR(10),
	fkDistribuidora INT,
    FOREIGN KEY (fkDistribuidora) REFERENCES tbDistribuidoras(idDistribuidora)
);
SELECT *
FROM tbMotorista;
CREATE TABLE tbFornecedores(
	idFornecedor INT PRIMARY KEY AUTO_INCREMENT,
	nomeFornecedor VARCHAR(50),
	cnpjFornecedor CHAR(14),
	emailFornecedor VARCHAR(50)
);
SELECT *
FROM tbMotorista;

SELECT *
FROM tbDistribuidoras;
CREATE TABLE tbAutomoveis(
	idTransporte INT PRIMARY KEY AUTO_INCREMENT,
	modelo VARCHAR(25),
	placa CHAR(7),
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
	distancia INT
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
	fkTransporte INT,
	statusSensor VARCHAR(20),
    FOREIGN KEY (fkTransporte) REFERENCES tbAutomoveis(idTransporte)
);
SELECT *
FROM tbSensor;
CREATE TABLE tbLotes(
	idLote INT PRIMARY KEY AUTO_INCREMENT,
	qtdeProdutos INT,
	dimensao DECIMAL,
	fkTransporte INT,
	fkProduto INT,
    FOREIGN KEY (fkTransporte) REFERENCES tbAutomoveis(idTransporte),
    FOREIGN KEY (fkProduto) REFERENCES tbProduto(idProduto)
);
SELECT *
FROM tbLotes;