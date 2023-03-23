CREATE DATABASE bdFrozenTime;
USE bdFrozenTime;
CREATE TABLE tbProduto(
	idProduto INT PRIMARY KEY AUTO_INCREMENT,
	nomeProduto VARCHAR(50),
	categoriaProduto VARCHAR(50),
	tempMaxProduto VARCHAR(50),
	tempMinProduto VARCHAR(50),
	fabricanteProduto VARCHAR(50),
	descricaoProduto VARCHAR(50),
	dtFabricacao DATETIME DEFAULT current_timestamp,
	dtVencimento DATETIME,
	valorProduto DECIMAL
);

ALTER TABLE tbProduto MODIFY COLUMN descricaoProduto VARCHAR(100);

INSERT INTO tbproduto (idProduto, nomeProduto, categoriaProduto, tempMaxProduto, tempMinProduto, descricaoProduto, dtFabricacao, dtVencimento, valorProduto) 
VALUES (null,'Alfaepoetina', 'Recombinante Injetável ', '8ºC', '2ºC', 'Frasco-ampola 1mL.Indicado para tratamento de anemia.', '2022-05-25 08:30:05', '2023-05-25 08:30:05', '140'),
(null,'Alprostadil', 'injeção intracavernosa direta', '30°C', '15°C','Frasco-ampola', '2022-04-21 11:00:05', '2023-04-21 10:00:05', '1040'),
(null,'Ciclofosfamida ', 'Intracavernosa', '8ºC', '2ºC', 'Comprimido revestido', '2022-05-25 17:20:02', '2023-05-25 16:50:00', '90');

INSERT INTO tbproduto(idProduto, nomeProduto, categoriaProduto, tempMaxProduto, tempMinProduto, descricaoProduto, dtFabricacao, dtVencimento, valorProduto) 
VALUES (null,'Espironolactona', 'Comprimido', '30ºC', '15ºC', 'Frasco 60mL.Diurético e anti-hipertensivo', '2023-03-10 13:16:20', '2025-03-10 08:30:05', '20'),
(null,'Ocitocina', 'infusão intravenosa', '30ºC', '15ºC', 'Ampola 1mL', '2022-10-15 09:30:40', '2024-10-15 08:30:05', '30'),
(null,'Insulina NPH', 'Injetável ', '8ºC', '2ºC', 'Frasco 10mL', '2023-11-21 13:50:00', '2025-11-21 13:40:00', '72');

SELECT * FROM tbproduto;

DELETE FROM tbProduto WHERE idproduto = 4; 

CREATE TABLE tbColaborador(
	idColaborador INT PRIMARY KEY AUTO_INCREMENT,
	nomeColaborador VARCHAR(60),
	fkEmpresa INT,
	cargoColaborador VARCHAR(90),
	telefoneColaborador VARCHAR(20),
	emailColaborador VARCHAR(50)
);
SELECT * FROM tbColaborador;

ALTER TABLE tbColaborador DROP fkEmpresa;

INSERT INTO tbColaborador(idColaborador, nomeColaborador, cargoColaborador, telefoneColaborador, emailColaborador) VALUES(null, 'Rayssa Huang', 'Gerente', '(11) 3468-8693', 'ninfa4249@uorak.com'),
                                                                                                                         (null, 'Geneval Furtado Cunha', 'Gerente', '(11) 2112-1545', 'geneval.cunha@gmail.com'),
                                                                                                                         (null, 'Simone Neto Carvalheiro', 'Assistente', '(11) 3468-8693', 'simone.carvalheiro@gmail.com'),
                                                                                                                         (null, 'Denise Gouveia Brito', 'Assistente', '(11) 2084-2536', 'denise.brito@gmail,com'),
                                                                                                                         (null, 'Laryssa Dupont', 'Gerente', '(11) 3468-8693', 'larydupont@gmail.com'),
                                                                                                                         (null, 'Heitor Pietro Martin Gomes', 'Auxiliar Administrativo', '(81) 3516-2875', 'heitor_pietro_gomes@gmail.com'),
                                                                                                                         (null, 'Manuela Koller', 'Secretária', '(11) 98165-1467', 'kollerManu@gamil.com'),
                                                                                                                         (null, 'Julia Miller', 'Auxiliar Administrativo', '(92) 99972-8929', 'millerJu2gmail.com'),
                                                                                                                         (null, 'Bianca Huang', 'Gerente', '(38) 98791-3507', 'biancaH@gmail.com'),
                                                                                                                         (null, 'Marcos Schneider', 'Secretário', '(11) 98199-30533', 'marcosSchineider@gmail.com');
