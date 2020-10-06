import java.util.Scanner;

public class Tabuada {

    public static void table(int num, int range){

        System.out.println("=======================================================================");
        System.out.printf("A tabuada do numero %d:\n", num);
        for (int i = 1; i <= range; i++){
            int result = num * i;
            System.out.printf("%d" + " * " + "%d = " + "%d\n", num, i, result);
        }
        System.out.println("=======================================================================");
    }

    public static void main(String[] args){

        Scanner input = new Scanner(System.in);
        System.out.print("Qual tabuada desejas?");
        int numero = input.nextInt();
        
        Scanner input2 = new Scanner(System.in);
        System.out.print("Quantos numeros queres na tabuada?");
        int range = input2.nextInt();

        table(numero, range);

        input.close();
        input2.close();

    }
}

