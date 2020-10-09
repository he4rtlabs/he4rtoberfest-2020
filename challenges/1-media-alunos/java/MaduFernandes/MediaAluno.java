import java.util.Scanner;

public class MediaAluno {

    public static void main(String[] args) {
        MediaAluno media = new MediaAluno();

        media.MediaAluno();
    
    }

    public void MediaAluno() {

        Scanner input = new Scanner(System.in);

        System.out.println("Informe primeira nota do aluno:");
        Integer nota1 = input.nextInt();

        System.out.println("Informe segunda nota do aluno:");
        Integer nota2 = input.nextInt();

        double media = (nota1 + nota2) / 2;

        System.out.println("A média é: " + media);
        
    }

}