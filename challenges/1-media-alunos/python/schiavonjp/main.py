import sys

try:
    avr1 = sys.argv[1]
    avr2 = sys.argv[2]
    total_avr = (int(avr1) + int(avr2)) / 2
except Exception as e:
    print(e)
print(total_avr)