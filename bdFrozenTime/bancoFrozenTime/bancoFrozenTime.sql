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

INSERT INTO Empresa VALUES (null, "Pfizer", "83920374619304", "São Paulo", "Alexandre DUmas", 1860, "Prédio"),
						   (null, "Butantã", "94738502847294", "São Paulo", "Vital Brasil", 1500, "Prédio"),
						   (null, "Dismed", "38492840286323", "São Paulo", "Avenida Moça Bonita", 559, "Prédio"),
						   (null, "J&J", "7483975836599", "São Paulo", "Av. Pres. Juscelino Kubitschek", 2041, "Prédio");

CREATE TABLE Representante (
idRepresentante INT PRIMARY KEY,
nomeRepresentante VARCHAR(50),
emailRepresentante VARCHAR(50),
whatsappRepresentante CHAR(13),
fkEmpresa INT,
FOREIGN KEY(fkEmpresa) REFERENCES Empresa(idEmpresa)
);

INSERT INTO Representante VALUES (null, "Marcelo Rossi", "marcelo.rossi@gmail.com", "986850073", 1),
								 (null, "Teresa Aragão", "aragaoteresa@gmail.com", "982305138", 2),
								 (null, "Miguel Freitas", "miguelfreitas@gmail.com", "984920002", 3),
								 (null, "Tiago Mendes", "tiagomendes@gmail.com", "984938002", 4);

CREATE TABLE Login (
idLogin INT PRIMARY KEY,
emailCliente VARCHAR(50),
senhaCliente VARCHAR(50),
fkRepresentante INT, 
FOREIGN KEY(fkRepresentante) REFERENCES Representante(idRepresentante),
fkEmpresa INT, 
FOREIGN KEY(fkEmpresa) REFERENCES Empresa(idEmpresa)
);

INSERT INTO Login VALUES (null, 'anderson@pfizer.com', '024463401$', 1, 1),
						 (null, 'angelica@johnson.com', '$2243105@6', 4, 4),
						 (null, 'contato@biontech.com', '0#%2084793', 3, 3),
						 (null, 'contato@butantan.com', '28##2964', 2, 2);

CREATE TABLE Fornecedores (
idFornecedor INT PRIMARY KEY,
nomeFornecedor VARCHAR(50),
cnpjFornecedor CHAR(14),
emailFornecedor VARCHAR(50),
fkEmpresa INT,
FOREIGN KEY(fkEmpresa) REFERENCES Empresa(idEmpresa)
);
INSERT INTO Fornecedores VALUES  (null, 'Pfizer', '33927657000158', 'contato@pfizer.com', 1),
								 (null, 'Johnson & Johnson', '60906805000120', 'J&J@johnson.com', 4),
								 (null, 'Biontech', '24180673000139', 'contato@biontech.com', null),
								 (null, 'Instituto Butantan', '53833162000177', 'contato@butantan.com', 2),
								 (null, 'Bristol Myers Squibb', '51207664000167', 'BristolMS@gmail,com', null);

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
INSERT INTO Rotas VALUES (null, '2ºC', '8ºC', 'Rua Alexandre Dunas, 1860- Santo Amaro, São Paulo- SP, 04717-904', 'Praça Canáririas, 322- Vila Formosa, São Paulo-SP, 03359-120', '2017-09-08 08:30:05', '2017-09-08 09:30:05', '27Km'),
						 (null, '15ºC', '30ºC', 'Av.Pres. Juscelino Kubitscheck, 2041- Vila Nova Conceição, São Paulo-SP, 04543-011', 'Av.Paulista, 2125- Bela Vista, São paulo-SP, 01311-000', '2023-03-10 10:00:40', '2023-03-10 :30:05', '6Km'),
						 (null, '2ºC', '8ºC', 'Av.Mateo Bei, 3066-Cidade São Mateus, São Paulo-SP, 03949-300', 'Av.Conselheiro Carrão, 2186- Vila Carrão, São Paulo- SP, 03402-002', '2019-04-03 09:50:30', '2019-04-03 11:30:05', '40Km'),
						 (null, '2ºC', '8ºC', 'R.Martins Fontes, 166-Consolação, são Paulo-SP, 01050-000', 'Av.dos jequitibás, 446-Jabaquara, Mato Grosso do sul-MS, 04321-090', '2022-11-06 11:30:05', '2022-11-07 08:30:05', '1.010,3 Km'),
						 (null, '15ºC', '30ºC', 'Av,Lins de Vasconcelos, 1837- Cambuci, São Paulo-SP, 01537-001', 'R.Sete de Abril, 268-República, São Paulo-SP, 01044-000', '2021-10-20 08:00:05', '2022-10-20 09:00:35', '27Km');

