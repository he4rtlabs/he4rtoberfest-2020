import java.util.Scanner;

class MediaAlunos {

    public static float media(float num1, float num2){
        return (num1 + num2) / 2;
    }
    public static void main (String[] args){

        Scanner input1 = new Scanner(System.in);
        System.out.print("Digite a primeira nota:");
        float nota1 = input1.nextInt();

        Scanner input2 = new Scanner(System.in);
        System.out.print("Digite a segunda nota:");
        float nota2 = input2.nextInt();

        System.out.println(media(nota1, nota2));

        input1.close();
        input2.close();
    }
}