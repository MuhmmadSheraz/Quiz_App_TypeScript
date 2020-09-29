import React, { useEffect, useState } from 'react';
import './App.css';
import { FilteredQuestions } from './Types/quizQuestionTYpes'
import { getQuestions } from './Services/quizServices'
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuestionCard } from "./Components/QuestionCard/questionCard"
// import { ResultCard } from "./Components/ResultCard"


function App() {
  let [iteration, setIterations] = useState(0)
  let [allQuestions, setAllQuestions] = useState<FilteredQuestions[]>([])
  const totalQuestions: number = 10
  const fetchindData = async () => {
    const data: FilteredQuestions[] = await getQuestions(totalQuestions, "easy");
    setAllQuestions(data)
  }
  useEffect(() => {
    fetchindData()
  }, [])
  const nextQuestion = (correct_answer: string) => {
    console.log(correct_answer, "from APP Parent")
    if (iteration === totalQuestions) return alert("Quiz Completed")
    else { setIterations(iteration++) }

  }
  if (allQuestions.length !== 0) {
    return <QuestionCard
      question={allQuestions[iteration].question}
      options={allQuestions[iteration].options}
      correct_answer={allQuestions[iteration].correct_answer}
      callBack={nextQuestion}
    />
  }
  return (
    // <ResultCard />
    <div className="mainWrapper">
      <div className="content_main">
        <p className="headerheading">Welcome To Quiz </p>
        <button className="startBtn rounded-pill">Start Quiz</button>

      </div>
    </div>

  )
}

export default App;
