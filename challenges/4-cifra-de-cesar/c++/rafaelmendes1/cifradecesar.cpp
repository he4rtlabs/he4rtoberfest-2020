#include <iostream>

using namespace std;

int main() {

  int cont, posicoesPular;

  // Lista ACII
  int letra;
  string mensagem;

  cin >> cont;

  while(cont>0){
    cin >> mensagem;
    cin >> posicoesPular;
    cout << "Decifrado: ";
    for(int i=0; i<mensagem.size();i++){
      letra = toupper(mensagem[i]);
      if(letra-posicoesPular < 65){
        letra += 16;
        mensagem[i] = letra;
      }else {
        mensagem[i] = letra-posicoesPular;
      }
      cout << mensagem[i];
    }
    cout << endl;
    cont--;
  }

}
