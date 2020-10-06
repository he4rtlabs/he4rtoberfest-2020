print('Tabuada')
x = int(input('Digite um numero: '))
for c in range(1, x+1):
  print(f'A tabuada do número {c} é:')
  for n in range(1,11):
    print(f'{c}*{n} = {c*n}')