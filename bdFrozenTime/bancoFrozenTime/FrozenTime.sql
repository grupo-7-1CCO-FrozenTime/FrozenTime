CREATE DATABASE FrozenTime;
USE FrozenTime;

CREATE TABLE Empresa (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
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
idRepresentante INT PRIMARY KEY AUTO_INCREMENT,
nomeRepresentante VARCHAR(50),
emailRepresentante VARCHAR(50),
whatsappRepresentante CHAR(13),
fkEmpresa INT,
FOREIGN KEY(fkEmpresa) REFERENCES Empresa(idEmpresa)
);
INSERT INTO Representante VALUES (null, "Marcelo Rossi", "marcelo.rossi@gmail.com", "986850073", null),
								 (null, "Teresa Aragão", "aragaoteresa@gmail.com", "982305138", null),
								 (null, "Miguel Freitas", "miguelfreitas@gmail.com", "984920002", null);


CREATE TABLE Produto(
	idProduto INT PRIMARY KEY AUTO_INCREMENT,
	nomeProduto VARCHAR(50),
	categoriaProduto VARCHAR(50),
	tempMaxProduto VARCHAR(50),
	tempMinProduto VARCHAR(50),
	fabricanteProduto VARCHAR(50),
	descricaoProduto VARCHAR(50),
	dtFabricacao DATETIME DEFAULT current_timestamp,
	dtVencimento DATETIME,
	valorProduto DECIMAL,
    fkFornecedor INT,
    FOREIGN KEY (fkFornecedor) REFERENCES fornecedor(idFornecedor)
);



INSERT INTO Produto(idProduto, nomeProduto, categoriaProduto, tempMaxProduto, tempMinProduto, descricaoProduto, dtFabricacao, dtVencimento, valorProduto, fkForncedor) 
VALUES (null,'Espironolactona', 'Comprimido', '30ºC', '15ºC', 'Frasco 60mL.Diurético e anti-hipertensivo', '2023-03-10 13:16:20', '2025-03-10 08:30:05', '20', null),
(null,'Ocitocina', 'infusão intravenosa', '30ºC', '15ºC', 'Ampola 1mL', '2022-10-15 09:30:40', '2024-10-15 08:30:05', '30', null),
(null,'Insulina NPH', 'Injetável ', '8ºC', '2ºC', 'Frasco 10mL', '2023-11-21 13:50:00', '2025-11-21 13:40:00', '72', null);

SELECT * FROM tproduto;

DELETE FROM tbProduto WHERE idproduto = 4; 

CREATE TABLE Fornecedores(
	idFornecedor INT PRIMARY KEY AUTO_INCREMENT,
	nomeFornecedor VARCHAR(50),
	cnpjFornecedor VARCHAR(25),
	emailFornecedor VARCHAR(50),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);

INSERT INTO Fornecedores(idfornecedor, nomeFornecedor, cnpjFornecedor, emailFornecedor) VALUES  (null, 'Pfizer', '33927657000158', 'contato@pfizer.com', null),
																								(null, 'Johnson & Johnson', '60906805000120', 'J&J@johnson.com', null),
                                                                                                (null, 'Biontech', '24180673000139', 'contato@biontech.com', null),
                                                                                                (null, 'Instituto Butantan', '53833162000177', 'contato@butantan.com', null),
                                                                                                (null, 'Bristol Myers Squibb', '51207664000167', 'BristolMS@gmail,com', null);




CREATE TABLE Automoveis(
	idTransporte INT PRIMARY KEY AUTO_INCREMENT,
	modelo VARCHAR(25),
	placa VARCHAR(25),
	cor VARCHAR(25),
    fkRota INT,
    FOREIGN KEY(fkRota) REFERENCES rota(idRota)
);
SELECT * FROM Automoveis;

INSERT INTO Automoveis VALUES									 (null, 'Bitruck com baú Frigorifico', 'MINI-6620', 'Branca', null),
                                                                 (null, 'VUC com baú Frigorifico', 'MMC-1134', 'Cinza', null),
                                                                 (null, 'Toco com baú Frigorifico', 'NEV-7762', 'Branca', null),
                                                                 (null, 'Bitruck com baú Frigorifico', 'MXR-9421', 'Branca', null),
                                                                 (null, 'Toco com baú Frigorifico', 'MOE-3389', 'Branca', null);

ALTER TABLE Automoveis MODIFY COLUMN modelo VARCHAR(50);

