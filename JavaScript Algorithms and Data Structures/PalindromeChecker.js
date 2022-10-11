function palindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/\W/g, "").replace(/_/g, "")
    return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(palindrome("eye"));