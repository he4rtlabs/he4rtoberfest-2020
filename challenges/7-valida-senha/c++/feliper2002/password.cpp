#include <iostream>
#include <ctype.h>
#include <string.h>
#include <stdio.h>
#define MIN 6
#define MAX 32

using namespace std;

int passwordValidation(char senha[MAX]) {
    bool flagUpper = false, flagLower = false, flagNumber = false;
    if (strlen(senha) < MIN || strlen(senha) > MAX) {
        cout << "Senha invalida." << endl;
    } else {
        for (int i=0; i<=MAX; i++) {
            if (isspace(senha[i])) {
                cout << "Senha invalida." << endl;
                return 0;
            }
            if (islower(senha[i])) {
                flagLower = true;
            }
            if (isupper(senha[i])) {
                flagUpper = true;
            }
            if (isdigit(senha[i])) {
                flagNumber = true;
            }
        }
        if (flagLower && flagUpper && flagNumber) {
            cout << "Senha valida." << endl;
        } else {
            cout << "Senha invalida." << endl;
        }
    }
}

int main() {
    char senha[MAX];
    cout << "Digite uma senha: "; scanf("%[^\n]s", senha);
    passwordValidation(senha);
    return 0;
}