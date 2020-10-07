let letras = {};

let str = "";

process.argv.forEach(function (value, i, array) {
  if (i !== 0 && i !== 1) {
    str += value;
  }
});

let strFiltred = str.split(" ").join("").toLowerCase();
accountString(strFiltred);

function accountString(str) {
  for (let i = 0; i < str.length; i++) {
    if (!letras[str.charAt(i)]) {
      letras[str.charAt(i)] = { count: 1 };
    } else {
      letras[str.charAt(i)].count++;
    }
  }

  let letrasFiltred = Object.keys(letras).sort((a, b) => {
    return letras[b].count - letras[a].count;
  });

  let concatedString = "";
  const strShown = [];

  Object.keys(letras).map((value) => {
    if (
      !strShown.includes(value) &&
      letras[value].count === letras[letrasFiltred[0]].count
    ) {
      strShown.push(value);
      concatedString += value;
    }
  });

  console.log(concatedString);
}