CREATE TABLE Rotas(
	idRotas INT PRIMARY KEY AUTO_INCREMENT,
	tempMin VARCHAR(50),
	tempMax VARCHAR(50),
	localPartida VARCHAR(50),
	localDestino VARCHAR(50),
	dtSaida DATETIME,
	dtChegada DATETIME,
	distancia DECIMAL(5,2)
);

INSERT INTO Rotas(idRotas, tempMin, tempMax, localPartida, localDestino, dtSaida, dtChegada, distancia) 
values (null, '2ºC', '8ºC', 'Rua Alexandre Dunas, 1860- Santo Amaro, São Paulo- SP, 04717-904', 'Praça Canáririas, 322- Vila Formosa, São Paulo-SP, 03359-120', '2017-09-08 08:30:05', '2017-09-08 09:30:05', '27Km'),
       (null, '15ºC', '30ºC', 'Av.Pres. Juscelino Kubitscheck, 2041- Vila Nova Conceição, São Paulo-SP, 04543-011', 'Av.Paulista, 2125- Bela Vista, São paulo-SP, 01311-000', '2023-03-10 10:00:40', '2023-03-10 :30:05', '6Km'),
       (null, '2ºC', '8ºC', 'Av.Mateo Bei, 3066-Cidade São Mateus, São Paulo-SP, 03949-300', 'Av.Conselheiro Carrão, 2186- Vila Carrão, São Paulo- SP, 03402-002', '2019-04-03 09:50:30', '2019-04-03 11:30:05', '40Km'),
       (null, '2ºC', '8ºC', 'R.Martins Fontes, 166-Consolação, são Paulo-SP, 01050-000', 'Av.dos jequitibás, 446-Jabaquara, Mato Grosso do sul-MS, 04321-090', '2022-11-06 11:30:05', '2022-11-07 08:30:05', '1.010,3 Km'),
       (null, '15ºC', '30ºC', 'Av,Lins de Vasconcelos, 1837- Cambuci, São Paulo-SP, 01537-001', 'R.Sete de Abril, 268-República, São Paulo-SP, 01044-000', '2021-10-20 08:00:05', '2022-10-20 09:00:35', '27Km');

ALTER TABLE Rotas MODIFY COLUMN localPartida VARCHAR(150);
ALTER TABLE Rotas MODIFY COLUMN localSiada VARCHAR(150);
       
SELECT * FROM Rotas;

CREATE TABLE Login(
	idLogin INT PRIMARY KEY AUTO_INCREMENT,
	emailCliente VARCHAR(50),
	senhaCliente VARCHAR(20),
    fkRepresentante INT,
    fkEmpresa INT,
    FOREIGN KEY (fkRepresentante) REFERENCES Representante(idRepresentante),	
    FOREIGN KEY(fkEmpresa) REFERENCES Empresa(idEmpresa)
);

INSERT INTO Login VALUES											 (null, 'anderson@pfizer.com', '024463401$', null, null),
																	 (null, 'angelica@johnson.com', '$2243105@6', null, null),
                                                                     (null, 'contato@biontech.com', '0#%2084793', null, null),
                                                                     (null, 'bruna@biontech.com', '560$1044%1', null, null),
                                                                     (null, 'contato@butantan.com', '28##2964', null, null);
SELECT * FROM Login;

CREATE TABLE Kit(
idKit INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE Sensor(
	fkTransporte INT,
	idSensor INT,
	statusSensor VARCHAR(20),
    fkKit INT,
    PRIMARY KEY (idSensor, fKit),
    FOREIGN KEY (fkTransporte) REFERENCES automoveis(idTransaporte)
);
INSERT INTO Sensor VALUES 
							(null, null, "ideal", null),
							(null, null, "alerta", null),
							(null, null, "critico", null),
							(null, null, "ideal", null);
SELECT * FROM tbSensor;

ALTER TABLE tbSensor DROP fkTransporte;

CREATE TABLE Lotes(
	idLote INT PRIMARY KEY AUTO_INCREMENT,
	qtdeProdutos INT,
	dimensao DECIMAL,
	fkTransporte INT,
	fkProduto INT,
    FOREIGN KEY (fkTransporte) REFERENCES automoveis (idTransporte),
    FOREIGN KEY (fkProduto) REFERENCES produto (idProduto)
);
SELECT * FROM tbLotes;

INSERT INTO Lotes VALUES  (null, '200', '5cm', null, null),
														  (null, '150', '40cm', null, null),
														  (null, '300', '1m', null, null),
														  (null, '100', '1,5m', null, null),
														  (null, '50', '55cm', null, null);