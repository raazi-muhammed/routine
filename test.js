const array = [1, 2, 3, 4];

function sumPromise(_array) {
	const sum = _array.reduce((acc, value) => (acc += value));

	return new Promise((resolve, reject) => {
		if (sum > 10) {
			reject("not in limit");
		}
		resolve(sum);
	});
}

sumPromise(array)
	.then(() => {
		console.log("sum greater than 10");
	})
	.catch(() => {
		console.log("not in limit");
	});
