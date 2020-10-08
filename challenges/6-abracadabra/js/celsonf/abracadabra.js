function abracadabra(text) {
    var trataString = text.toUpperCase();
    var addpace = 0;

    for (let index = 1; index < text.length; index++) {
        let extratString = trataString.slice(0, -index)
        let formats = `margin-left: ${addpace += 3}px;`

        console.log(`%c ${extratString}`, formats);
    }
}

abracadabra('abracadabra')

abracadabra('helpme')