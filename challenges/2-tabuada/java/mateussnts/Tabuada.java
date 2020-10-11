import java.util.Scanner;

public class Tabuada{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);

        while(true){
            System.out.print("\nInsina um número: ");
            int numero = sc.nextInt();
            
            
            if(numero <= 0){
                System.out.println("\nEntrada Invalida: Numero deve ser maior do que 0!, *TENTE NOVAMENTE!*");
                
            } else {

                for(int i = 1; i <= numero; i++){
                    System.out.println("\n===========================");
                    System.out.println("\nA tabuada do numero " + i + " é:");
    
                    for(int j = 1; j <= 10; j++){
                        System.out.println("  " + i + "*" + j + " = " + (i*j));
                    }
                }
                System.out.println("\n===========================");
                sc.close();
                System.exit(0);
            }
        }
	}
}