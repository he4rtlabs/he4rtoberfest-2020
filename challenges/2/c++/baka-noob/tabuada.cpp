#include <iostream>

using namespace std;

void tabuada(int numero) {

    int i, n, resultado;
    for (i = 1; i <= numero; i++) { 

        cout << "===========================" << endl;
        cout << "A tabuada do numero " << i << " é:" << endl;

        for (n = 1; n <= 10; n++) {

            resultado = i * n;
            cout << "   " << i << "*" << n << " = " << resultado << endl;
            
        }
    }
    cout << "===========================" << endl;
}

int main() {

    int numero;
    cin >> numero;
    tabuada(numero);

    return 0;
}