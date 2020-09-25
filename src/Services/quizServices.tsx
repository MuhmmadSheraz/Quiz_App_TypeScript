export const getQuestions = async (totalQuestions: number, level: string) => {
    const res = fetch(`https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`)
    return res
}