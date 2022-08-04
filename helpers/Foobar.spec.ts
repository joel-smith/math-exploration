import Foobar from "./Foobar";

describe('Foobar', () => {
    it('Calculates the square root for a positive number', () => {
        expect((new Foobar()).squareRoot(4)).toEqual(2);
    });

    it('Calculates the square root for a negative number', () => {
        expect((new Foobar()).squareRoot(-4)).toEqual({im: 2, re: 0});
    });

    it('can evaluate expressions', () => {
        const mathExpression = "3*2";

        expect((new Foobar()).evaluate(mathExpression)).toEqual(6);
    });

    it('can evaluate expressions with complex numbers', () => {
        const mathExpression = "i*i*i";

        expect((new Foobar()).evaluate(mathExpression)).toEqual({im: -1, re: -0});
    });
});