SELECT * FROM tbColaborador;
						
CREATE TABLE tbMotorista(
	idMotorista INT PRIMARY KEY AUTO_INCREMENT,
	nomeMotorista VARCHAR(50),
	cnh VARCHAR(12),
	fkDistrubuidora INT
);

ALTER TABLE tbMotorista DROP fkDistrubuidora;


INSERT INTO tbMotorista(idMotorista, nomeMotorista, cnh) VALUES(null, 'Erick Cauã Monteiro', '44717435398'),
                                                               (null, 'Cláudio Lucca Nelson Cavalcanti', '45743050691'),
                                                               (null, 'Carlos Eduardo Luiz Assis', '18476882796'),
                                                               (null, 'Mário Giovanni Raul Assunção', '11418597865'),
                                                               (null, 'Rebeca Valentina Bárbara de Paula', '70752218147'),
                                                               (null, 'Lorena Emilly Peixoto', '59171573755'),
                                                               (null, 'Bianca Julia Clara Ribeiro', '19112748830'),
                                                               (null, 'Ester Amanda Fabiana de Paula', '93601407725'),
                                                               (null, 'Gessica Mello Nascimento', '15118553771'),
                                                               (null, 'Thalita Pimenta Moreira', '83670558110');
                                                               
SELECT * FROM tbMotorista;

CREATE TABLE tbFornecedores(
	idFornecedor INT PRIMARY KEY AUTO_INCREMENT,
	nomeFornecedor VARCHAR(50),
	cnpjFornecedor VARCHAR(25),
	emailFornecedor VARCHAR(50)
);

INSERT INTO tbFornecedores(idfornecedor, nomeFornecedor, cnpjFornecedor, emailFornecedor) VALUES(null, 'Pfizer', '33927657000158', 'contato@pfizer.com'),
																								(null, 'Johnson & Johnson', '60906805000120', 'J&J@johnson.com'),
                                                                                                (null, 'Biontech', '24180673000139', 'contato@biontech.com'),
                                                                                                (null, 'Instituto Butantan', '53833162000177', 'contato@butantan.com'),
                                                                                                (null, 'Bristol Myers Squibb', '51207664000167', 'BristolMS@gmail,com');
SELECT * FROM tbMotorista;

CREATE TABLE tbDistribuidoras(
	idDistribuidor INT PRIMARY KEY AUTO_INCREMENT,
	nomeDistribuidoras VARCHAR(50),
	cnpjDistribuidora VARCHAR(25),
	emailDistribuidor VARCHAR(50)
);

INSERT INTO tbDistribuidoras(idDistribuidor, nomeDistribuidoras, cnpjDistribuidora, emailDistribuidor) VALUES(null, 'Frezze Logistica', '70376690/0001-63', 'Frezze.logistica@gmail.com'),
                                                                                                             (null, 'HC Hornburg', '93513030/0001-04', 'HC.Hornburg@gmail.com'),
                                                                                                             (null, 'Grupo pontual', '19040713/0001-07', 'Pontual@gmail.com'),
                                                                                                             (null, 'Transportadora JJC', '48755793/0001-85', 'jjc@transportadora@gmail.com'),
                                                                                                             (null, 'Frio Zem', '97828612/0001-09', 'FrioZem@transportes.com');
SELECT * FROM tbDistribuidoras;

CREATE TABLE tbAutomoveis(
	idTransporte INT PRIMARY KEY AUTO_INCREMENT,
	modelo VARCHAR(25),
	placa VARCHAR(25),
	cor VARCHAR(25)
);
SELECT * FROM tbAutomoveis;

