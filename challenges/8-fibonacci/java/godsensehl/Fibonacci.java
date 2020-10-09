import java.util.Scanner;

public class Fibonacci {

    public static int fib(int input){

        if(input == 0 || input == 1)  return input;

        return fib(input-1) + fib(input-2);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite um inteiro entre 0 e 46:");
        int inteiroN = sc.nextInt();
        int j = 0;

        if(inteiroN > 0 && inteiroN < 46){

            for(int i=1; i <= inteiroN; i++){

                if(i<inteiroN){

                    System.out.print(fib(j)+" ");
                }
                else System.out.print(fib(j));

                j++;
            }
        }else {

            System.out.println("A entrada está fora do padrão esperado!");
        }

        sc.close();
    }
}
