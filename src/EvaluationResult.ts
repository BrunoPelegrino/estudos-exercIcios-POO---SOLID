import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class EvaluationResult {
    protected _evaluation: Evaluation 
    private _score: number;

    constructor (evaluation: Evaluation, score: number) {
        this._evaluation = evaluation;
        this._score = score
    }

    getEvaluation (): Evaluation {
        return this._evaluation
    }

    setEvaluation (value: Evaluation): Evaluation {
        return this._evaluation = value
    }

    getscore (): number {
        return this._score
    }

    /* validateScore(value: number, type: string, max: number) {
        if (this._type === type && value > max) {
            throw new Error(`A pontução deve ser menor que ${max} pontos.`);
          }
    } */

    setScore (value: number): number {
        if (value < 0) throw new Error ('score nao pode ser menor que 0');
        // this.validateScore(value, 'prova', 25);
        // this.validateScore(value, 'trabalho', 50);
        return this._score = value
    }
}