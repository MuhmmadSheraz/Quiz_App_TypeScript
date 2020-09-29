import React, { useEffect, useState } from "react";
import "./questionCard.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { propsQuestion } from "../../Types/quizQuestionTYpes"

export const QuestionCard: React.FC<propsQuestion> = ({ question, options, current_Score, callBack, currentIteration }) => {
  // export const changeIndex = () => setIsClicked(99)
  const [isClicked, setIsClicked] = useState<number>()
  const [userAnswer, setUserAnswer] = useState<string>("")
  const stateChanged = () => {
    setIsClicked(100)
  }
  
  // Logic Here

  const selectedAnswer = (x: string, index: number, e: any) => {
    setUserAnswer(x)
    setIsClicked(index)
    console.log(userAnswer, "User Answer")

    console.log("Option Clicked ! )", x)
  }
  const mainFunction = () => {
    callBack(userAnswer)
    stateChanged()
  }

  return (
    <div className="questionCard_Wrapper">
      <div className="questionContent">
        <div className="questionStats p-1">
          <p className="font-weight-bold">Easy</p>
          <p>{currentIteration + 1}/10</p>
        </div>
        <p className="text-center question p-3">{question}</p>
        <p className="text-center score">Score : <span>{current_Score}</span> PTS</p>
        <Container>
          <Row className="m-3">
            {options.map((x, index) => {
              let lol = Math.random() * 100
              return <Col sm="6" key={index}>
                <p className={isClicked == index ? `isClicked rounded-pill p-3 ` : `Hello rounded-pill p-3`} onClick={(e) => selectedAnswer(x, index, e)} >
                  {x}
                </p>
              </Col>
            })}

          </Row>
          <button className="btn-block nextBtn" onClick={() => mainFunction()}>Next</button>
        </Container>
      </div>
    </div >
  );
};
