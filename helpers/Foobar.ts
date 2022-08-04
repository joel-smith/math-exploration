import {all, create} from 'mathjs'

const config = {}


export default class Foobar {
    private math;

    constructor() {
        this.math = create(all, config)
    }

    evaluate(mathExpression: string, precision: number | null = null) {
        let resultNode = this.math.evaluate(mathExpression);

        if (precision) {
            resultNode = this.math.format(resultNode, precision);
        }

        return resultNode.toString();
    }
}