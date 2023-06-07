/*Código do Arduino- pegamos os dados que os sensores emitem e os transformamos em gráficos*/
/*Adesão das bibliotecas*/
/*#include <DHT.h>
#include <DHT_U.h>

#include <Adafruit_Sensor.h>

#include <DHT.h>
#include <DHT_U.h>

#include "DHT.h"*/
 /*Definição das portas*/
/*#define DHTPIN A2*/
#define LM35PIN A3
/*#define LUMIPIN A0
#define CHAVPIN 7*/
 
/*Declaração da variável dht com o tipo de variável DHT na qual é importada da biblioteca DHT*/
/*DHT dht(DHTPIN, DHT11);*/
/*Configuração de setup- não tem retorno*/
void setup()
{
  /*Tipo de entrada e saída de dados*/
  /*INPUT vai receber/ OUTPUT vai soltar dados */
/*  pinMode(DHTPIN, INPUT);
  pinMode(CHAVPIN, INPUT);*/
  /*Onde a transmissão de bytes por segundo para a transmissão serial(9600)*/
  /*Inicialização da serialização dos dados de acordo com o bitrate inserido*/
  Serial.begin(9600);
  /*Inicialização do sensor dht*/
  /*dht.begin();*/
}
  /*Definição da função na qual irá ficar em loop - não haverá retorno*/
void loop() 
{
  /*Um ponto flutuannte - um valor que varia entre os números racionais*/
  /*A variável é declarada e é dada a sua função - a ação que ela realizará, nesse caso ler a umidade*/
/*  float dht11_umidade = dht.readHumidity();*/
  /*A variável é declarada e é dada a sua função - a ação que será realizada, nesse caso ler a temperatura*/
  /*float dht11_temperatura = dht.readTemperature();*/
  /*Representação gráfica dosvalores na tela*/
  /*Serial.print(dht11_umidade);*/
  /*Serial.print(";");*/
  /*Serial.print(dht11_temperatura);*/
  /*Serial.print(";");*/
  /*AnalogRead é a leitura analógica da variável específica dentro dos parênteses*/
  /*float luminosidade =  analogRead(LUMIPIN);
  Serial.print(luminosidade);
  Serial.print(";");*/

  int idSensor = 1;
  float lm35_temperatura = analogRead(LM35PIN);
  /*Conversão da temperatura de bytes paara dados*/
  lm35_temperatura = lm35_temperatura * 0.00488;
  /*E transformando-os em inteiros*/
  lm35_temperatura = (lm35_temperatura * 100) - 20;
  Serial.print(lm35_temperatura);
  Serial.print(";");
  Serial.print(idSensor);
  /*declaração da variável do tipo inteira que está sendo atribuido o valor do retorno da função digital Read */
 /* int chave = digitalRead(7);*/
  /*Quando o valor da chave for zero significa que está sendo bloqueado*/
 /* if (chave == 0)  
  {  
    Serial.print("0");  
  }  
  else  
  {  
    Serial.print("1");  
  }*/

  Serial.println();
  delay(2000);
}