CREATE TABLE Automoveis (
idTransporte INT PRIMARY KEY,
modelo VARCHAR(25),
placa CHAR(7),
cor VARCHAR(25),
fkRota INT,
FOREIGN KEY(fkRota) REFERENCES Rotas(idRota)
);
INSERT INTO Automoveis VALUES (null, 'Bitruck com baú Frigorifico', 'MINI-6620', 'Branca', 1),
							  (null, 'VUC com baú Frigorifico', 'MMC-1134', 'Cinza', 2),
					          (null, 'Toco com baú Frigorifico', 'NEV-7762', 'Branca', 3),
							  (null, 'Bitruck com baú Frigorifico', 'MXR-9421', 'Branca', 4),
							  (null, 'Toco com baú Frigorifico', 'MOE-3389', 'Branca', 5);

CREATE TABLE Kit (
idKit INT PRIMARY KEY
);
INSERT INTO Kit VALUES (NULL),
					   (NULL),
					   (NULL),
					   (NULL),
					   (NULL),
					   (NULL),
					   (NULL),
					   (NULL);

CREATE TABLE Sensor (
fkKit INT,
idSensor INT,
PRIMARY KEY(fkKit, idSensor),
statusSensor VARCHAR(20),
fkTransporte INT,
FOREIGN KEY(fkTransporte) REFERENCES Automoveis(idTransporte)
);
INSERT INTO Sensor VALUES (1, 1, "ideal", 2),
						  (1, 2, "alerta", 1),
						  (1, 3, "critico", 3),
						  (1, 4, "ideal", 4),
						  (2, 1, "ideal", 4),
						  (3, 1, "ideal", 1),
						  (3, 2, "ideal", 5),
						  (3, 3, "ideal", 1),
						  (4, 1, "ideal", 2),
						  (4, 2, "ideal", 3),
						  (5, 1, "ideal", 2);

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

-- precisa mudar esses dois últimos!!!!!
INSERT INTO Produto VALUES (null,'Espironolactona', 'Comprimido', '30ºC', '15ºC', 'Frasco 60mL.Diurético e anti-hipertensivo', '2023-03-10 13:16:20', '2025-03-10 08:30:05', '20', 2),
						   (null,'Ocitocina', 'infusão intravenosa', '30ºC', '15ºC', 'Ampola 1mL', '2022-10-15 09:30:40', '2024-10-15 08:30:05', '30', 3),
						   (null,'Insulina NPH', 'Injetável ', '8ºC', '2ºC', 'Frasco 10mL', '2023-11-21 13:50:00', '2025-11-21 13:40:00', '72', 5),
						   (null,'Insulina NPH', 'Injetável ', '8ºC', '2ºC', 'Frasco 10mL', '2023-11-21 13:50:00', '2025-11-21 13:40:00', '72', 5),
						   (null,'Insulina NPH', 'Injetável ', '8ºC', '2ºC', 'Frasco 10mL', '2023-11-21 13:50:00', '2025-11-21 13:40:00', '72', 5);

CREATE TABLE Lotes (
idLotes INT PRIMARY KEY,
qtdProdutos INT,
dimensao DECIMAL(4,2),
fkTransporte INT,
FOREIGN KEY(fkTransporte) REFERENCES Automoveis(idTransporte),
fkProduto INT,
FOREIGN KEY(fkProduto) REFERENCES Produto(idProduto)
);

INSERT INTO Lotes VALUES  (null, '200', '5cm', 1, 1),
						  (null, '150', '40cm', 2, 3),
						  (null, '300', '1m', 3, 4),
						  (null, '100', '1,5m', 4, 2),
						  (null, '50', '55cm', 5, 5);



