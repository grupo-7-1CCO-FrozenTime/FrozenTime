CREATE DATABASE FrozenTime;
USE FrozenTime;
CREATE TABLE Login(
	idLogin INT PRIMARY KEY AUTO_INCREMENT,
	emailFuncionario VARCHAR(50),
	senhaFuncionario VARCHAR(20)
);

INSERT INTO Login VALUES				 
(null, 'anderson@pfizer.com', '024463401$'),
(null, 'angelica@johnson.com', '$2243105@6'),
(null, 'contato@biontech.com', '0#%2084793'),
(null, 'bruna@biontech.com', '560$1044%1'),
(null, 'contato@butantan.com', '28##2964');

SELECT * FROM Login;


CREATE TABLE Empresas (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nomeEmpresa VARCHAR(30),
cnpjEmpresa CHAR(18),
cidade VARCHAR(30),
rua VARCHAR(40),
bairro VARCHAR(45),
numero INT,
complemento VARCHAR(20)
);


INSERT INTO Empresas VALUES 
(null, "Pfizer", "83920374619304", "São Paulo", "Alexandre Dumas", 'São Paulo', 1860, "Prédio"),
(null, "Butantã", "94738502847294", "São Paulo", "Vital Brasil", 'São Paulo', 1500, "Prédio"),
(null, "Dismed", "38492840286323", "São Paulo", "Avenida Moça Bonita", 'São Paulo', 559, "Prédio"),
(null, "J&J", "7483975836599", "São Paulo", "Av. Pres. Juscelino Kubitschek", 'São Paulo', 2041, "Prédio");

SELECT * FROM Empresas;

CREATE TABLE Funcionarios (
idFuncionario INT,
nomeFuncionario VARCHAR(50),
emailFuncionario VARCHAR(50),
whatsapp CHAR(13),
gestor INT,
fkEmpresa INT,
fkLogin INT,
FOREIGN KEY (fkEmpresa) REFERENCES Empresas(idEmpresa),
FOREIGN KEY (fkLogin) REFERENCES Login(idLogin)
);

INSERT INTO Funcionarios VALUES
(null, 'Gustavo', 'gustavodessunte@gmail.com', '(11)942961501', 1, 1, 1);


CREATE TABLE Produtos(
	idProduto INT PRIMARY KEY AUTO_INCREMENT,
	nomeProduto VARCHAR(50),
    categoriaProduto VARCHAR(50)
);

INSERT INTO Produtos VALUES 
(null, 'Espironolactona', 'Comprimido'),
(null, 'Ocitocina', 'infusão intravenosa'),
(null, 'Insulina NPH', 'Injetável ');

SELECT * FROM Produtos;

CREATE TABLE ProdutosEmpresa (
fkProduto INT,
FOREIGN KEY(fkProduto) REFERENCES Produtos(idProduto),
fkEmpresa INT,
FOREIGN KEY(fkEmpresa) REFERENCES Empresas(idEmpresa),
PRIMARY KEY (fkProduto, fkEmpresa)
);
INSERT INTO ProdutosEmpresa VALUES (1, 1),
								  (1, 2),
                                  (2, 1),
                                  (2, 2),
                                  (2, 3);





CREATE TABLE Rotas(
	idRotas INT PRIMARY KEY AUTO_INCREMENT,
	localPartida VARCHAR(150),
	localDestino VARCHAR(150),
	dtSaida DATETIME,
	dtChegada DATETIME
);

