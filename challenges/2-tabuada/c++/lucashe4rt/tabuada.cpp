#include <iostream>

int main()
{
    int numeroFinal;

    std::cout << "Insira um número: ";
    std::cin >> numeroFinal;

    for(int i = 1; i <= numeroFinal; i++) {
    
        std::cout << "===========================" << std::endl;
        std::cout << "A tabuada do número " << i << " é:" << std::endl;
    
        for (int j = 1; j <= 10; j++) {
            std::cout << "" << i << " X " << j << " = " << (i*j) << std::endl; 
        }
    }

    std::cout << "===========================" << std::endl;
}