INSERT INTO tbAutomoveis(idTransporte, modelo, placa, cor) VALUES(null, 'Bitruck com baú Frigorifico', 'MINI-6620', 'Branca'),
                                                                 (null, 'VUC com baú Frigorifico', 'MMC-1134', 'Cinza'),
                                                                 (null, 'Toco com baú Frigorifico', 'NEV-7762', 'Branca'),
                                                                 (null, 'Bitruck com baú Frigorifico', 'MXR-9421', 'Branca'),
                                                                 (null, 'Toco com baú Frigorifico', 'MOE-3389', 'Branca');

ALTER TABLE tbAutomoveis MODIFY COLUMN modelo VARCHAR(50);

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

INSERT INTO tbRotas(idRotas, tempMin, tempMax, localPartida, localDestino, dtSaida, dtChegada, distancia) 
values (null, '2ºC', '8ºC', 'Rua Alexandre Dunas, 1860- Santo Amaro, São Paulo- SP, 04717-904', 'Praça Canáririas, 322- Vila Formosa, São Paulo-SP, 03359-120', '2017-09-08 08:30:05', '2017-09-08 09:30:05', '27Km'),
       (null, '15ºC', '30ºC', 'Av.Pres. Juscelino Kubitscheck, 2041- Vila Nova Conceição, São Paulo-SP, 04543-011', 'Av.Paulista, 2125- Bela Vista, São paulo-SP, 01311-000', '2023-03-10 10:00:40', '2023-03-10 :30:05', '6Km'),
       (null, '2ºC', '8ºC', 'Av.Mateo Bei, 3066-Cidade São Mateus, São Paulo-SP, 03949-300', 'Av.Conselheiro Carrão, 2186- Vila Carrão, São Paulo- SP, 03402-002', '2019-04-03 09:50:30', '2019-04-03 11:30:05', '40Km'),
       (null, '2ºC', '8ºC', 'R.Martins Fontes, 166-Consolação, são Paulo-SP, 01050-000', 'Av.dos jequitibás, 446-Jabaquara, Mato Grosso do sul-MS, 04321-090', '2022-11-06 11:30:05', '2022-11-07 08:30:05', '1.010,3 Km'),
       (null, '15ºC', '30ºC', 'Av,Lins de Vasconcelos, 1837- Cambuci, São Paulo-SP, 01537-001', 'R.Sete de Abril, 268-República, São Paulo-SP, 01044-000', '2021-10-20 08:00:05', '2022-10-20 09:00:35', '27Km');

ALTER TABLE tbRotas MODIFY COLUMN localPartida VARCHAR(150);
ALTER TABLE tbRotas MODIFY COLUMN localSiada VARCHAR(150);
       
SELECT * FROM tbRotas;

CREATE TABLE tbLogin(
	idLogin INT PRIMARY KEY AUTO_INCREMENT,
	emailCliente VARCHAR(50),
	senhaCliente VARCHAR(20)
);

INSERT INTO tbLogin(idLogin, emailCliente, senhaCliente) VALUES(null, 'anderson@pfizer.com', '024463401$'),
																	 (null, 'angelica@johnson.com', '$2243105@6'),
                                                                     (null, 'contato@biontech.com', '0#%2084793'),
                                                                     (null, 'bruna@biontech.com', '560$1044%1'),
                                                                     (null, 'contato@butantan.com', '28##2964');
SELECT * FROM tbLogin;

CREATE TABLE tbSensor(
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
	FKTransporte VARCHAR(50),
	statusSensor VARCHAR(20)
);
SELECT * FROM tbSensor;

ALTER TABLE tbSensor DROP fkTransporte;

CREATE TABLE tbLotes(
	idLote INT PRIMARY KEY AUTO_INCREMENT,
	qtdeProdutos INT,
	dimensao DECIMAL,
	FKTransporte INT,
	FKProduto INT
);
SELECT * FROM tbLotes;

ALTER TABLE tbLotes DROP FKTransporte;
ALTER TABLE tbLotes DROP FKProduto;

ALTER TABLE tbLotes MODIFY COLUMN dimensao VARCHAR(15);

TRUNCATE TABLE tbLotes;

INSERT INTO tbLotes(idLote, qtdeProdutos, dimensao) VALUES(null, '200', '5cm'),
														  (null, '150', '40cm'),
														  (null, '300', '1m'),
														  (null, '100', '1,5m'),
														  (null, '50', '55cm');