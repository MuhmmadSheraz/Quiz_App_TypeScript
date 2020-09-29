import { RawQuestions, FilteredQuestions } from '../Types/quizQuestionTYpes'
export const getQuestions = async (totalQuestions: number, level: string): Promise<FilteredQuestions[]> => {
    console.log("total Questions ",totalQuestions)
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let { results } = await res.json()
    const quizArray: FilteredQuestions[] = results.map((x: RawQuestions) => {
        return {
            question: x.question,
            options: x.incorrect_answers.concat(x.correct_answer),
            correct_answer: x.correct_answer
        }
    })
    return quizArray
} 