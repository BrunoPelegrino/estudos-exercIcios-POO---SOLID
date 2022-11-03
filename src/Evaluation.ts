// Evaluation.ts

import Teacher from './Teacher';

export default abstract class Evaluation {
  protected _teacher: Teacher;

  constructor(teacher: Teacher, protected _score: number) {
    this._teacher = teacher;
    this.score = _score;
  }

  getTeacher(): Teacher {
    return this._teacher;
  }

  setTeacher(value: Teacher) {
    this._teacher = value;
  }

  getScore(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontução deve ser positiva.');

    /* if (this.type === 'prova' && value > 25) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }

    if (this.type === 'trabalho' && value > 50) {
      throw new Error('A pontução deve ser menor que 50 pontos.');
    } */

    this._score = value;
  }

  /* get type(): string {
    return this._type;
  }

  set type(value: string) {
    if (!['prova', 'trabalho'].includes(value)) {
      throw new Error('O tipo de avaliação não é válido.');
    }

    this._type = value;
  } */
}