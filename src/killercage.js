export class KillerCage {
    #edgeLength;
    #allowedDigits = [];
    #requiredDigits = [];
    #requiredCombinator = 'AND'

    constructor(sudokuEdgeLength) {
        this.#edgeLength = sudokuEdgeLength;
    }

    getSum() {
        return this.#edgeLength * (this.#edgeLength + 1) / 2;
    }
}
