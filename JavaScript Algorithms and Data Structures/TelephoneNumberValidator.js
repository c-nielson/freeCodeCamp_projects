/*
 * The following are considered valid phone number formats:
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 * 1 555-555-5555
 * 1 (555) 555-5555
 * 1(555)555-5555
 * */

const reg1 = new RegExp("^1\\s?");
const regParenth = new RegExp("\\(\\d{3}\\)\\s?");
const regNum3 = new RegExp("\\d{3}\\s?");
const regNum4 = new RegExp("\\d{4}$");

const regParenth10 = new RegExp(regParenth.source + regNum3.source + "-" + regNum4.source);	// Full 10-digit phone
																							// number using parentheses
const regNoParenth = new RegExp(
	"(?:" + regNum3.source + "(?!-)" + regNum3.source + "(?!-)" + regNum4.source + "|" + regNum3.source + "(?<! )-" + regNum3.source + "(?<! )-" + regNum4.source + ")");	// Full 10-digit phone number without parentheses
const reg1Full = new RegExp(reg1.source + "(" + regParenth10.source + "|" + regNoParenth.source + ")");
const regNo1Full = new RegExp("^" + regParenth10.source + "|^" + regNoParenth.source);

function telephoneCheck(str) {
	// Contains anything other than " ", 0-9, "-", (, )
	if (str.search(/[^0-9-()\s]+/g) !== -1) {
		return false;
	}

	// Contains country code
	if (str.replace(/\D/g, "").length === 11) {
		console.log("length 11");
		return str.search(reg1Full) !== -1;
	}

	// Numbers separated by " " or "-"
	return str.search(regNo1Full) !== -1;
}

console.log(telephoneCheck("11 555-555-5555"));
