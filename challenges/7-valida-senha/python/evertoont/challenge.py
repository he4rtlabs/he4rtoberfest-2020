import re

def validar_senha(senha):

    resultado = [False, False, False]

    if len(senha) >= 6 and len(senha) <= 32:

        for letra in senha:
            if not re.match("[a-zA-Z0-9]", letra):
                return "Senha invalida."

            if letra.isupper():
                resultado[0] = True
            if letra.islower():
                resultado[1] = True
            if letra.isnumeric():
                resultado[2] = True

        if False in resultado:
            return "Senha inválida."
        else:
            return "Senha valida."
            
    else:
        return "Senha inválida."


if __name__ == "__main__":
    senha = input("Digite sua senha: ")
    resposta = validar_senha(senha)
    print(resposta)