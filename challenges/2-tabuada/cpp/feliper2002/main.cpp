#include <iostream>

using namespace std;

void tabuada(int numero) {

    for (int i=1; i<=numero; i++) {
        cout << "===========================" << endl;
        cout << "A tabuada do numero " << i << " e:" << endl;
        for (int j=1; j<=10; j++) {
            cout << i << "*" << j << " = " << (i*j) << endl;
        }
    }
    cout << "===========================";
}

int main() {
    int numero; cin >> numero;
    tabuada(numero);
    return 0;
}
