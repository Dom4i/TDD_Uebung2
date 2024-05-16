describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return "You need to input 4-6 numbers" for an empty array', function() {
		expect(calculator.add([])).toEqual('You need to input 4-6 numbers');
	});
});
