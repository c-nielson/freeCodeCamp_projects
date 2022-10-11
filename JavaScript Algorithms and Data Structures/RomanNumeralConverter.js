const num = 1013;

function convertToRoman(num) {
    let str = "";

    if (num === 0) {
        return str;
    }

    if (num >= 1000) {
        str += "M".repeat(~~(num / 1000));
        return str += convertToRoman(num % 1000);
    }

    if (~~(num / 900) === 1) {
        str += "CM";
        return str += convertToRoman(num % 900);
    }

    if (num >= 500) {
        str += "D";
        return str += convertToRoman(num % 500)
    }

    if (~~(num / 400) === 1) {
        str += "CD";
        return str += convertToRoman(num % 400);
    }

    if (num >= 100) {
        str += "C".repeat(~~(num / 100));
        return str += convertToRoman(num % 100);
    }

    if (~~(num / 90) === 1) {
        str += "XC";
        return str += convertToRoman(num % 90);
    }

    if (num >= 50) {
        str += "L";
        return str += convertToRoman(num % 50);
    }

    if (~~(num / 40) === 1) {
        str += "XL";
        return str += convertToRoman(num % 40);
    }

    if (num >= 10) {
        str += "X".repeat(~~(num / 10));
        return str += convertToRoman(num % 10);
    }

    if (num === 9) {
        return str += "IX";
    }

    if (num >= 5) {
        str += "V";
        return str += convertToRoman(num % 5);
    }

    if (num === 4) {
        return "IV";
    }

    if (num < 4) {
        return "I".repeat(num);
    }
}

console.log(convertToRoman(num));
