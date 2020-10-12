#Foi utilizado o input detro de "int()" para que seja passado um valor como inteiro e não como string
numero = int( input('Digite o valor maximo: ') )

print('===========================')

x=1

while(x<=numero):
    print ('A tabuada do numero ',x, 'e: ')
    y=1
    while(y<11):
        print(str(x)+'*'+str(y)+'= ', 1*y)
        y = y+1
    x = x+1
    print('===========================\n')