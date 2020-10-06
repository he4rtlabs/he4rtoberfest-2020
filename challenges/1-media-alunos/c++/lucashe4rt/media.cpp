#include <iostream>

int main()
{
    float primeiraNota, segundaNota;

    std::cout << "Insira a primeira nota: ";
    std::cin >> primeiraNota;
    std::cout << "Insira a segunda nota: ";
    std::cin >> segundaNota;

    std::cout << "A média do aluno é: " << (primeiraNota + segundaNota) / 2 << std::endl;
}
