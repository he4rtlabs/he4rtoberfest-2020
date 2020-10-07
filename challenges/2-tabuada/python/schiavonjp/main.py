
def process_item(item):
    print('===========================')
    print('A tabuada do numero {} é: '.format(item))
    for number in range(1,11):
        result = int(item)*int(number)
        print('   {}*{} = {}'.format(item, number, int(result)))
    
    

try:
    number = int(input(''))
    results = [process_item(item) for item in range(1,number+1)]
    print('===========================')
except Exception as e:
    print(e)