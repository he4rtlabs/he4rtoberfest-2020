import java.util.Scanner;

public class Cifra {

  public static String decodificar(String s, int deslocamento) throws Exception {
    String resultado = "";

    s = s.toUpperCase(); // Certificando de que todos os caracteres sao maiusculos

    for (int i = 0; i < s.length(); i++) {
      char cAtual = s.charAt(i);

      if (cAtual < 'A' || cAtual > 'Z') {
        throw new Exception("Sua mensagem deve conter apenas caracteres entre A-Z");
      }

      int codigo = (int) cAtual - deslocamento;

      if (codigo >= 65) {

        resultado += (char) ((codigo));

      } else {

        resultado += (char) (90 - deslocamento + ((int) cAtual - 65 + 1)); // 'Z' - deslocamento + (cAtual - 'A' + 1)

      }

    }
    return resultado;

  }

  public static void main(String[] args) {
    try {
      Scanner in = new Scanner(System.in);

      int qntTestes = 0;
      String msgCriptografada = "";
      int deslocamento = 0;

      qntTestes = in.nextInt();
      clearBuffer(in);

      if (qntTestes <= 0) {
        throw new Exception("A quantidade de testes deve ser no mínimo 1");
      }

      while (qntTestes > 0) {
        msgCriptografada = in.nextLine();
        deslocamento = in.nextInt();
        clearBuffer(in);

        if (msgCriptografada.length() > 50 || deslocamento < 0 || deslocamento > 25) {
          throw new Exception("A mensagem deve ter no máximo 50 caracteres e o deslocamento deve estar entre 0 e 25");
        }

        System.out.println("Decifrado: " + decodificar(msgCriptografada, deslocamento));

        qntTestes -= 1;
      }
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }

  public static void clearBuffer(Scanner scanner) {
    if (scanner.hasNextLine()) {
      scanner.nextLine();
    }
  }
}