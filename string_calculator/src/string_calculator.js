// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	//
	console.log(string_numbers);

	if (string_numbers.length === 0) {
		return 'You need to input 4-6 numbers';
	}
	if (string_numbers.length < 4) {
		return 'You need to input 4-6 numbers';
	}
};
