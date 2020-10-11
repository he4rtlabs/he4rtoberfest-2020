import std.stdio;

float mediaAluno(float nota1, float nota2)
{
  return (nota1 + nota2) / 2;
}

void main()
{
  float n1, n2;

  writeln("Digite a nota 1: ");
  readf(" %f", &n1);

  writeln("Digite a nota 2: ");
  readf(" %f", &n2);

  if (n1 && n2)
  {
    const float media = mediaAluno(n1, n2);
    writefln("Media -> %f", media);

  }
  else
  {
    writeln("Nenhuma nota informada!");
  }
}
