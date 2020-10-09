var word = "ABRACADABRA";
var wordArray = word.split('');

var blankStandard = " ";
var blank = " ";

for (let i = 0; i < word.length; i++) {
    console.log(blank + wordArray.join(" "));
    blank = blank + blankStandard;
    wordArray.pop();
}
