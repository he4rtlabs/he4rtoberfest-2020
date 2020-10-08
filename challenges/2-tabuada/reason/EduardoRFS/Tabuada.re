open Printf;

let separator = "===========================";
let show_multiplication_table = x => {
  let header = sprintf("A tabuada do numero %d é:", x);
  let body =
    List.init(10, y => (x, y + 1))
    |> List.map(((x, y)) => sprintf("  %d*%d = %d", x, y, x * y))
    |> String.concat("\n");
  sprintf("%s\n%s", header, body);
};
let show_multiple_multiplication_table = up_to => {
  let tables =
    List.init(up_to, x => show_multiplication_table(x + 1))
    |> String.concat("\n" ++ separator ++ "\n");
  sprintf("%s\n%s\n%s", separator, tables, separator);
};

print_string("\nVai lá man, digita essa porra: ");
flush_all();
Scanf.scanf("%d", show_multiple_multiplication_table) |> print_endline;
