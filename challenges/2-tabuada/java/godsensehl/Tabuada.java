import java.util.Scanner;

public class Tabuada {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        try {

            int numberChoice = sc.nextInt();

            for (int i=1; i<=numberChoice; i++){
                System.out.println("===========================");
                System.out.println("A tabuada do numero "+i+" é:");
                for(int j=1; j<=10; j++){
                    System.out.println("  "+i+"*"+j+" = "+(i*j));
                }
            }
            System.out.println("===========================");

        }catch (NumberFormatException e){

            System.out.println("Apenas números inteiros serão aceitos nesta programa...");
        }
    }
}
