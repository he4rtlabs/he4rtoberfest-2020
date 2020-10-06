#include <iostream>

using namespace std;
int main() {

  string frase;

  cin >> frase;
  int numChar = frase.length();
  int espacoLinha;
  while(numChar >= 0){
    for(int i=0; i<=numChar-1; i++){
      cout << frase[i]<< " ";
    }

    numChar--;
    espacoLinha = numChar;
    cout << endl;
        
    for(int j=espacoLinha; j<frase.length(); j++){
      cout << " ";
    }
  }

}
