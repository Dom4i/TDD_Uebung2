// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	//
	console.log(string_numbers);
	var result = 0;

	if (string_numbers.length < 4 || string_numbers.length > 6) {
		return 'You need to input 4-6 numbers';
	} else {
		
		
		string_numbers.forEach(function(number) {
			if (number === 3 ) {
				result += 2;
			} else if (number === 5) {
				result += 4;
			}
		});
		return result;
	}
		
};
