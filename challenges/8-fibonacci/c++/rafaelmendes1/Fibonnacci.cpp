#include <iostream>

using namespace std;
int main() {
  int num;
  int N = 0;
  int N2 = 1;
  int SOMA = 0;
  

  cin >> num;

  for(int i=0; i<num; i++) {
    cout << N << " ";
    SOMA = N + N2;
    N = N2;
    N2 = SOMA;    
  }
}
