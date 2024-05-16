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

	it('should return "You need to input 4-6 numbers" for an array > 6', function() {
		expect(calculator.add([1, 2, 3, 4, 5, 6, 7])).toEqual('You need to input 4-6 numbers');
	});

	it('should return "0" for an array without 3 and 5', function() {
		expect(calculator.add([1, 2, 4, 6, 1])).toEqual(0);
	});

	it('should return "6" for this array [1, 2, 3, 4, 3, 3]', function() {
		expect(calculator.add([1, 2, 3, 4, 3, 3])).toEqual(6);
	});
});
