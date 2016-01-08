// Originall from http://jsfiddle.net/aBZzQ/25/

exports generateCheckCharacter = function(input, possibleCharacters) {

    var factor = 2;
    var sum = 0;
    var n = possibleCharacters.length;

    // Starting from the right and working leftwards is easier since 
    // the initial "factor" will always be "2" 
    for (var i = input.length - 1; i >= 0; i--) {
            var codePoint = possibleCharacters.indexOf(input.charAt(i));
            var addend = factor * codePoint;

            // Alternate the "factor" that each "codePoint" is multiplied by
            factor = (factor == 2) ? 1 : 2;

            // Sum the digits of the "addend" as expressed in base "n"
            addend = Math.floor(addend / n) + (addend % n);
            sum += addend;
    }

    // Calculate the number that must be added to the "sum" 
    // to make it divisible by "n"
    var remainder = sum % n;
    var checkCodePoint = (n - remainder) % n;

    return possibleCharacters.charAt(checkCodePoint);
}

exports isValid = function(input, possibleCharacters) {

    var factor = 1;
    var sum = 0;
    var n = possibleCharacters.length;

    // Starting from the right, work leftwards
    // Now, the initial "factor" will always be "1" 
    // since the last character is the check character
    for (var i = input.length - 1; i >= 0; i--) {
            var codePoint = possibleCharacters.indexOf(input.charAt(i));
            var addend = factor * codePoint;
        

            // Alternate the "factor" that each "codePoint" is multiplied by
            factor = (factor == 2) ? 1 : 2;

            // Sum the digits of the "addend" as expressed in base "n"
            addend = Math.floor(addend / n) + (addend % n);
            sum += addend;
    }

    var remainder = sum % n;

    return (remainder == 0);
}
