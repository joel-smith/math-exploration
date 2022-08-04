import Foobar from "./Foobar";

describe('Foobar', () => {
    it('Calculates the square root for a positive number', () => {
        expect((new Foobar()).squareRoot(4)).toEqual(2);
    });

    it('Calculates the square root for a negative number', () => {
        expect((new Foobar()).squareRoot(-4)).toEqual({im: 2, re: 0});
    });
});