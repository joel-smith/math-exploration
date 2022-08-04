import Foobar from "./Foobar";

describe('Foobar', () => {
    it('Greets you', () => {
        expect((new Foobar()).greet()).toEqual("Hello");
    });
});