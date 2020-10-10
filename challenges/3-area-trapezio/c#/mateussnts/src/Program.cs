using System;

namespace mateussnts{
    class Program{
        static void Main(string[] args){
            
            try{
                Console.Write("Base maior: ");
                double baseMaior = Convert.ToDouble(Console.ReadLine());
    
                Console.Write("Base menor: ");
                double baseMenor = Convert.ToDouble(Console.ReadLine());
                
                Console.Write("Altura: ");
                double altura = Convert.ToDouble(Console.ReadLine());

                double areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;

                Console.WriteLine("\nA área do trapézio é: " + areaTrapezio);
                
            } catch {
        
                Console.WriteLine("\nPor favor digite apenas numeros validos! You leigo men??");
            }
        }
    }
}
