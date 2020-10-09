// lê os argumentos e testa
process.argv.forEach(function (value, i, array) {
  if (i !== 0 && i !== 1) {
    showString(value);
  }
});

function showString(text) {
  console.log("\n");
  for (let i = 1; i < text.length; i++) {
    let filtredString = text.slice(0, -i);
    filtredString = filtredString.split("").join(" ");
    console.log(`${" ".repeat(i)}${filtredString}`);
  }
}
