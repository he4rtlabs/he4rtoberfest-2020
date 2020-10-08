import sys

# Lê o número inteiro
inteiro_N = int(sys.argv[1])

if inteiro_N <= 0 or inteiro_N >= 46:
    print("O número deve ser maior que 0 e menor que 46")
    exit()

# inicializa as variáveis de controle e a string de saída
ultimo_numero = 1
numero = 1
string_resposta = ""

for index in range(inteiro_N):
    # Adiciona o 0 incial a saída
    if index == 0:
        string_resposta = string_resposta + f"0"
    # Adiciona a saída o 1 inicial
    elif index == 1:
        string_resposta = string_resposta + f" {numero}"
    else:
        # Adiciona o número a saída e incrementa o último número e o número
        string_resposta = string_resposta + f" {numero}"
        numero, ultimo_numero = numero + ultimo_numero, numero

# Exibe a saída
print(string_resposta)
