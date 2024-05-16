// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	//
	console.log(string_numbers);
	var result = 0;

	if (string_numbers.length < 4 || string_numbers.length > 6) {
		return 'You need to input 4-6 numbers';
	} else {
		return result;
	}
	
};
