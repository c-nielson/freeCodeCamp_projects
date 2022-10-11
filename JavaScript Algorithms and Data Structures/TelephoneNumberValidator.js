/*
* The following are considered valid phone number formats:
* 555-555-5555
* (555)555-5555
* (555) 555-5555
* 555 555 5555
* 5555555555
* 1 555 555 5555
* */

const reg1 = new RegExp("1\\s");
const regParenth = new RegExp("\\(\\d{3}\\)\\s?");
const regNum3 = new RegExp("\\d{3}");
const regNum4 = new RegExp("\\d{4}$");

console.log("(123) 456".match(regParenth.source + regNum3.source));

console.log("1 234".match(/(?(reg1)/)))

function telephoneCheck(str) {
	if (str.search(/[^0-9-()\s]+/g) !== -1) {	// Contains anything other than " ", 0-9, "-", (, )
		return false;
	}

	if (str.search(/\s{2,}/g) !== -1) {	// Contains more than one space in a row
		return false;
	}

	const match1 = str.match("1");	// Search for number 1
	if (match1 !== null) {
		if (match1.length > 1) {	// Can only have one 1
			return false;
		}
		if (str.search("1") !== 1) {	// Must be at beginning
			return false;
		}
		if (str.charAt(1) !== " ") {	// Must be followed by a space
			return false;
		}
	}

	const searchParenth = str.search(/\(/);	// Search for left parentheses
	if (searchParenth === -1) {
		if (str.search(/\)/) !== -1) {	// Cannot contain right parentheses if no left parentheses
			return false;
		}
	} else {
		if (str.match(/\(/).length > 1) {	// Can only have one set of parentheses
			return false;
		}
		if (str.charAt(0) !== /\(/ || str.charAt(4) !== /\)/) {	// Parentheses not in correct spaces
			return false;
		}
	}

	const searchDash = str.search("-");


	return true;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("a"));
