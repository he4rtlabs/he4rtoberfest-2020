import java.util.Scanner;

public class Media {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String[] notas;
        float somaNotas = 0;
        int i = 0;

        try {

            System.out.println("Digite duas notas para calcular a média:");
            String s = sc.nextLine();
            notas = s.split(" ");

            for (String str : notas) {
                somaNotas += Float.parseFloat(notas[i]);
                i++;
            }

            System.out.println("Média -> " + String.format("%.1f", somaNotas/i));

        }catch (NumberFormatException e){

            System.out.println("Este programa aceita apenas valores inteiros ou de ponto flutuante");
        }
    }
}
