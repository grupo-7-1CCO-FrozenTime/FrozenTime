CREATE DATABASE FrozenTime;
USE FrozenTime;

CREATE TABLE Clientes(
	idLogin INT PRIMARY KEY AUTO_INCREMENT,
	emailCliente VARCHAR(50),
	senhaCliente VARCHAR(20)
);

INSERT INTO Clientes (emailcliente, senhaCliente) VALUES				 
('anderson@pfizer.com', '024463401$'),
('angelica@johnson.com', '$2243105@6'),
('contato@biontech.com', '0#%2084793'),
('bruna@biontech.com', '560$1044%1'),
('contato@butantan.com', '28##2964');

SELECT * FROM Clientes;


CREATE TABLE Empresas (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nomeEmpresa VARCHAR(30),
cnpjEmpresa CHAR(14),
cidade VARCHAR(30),
rua VARCHAR(40),
bairro VARCHAR(45),
numero INT,
complemento VARCHAR(20)
);

INSERT INTO Empresas VALUES 
(null, "Pfizer", "83920374619304", "São Paulo", "Alexandre DUmas", 1860, "Prédio"),
(null, "Butantã", "94738502847294", "São Paulo", "Vital Brasil", 1500, "Prédio"),
(null, "Dismed", "38492840286323", "São Paulo", "Avenida Moça Bonita", 559, "Prédio"),
(null, "J&J", "7483975836599", "São Paulo", "Av. Pres. Juscelino Kubitschek", 2041, "Prédio");

SELECT * FROM Empresas;


CREATE TABLE Funcionarios (
idFuncionario INT,
nomeFuncionario VARCHAR(50),
emailColaborador VARCHAR(50),
whatsapp CHAR(13),
gestor INT,
fkEmpresa INT,
fkCliente INT,
FOREIGN KEY (fkEmpresa) REFERENCES Empresas(idEmpresa),
FOREIGN KEY (fkCliente) REFERENCES CLientes(idClientes)
);

INSERT INTO Funcionarios (nomeFuncionario, emailColaborador, whatsapp, gestor, fkEmpresa, fkCliente) VALUES
();

SELECT * FROM Funcionarios JOIN Empresas JOIN Clientes;


CREATE TABLE Produtos(
	idProduto INT PRIMARY KEY AUTO_INCREMENT,
	nomeProduto VARCHAR(50),
    categoriaProduto VARCHAR(50)
);


CREATE TABLE ProdutosEmpresa (



INSERT INTO Produtos (nomeProduto, categoriaProduto) VALUES 
('Espironolactona', 'Comprimido'),
('Ocitocina', 'infusão intravenosa'),
('Insulina NPH', 'Injetável ');

SELECT * FROM Produtos;


CREATE TABLE Rotas(
	idRotas INT PRIMARY KEY AUTO_INCREMENT,
	localPartida VARCHAR(150),
	localDestino VARCHAR(150),
	dtSaida DATETIME,
	dtChegada DATETIME
);

INSERT INTO Rotas(localPartida, localDestino, dtSaida, dtChegada) 
values ('Rua Alexandre Dunas, 1860- Santo Amaro, São Paulo- SP, 04717-904', 'Praça Canáririas, 322- Vila Formosa, São Paulo-SP, 03359-120', '2017-09-08 08:30:05', '2017-09-08 09:30:05'),
       ('Av.Pres. Juscelino Kubitscheck, 2041- Vila Nova Conceição, São Paulo-SP, 04543-011', 'Av.Paulista, 2125- Bela Vista, São paulo-SP, 01311-000', '2023-03-10 10:00:40', '2023-03-10 :30:05'),
       ('Av.Mateo Bei, 3066-Cidade São Mateus, São Paulo-SP, 03949-300', 'Av.Conselheiro Carrão, 2186- Vila Carrão, São Paulo- SP, 03402-002', '2019-04-03 09:50:30', '2019-04-03 11:30:05'),
       ('R.Martins Fontes, 166-Consolação, são Paulo-SP, 01050-000', 'Av.dos jequitibás, 446-Jabaquara, Mato Grosso do sul-MS, 04321-090', '2022-11-06 11:30:05', '2022-11-07 08:30:05'),
       ('Av,Lins de Vasconcelos, 1837- Cambuci, São Paulo-SP, 01537-001', 'R.Sete de Abril, 268-República, São Paulo-SP, 01044-000', '2021-10-20 08:00:05', '2022-10-20 09:00:35');

SELECT * FROM Rotas;





CREATE TABLE Kits(
idKit INT PRIMARY KEY AUTO_INCREMENT,
fkLote int,
foreign key (fkLote) references Lotes(idLote)
);

CREATE TABLE Sensores(
	fkKit INT,
	idSensor INT,
    PRIMARY KEY ( fkKit, idSensor),
	temperatura INT, 
    registro DATETIME,
    FOREIGN KEY (fkKit) REFERENCES Kit(idKit)
);
INSERT INTO Sensores VALUES 
							(null, null, "ideal", null),
							(null, null, "alerta", null),
							(null, null, "critico", null),
							(null, null, "ideal", null);
                            
SELECT * FROM Sensores;


CREATE TABLE Lotes(
	idLote INT PRIMARY KEY AUTO_INCREMENT,
	qtdProdutos INT,
	dimensao DECIMAL(4,2),
	fkProduto INT,
    fkRota INT,
	fkAutomovel INT,
	FOREIGN KEY (fkProduto) REFERENCES Produtos(idProduto),
    	FOREIGN KEY (fkRota) REFERENCES Rotas(idRota),
    FOREIGN KEY (fkAutomovel) REFERENCES Automoveis(idAutomovel)
);

INSERT INTO Lotes VALUES  
(null, '200', '5cm', null, null),
(null, '150', '40cm', null, null),
(null, '300', '1m', null, null),
(null, '100', '1,5m', null, null),
(null, '50', '55cm', null, null);
														
SELECT * FROM Lotes;
