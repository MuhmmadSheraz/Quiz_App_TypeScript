import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getQuestions } from './Services/quizServices'
import 'bootstrap/dist/css/bootstrap.min.css';
import {QuestionCard} from "./Components/QuestionCard"


function App() {
  return (
    <QuestionCard/>
    // <div className="mainWrapper">
    //   <div className="content_main">
    //     <p className="headerheading">Welcome To Quiz </p>
    //     <button className="startBtn rounded-pill">Start Quiz</button>
        
    //   </div>
    // </div>

  )
}

export default App;
