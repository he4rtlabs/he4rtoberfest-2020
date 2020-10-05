#include <iostream>

using namespace std;

int main() {

    float maior, menor, altura;
    cout << "Base Maior: ";
    cin >> maior;
    cout << "Base Menor: ";
    cin >> menor;
    cout << "Altura: ";
    cin >> altura;

    altura = ((maior + menor) * altura)/2;;

    cout << "A área do trapézio é: " << altura << endl;
    
    return 0;
}