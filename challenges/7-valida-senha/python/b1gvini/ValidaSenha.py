print("Olá, Será que sua senha é segura?")
print("Irei validar de acordo com Requisitos Minimos!")
print()
senha = input("Por favor, digite sua senha: ")
simbolos_validos = '[@_!#$£%^&*()<>?/\|}{~:]'
simbolo = False
maiuscula = False
minuscula = False
numero = False
if len(senha) >= 6 and len(senha) <= 32:     
    for letra in senha:
        if letra in simbolos_validos:    
            simbolo = True
        if letra.isupper():                        
            maiuscula = True
        if letra.islower():                        
            minuscula = True
        if letra.isnumeric():
            numero  = True
    if simbolo and maiuscula and minuscula and numero:
        print("Senha válida!")
    else:
        print("Senha Inválida")
else:
    print("Senha inválida.")
