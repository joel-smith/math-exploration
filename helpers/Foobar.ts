import { create, all } from 'mathjs'
const config = { }


export default class Foobar {
    private math;

    constructor() {
        this.math = create(all, config)
    }

    squareRoot(input: number): any {
        return this.math.sqrt(input);
    }

}