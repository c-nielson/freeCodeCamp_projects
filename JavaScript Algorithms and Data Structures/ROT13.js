function rot13(str) {
    // A is 65 in ASCII, Z is 90
    return str.split("").map(char => {
        const oldCode = char.charCodeAt();

        if (oldCode < 65 || oldCode > 90) {
            return String.fromCharCode(oldCode);
        } else {
            let newCode = oldCode - 13;
            if (newCode < 65) {
                newCode = 91 - (65 - newCode);  // Wrap letter back to Z if newCode is "less than" A
            }
            return String.fromCharCode(newCode);
        }
    }).join("");
}

const testStr = "SERR PBQR PNZC";

console.log(rot13(testStr));