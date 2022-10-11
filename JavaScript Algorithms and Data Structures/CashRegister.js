function checkCashRegister (price, cash, cid) {
// module.exports = function (price, cash, cid) {
	const change = [];
	let diff = cash - price;
	let counter;

	const money = cid.reduce((agg, [name, amount]) => {
		return {
			[name]: amount, ...agg
		};
	}, {});

	const totalCID = Object.getOwnPropertyNames(money).reduce((total, v) => (total += money[v]), 0);

	if (diff === totalCID) {
		return {
			status: "CLOSED",
			change: cid
		};
	}

	if (diff > totalCID) {
		console.log("Diff > cash");
		return {
			status: "INSUFFICIENT_FUNDS",
			change: []
		};
	}

	const evaluator = (key, value) => {
		counter = 0;
		counter = ~~(diff / value);
		while (money[key] - value * counter < 0 && counter > 0) {
			counter--;
		}
		if (counter !== 0) {
			console.log(counter, value);
			change.push([key, value * counter]);
			diff -= value * counter;
		}
		diff = parseFloat(diff.toFixed(2));
	};

	evaluator("ONE HUNDRED", 100);
	evaluator("TWENTY", 20);
	evaluator("TEN", 10);
	evaluator("FIVE", 5);
	evaluator("ONE", 1);
	evaluator("QUARTER", 0.25);
	evaluator("DIME", 0.10);
	evaluator("NICKEL", 0.05);
	evaluator("PENNY", 0.01);

	if (diff !== 0) {
		console.log(`change remaining: ${diff}`);
		return {
			status: "INSUFFICIENT_FUNDS",
			change: []
		};
	}

	return {
		status: "OPEN",
		change: change
	};
};