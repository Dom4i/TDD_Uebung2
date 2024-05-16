describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return "You need to input 4-6 numbers" for an empty array', function() {
		expect(calculator.add([])).toEqual('You need to input 4-6 numbers');
	});

	it('should return "You need to input 4-6 numbers" for an array < 4', function() {
		expect(calculator.add([3, 5, 6])).toEqual('You need to input 4-6 numbers');
	});
});
