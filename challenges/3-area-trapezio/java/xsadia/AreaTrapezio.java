import java.util.Scanner;

public class AreaTrapezio {

    public static Float calcAreaTrap(Float baseMaior, Float baseMenor, Float altura){

        Float area = (baseMaior + baseMenor) * altura / 2;
        return area;

    }

    public static void main(String[] args){

        Scanner input = new Scanner(System.in);
        System.out.print("Base maior: ");

        if (!input.hasNextFloat()){

            System.out.println("Base maior tem que ser um numero");
            System.exit(1);

        }

        Float baseMaior = input.nextFloat();

        Scanner input2 = new Scanner(System.in);
        System.out.print("Base menor: ");

        if (!input2.hasNextFloat()){
            System.out.println("Base menor tem que ser um numero");
            System.exit(1);
        }

        Float baseMenor = input2.nextFloat();

        Scanner input3 = new Scanner(System.in);
        System.out.print("Altura: ");

        if (!input3.hasNextFloat()){
            System.out.println("Base altura tem que ser um numero");
            System.exit(1);
        }

        Float altura = input3.nextFloat();

        

        System.out.println(calcAreaTrap(baseMaior, baseMenor, altura));

        input.close();
        input2.close();
        input3.close();


    }
}