INSERT INTO Rotas
values (null, 'Rua Alexandre Dunas, 1860- Santo Amaro, São Paulo- SP, 04717-904', 'Praça Canáririas, 322- Vila Formosa, São Paulo-SP, 03359-120', '2017-09-08 08:30:05', '2017-09-08 09:30:05'),
       (null, 'Av.Pres. Juscelino Kubitscheck, 2041- Vila Nova Conceição, São Paulo-SP, 04543-011', 'Av.Paulista, 2125- Bela Vista, São paulo-SP, 01311-000', '2023-03-10 10:00:40', '2023-03-10 12:30:05'),
       (null, 'Av.Mateo Bei, 3066-Cidade São Mateus, São Paulo-SP, 03949-300', 'Av.Conselheiro Carrão, 2186- Vila Carrão, São Paulo- SP, 03402-002', '2019-04-03 09:50:30', '2019-04-03 11:30:05'),
       (null, 'R.Martins Fontes, 166-Consolação, são Paulo-SP, 01050-000', 'Av.dos jequitibás, 446-Jabaquara, Mato Grosso do sul-MS, 04321-090', '2022-11-06 11:30:05', '2022-11-07 08:30:05'),
       (null, 'Av,Lins de Vasconcelos, 1837- Cambuci, São Paulo-SP, 01537-001', 'R.Sete de Abril, 268-República, São Paulo-SP, 01044-000', '2021-10-20 08:00:05', '2022-10-20 09:00:35');

SELECT * FROM Rotas;

CREATE TABLE Lotes(
	idLote INT PRIMARY KEY AUTO_INCREMENT,
	fkProduto INT,
    fkRota INT,
	FOREIGN KEY (fkProduto) REFERENCES Produtos(idProduto),
	FOREIGN KEY (fkRota) REFERENCES Rotas(idRotas)
);

INSERT INTO Lotes VALUES  
(null, 3, 5),
(null, 2, 3),
(null, 3, 1),
(null, 1, 2),
(null, 3, 4);
														
SELECT * FROM Lotes;

CREATE TABLE Kits(
idKit INT PRIMARY KEY AUTO_INCREMENT,
fkLote INT,
nomeKit VARCHAR(45),
FOREIGN KEY (fkLote) REFERENCES Lotes(idLote)
);

INSERT INTO Kits VALUES
(null, 1, 'Alfa'),
(null, 2, 'Ômega'),
(null, 3, 'Beta'),
(null, 4, 'Charlie'),
(null, 5, 'Bravo');

create table Refrigeradores (
idRefrigerador INT PRIMARY KEY AUTO_INCREMENT,
cidade VARCHAR(40),
rua VARCHAR(40),
cep CHAR(9),
bairro VARCHAR(30),
numero INT,
nomeFarmacia VARCHAR(30),
fkEmpresa INT,
fkKit INT,
FOREIGN KEY (fkKit) REFERENCES Kits(idKit),
FOREIGN KEY (fkEmpresa) REFERENCES Empresas(idEmpresa) 
);
INSERT INTO Refrigeradores VALUES (null, 'São Paulo', 'Alagoas', '01242-001', 'Higienópolis', '10', 'Dograria São Paulo', 1, 2),
								  (null, 'São Paulo', 'Sabará', '1239011', 'Higienópolis', '390', 'Dograsil', 2, 2);
CREATE TABLE Sensores(
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
    fkKit INT,
    FOREIGN KEY (fkKit) REFERENCES Kits(idKit)
);
INSERT INTO Sensores VALUES 
							(1, 1),
							(2, 2),
							(3, 3),
							(4, 4);
SELECT * FROM Sensores;

CREATE TABLE Registros(
idRegistro INT PRIMARY KEY AUTO_INCREMENT,
temperatura INT,
horaRegistro INT,
minutoRegistro INT,
fkSensor INT,
fkKit INT,
FOREIGN KEY (fkSensor) REFERENCES Sensores(idSensor),
FOREIGN KEY (fkKit) REFERENCES Kits(idKit)
);

SHOW TABLES;

CREATE TABLE HistoricoAvisos(
idAvisos INT AUTO_INCREMENT,
fkLote INT,
fkKit INT,
FOREIGN KEY (fkLote) REFERENCES Lotes(idLote),
FOREIGN KEY (fkKit) REFERENCES Kits(idKit),
PRIMARY KEY (idAvisos, fkLote, fkKit)
);