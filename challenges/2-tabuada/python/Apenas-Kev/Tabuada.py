while True:
    try:
        numero = int(input('Insira o numero para receber a tabuada: '))
        break;
    except ValueError:
        print('Por favor, insira apenas numeros inteiros')
ctrl = 0
print('='*27)
while (numero > 0):
    ctrl = (ctrl + 1)
    print(f'A tabuada do numero {ctrl} é:\n  {ctrl}*1 = {ctrl}\n  {ctrl}*2 = {ctrl*2}\n  {ctrl}*3 = {ctrl*3}\n  {ctrl}*4 = {ctrl*4}\n  {ctrl}*5 = {ctrl*5}\n  {ctrl}*6 = {ctrl*6}\n  {ctrl}*7 = {ctrl*7}\n  {ctrl}*8 = {ctrl*8}\n  {ctrl}*9 = {ctrl*9}\n  {ctrl}*10 = {ctrl*10}\n{"="*27}')
    numero = numero - 1
