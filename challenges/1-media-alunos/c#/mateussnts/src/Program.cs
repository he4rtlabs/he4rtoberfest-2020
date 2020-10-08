using System;

namespace mateussnts{
    class Program{
        static void Main(string[] args){
            
            double nota1 = Convert.ToDouble(Console.ReadLine());
            double nota2 = Convert.ToDouble(Console.ReadLine());

            double media = (nota1 + nota2) / 2;

            Console.WriteLine("Média -> " + media);
        }
    }
}
