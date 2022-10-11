function rot13(str) {
    let returnStr = "";
    const strArr = str.split(" ");

    // A is 65 in ASCII, Z is 90
    strArr.forEach(word => {
            returnStr += word.reduce((str, char) => {
                const oldCode = char.charCodeAt();
                if (oldCode < 65 || oldCode > 90) {
                    str += String.fromCharCode(oldCode);
                    return str;
                } else {
                    let newCode = oldCode - 13;
                    if (newCode < 65) {
                        newCode = 91 - (65 - newCode);  // Wrap letter back to Z if newCode is "less than" A
                    }
                    str += String.fromCharCode(newCode);
                    return str;
                }
            }, "") + " ";
        }
    );

    return returnStr.trim();
}

const testStr = "SERR PBQR PNZC";

console.log(rot13(testStr));