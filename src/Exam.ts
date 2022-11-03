import Evaluation from "./Evaluation"
import Teacher from "./Teacher"

export default class Exam extends Evaluation {
    constructor (teacher: Teacher, score: number) {
        super(teacher, score)
    }

    getTeacher (): Teacher {
        return super._teacher
    }

    setTeacher(newTeacher: Teacher): Teacher {
        return super._teacher = newTeacher;
    }

    getScore (): number {
        return super.score
    }

    setScore(value: number) {
        if (value > 50) throw new Error('A pontução deve ser menor que 50 pontos.');
    
        super.score = value;
      }
}