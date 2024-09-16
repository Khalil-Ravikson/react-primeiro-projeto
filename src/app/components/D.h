#include <NewPing.h>

// Definições dos pinos e configurações
#define pin_S1 34
#define pin_S2 35
#define TRIGGER_PIN  5  // Pino de trigger do sensor ultrassônico
#define ECHO_PIN     18 // Pino de echo do sensor ultrassônico
#define MAX_DISTANCE 200 // Distância máxima para medir (em cm)

// Configurações do motor
int CHA = 0;
int ENA = 14;
int IN1 = 27;
int IN2 = 26;
int IN3 = 25;
int IN4 = 33;
int ENB = 32;
int CHB = 1;
int VELOCIDADE = 70;
const int frequency = 500;
const int resolution = 8;

bool Sensor1 = 0;
bool Sensor2 = 0;
int direcao_anterior = -1;

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

// Funções de controle do motor
void inicializar_motor(int ENA_pin, int IN1, int IN2, int pwm_channel, int frequency, int resolution)
{
    pinMode(ENA_pin, OUTPUT);
    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);
    ledcSetup(pwm_channel, frequency, resolution);
    ledcAttachPin(ENA_pin, pwm_channel);
}

void Para_Frente(int IN1, int IN2, int IN3, int IN4, int CH1, int CH2, int VELOCIDADE)
{
    ledcWrite(CH1, VELOCIDADE);
    ledcWrite(CH2, VELOCIDADE);
    digitalWrite(IN2, HIGH);
    digitalWrite(IN1, LOW);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
}

void Stop(int IN1, int IN2, int IN3, IN4)
{
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
}

void Para_Tras(int IN1, int IN2, int IN3, int IN4, int CH1, int CH2, int VELOCIDADE)
{
    ledcWrite(CH1, VELOCIDADE);
    ledcWrite(CH2, VELOCIDADE);
    digitalWrite(IN2, LOW);
    digitalWrite(IN1, HIGH);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
}

void Para_Esq(int IN1, int IN2, int IN3, int IN4, int CH1, int CH2, int VELOCIDADE)
{
    ledcWrite(CH1, VELOCIDADE);
    ledcWrite(CH2, VELOCIDADE);
    digitalWrite(IN2, HIGH);
    digitalWrite(IN1, LOW);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
}

void Para_Dir(int IN1, int IN2, int IN3, int IN4, int CH1, int CH2, int VELOCIDADE)
{
    ledcWrite(CH1, VELOCIDADE);
    ledcWrite(CH2, VELOCIDADE);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
}

// Inicializar os pinos dos sensores infravermelhos
void init_infrared_sensor()
{
    pinMode(pin_S1, INPUT);
    pinMode(pin_S2, INPUT);
}

int linhas_detectadas()
{
    Sensor1 = digitalRead(pin_S1);
    Sensor2 = digitalRead(pin_S2);
    int direcao = 0;

    if ((Sensor1 == 0) && (Sensor2 == 0))
    {
        direcao = 0;
        Stop(IN1, IN2, IN3, IN4);
    }
    else if ((Sensor1 == 1) && (Sensor2 == 1))
    {
        direcao = 1;
        Para_Frente(IN1, IN2, IN3, IN4, CHA, CHB, VELOCIDADE);
    }
    else if ((Sensor1 == 1) && (Sensor2 == 0))
    {
        direcao = 2;
        Para_Esq(IN1, IN2, IN3, IN4, CHA, CHB, VELOCIDADE);
    }
    else if ((Sensor1 == 0) && (Sensor2 == 1))
    {
        direcao = 3;
        Para_Dir(IN1, IN2, IN3, IN4, CHA, CHB, VELOCIDADE);
    }
    return direcao;
}

void desviar_obstaculo()
{
    Stop(IN1, IN2, IN3, IN4);
    delay(500);
    
    Para_Tras(IN1, IN2, IN3, IN4, CHA, CHB, VELOCIDADE);
    delay(1000);
    
    Para_Dir(IN1, IN2, IN3, IN4, CHA, CHB, VELOCIDADE);
    delay(1500);
    
    Para_Frente(IN1, IN2, IN3, IN4, CHA, CHB, VELOCIDADE);
    delay(2000);
    
    Para_Esq(IN1, IN2, IN3, IN4, CHA, CHB, VELOCIDADE);
    delay(1500);
}

void seguidor_de_linha_com_desvio()
{
    unsigned int distancia = sonar.ping_cm();
    
    if (distancia > 0 && distancia < 20) // Se detectar obstáculo a menos de 20 cm
    {
        Serial.println("Obstáculo detectado! Desviando...");
        desviar_obstaculo();
    }
    else
    {
        int direcao = linhas_detectadas();
   
        if (direcao_anterior == -1) {
            direcao_anterior = direcao;
        }

        switch(direcao) {
            case 0:
                Serial.println("Parado");
                break;
            case 1:
                Serial.println("Frente");
                break;
            case 2:
                Serial.println("Esquerda");
                break;
            case 3:
                Serial.println("Direita");
                break;
        }

        direcao_anterior = direcao;
    }
}

void setup() {
    Serial.begin(115200);
    init_infrared_sensor();
    inicializar_motor(ENA, IN1, IN2, CHA, frequency, resolution);
    inicializar_motor(ENB, IN3, IN4, CHB, frequency, resolution);
}

void loop() {
    seguidor_de_linha_com_desvio();
    delay(100);
}