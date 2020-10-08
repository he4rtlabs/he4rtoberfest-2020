#include <iostream>
#include <locale.h>

using namespace std;

void tabuada(int numero) {
    setlocale(LC_ALL, "portuguese");
    for (int i=1; i<=numero; i++) {
        cout << "===========================" << endl;
        cout << "A tabuada do numero " << i << " é:" << endl;
        for (int j=1; j<=10; j++) {
            cout << i << "*" << j << " = " << i*j << endl;
        }
    }
}

int main() {

    int numero; cin >> numero;
    tabuada(numero);
    return 0;
}