import Foobar from "./Foobar";

describe('Foobar', () => {
    it('Calculates the square root for a positive number', () => {
        expect((new Foobar()).squareRoot(4)).toEqual(2);
    });

    it('Calculates the square root for a negative number', () => {
        expect((new Foobar()).squareRoot(-4)).toEqual({im: 2, re: 0});
    });

    test.each([
        ['sqrt(3^2 + 4^2)', '5'],
        ['sqrt(-4)', '2i'],
        ['2 inch to cm', '5.08 cm'],
        ['cos(45 deg)', '0.7071067811865476'],
        ['3*2', '6'],
        ['i*i*i', '-i']
    ])('can evaluate (%s)', (a, expected) => {
        expect(new Foobar().evaluate(a)).toEqual(expected);
    });


});