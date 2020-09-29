import React, { useState } from "react";
import "./questionCard.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { propsQuestion } from "../../Types/quizQuestionTYpes"

export const QuestionCard: React.FC<propsQuestion> = ({ question, options, current_Score, callBack, currentIteration }) => {
  const [isClicked, setIsClicked] = useState<number>()
  const [userAnswer, setUserAnswer] = useState<string>("")
  const stateChanged = () => {
    setIsClicked(100)
    setUserAnswer("")
  }

  // Logic Here

  const selectedAnswer = (x: string, index: number, e: any) => {
    setUserAnswer(x)
    setIsClicked(index)
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
          <p>{currentIteration + 1}/5</p>
        </div>
        <p className="text-center question1 p-3">{question}</p>
        <p className="text-center score">Score : <span>{current_Score}</span> PTS</p>
        <Container>
          <Row className="m-3">
            {options.map((x, index) => {
              return <Col sm="6" key={index}>
                <p className={isClicked === index ? `isClicked rounded p-3 ` : `Hello rounded p-3`} onClick={(e) => selectedAnswer(x, index, e)} >
                  {x}
                </p>
              </Col>
            })}

          </Row>
          <button className="btn-block nextBtn mb-3" onClick={() => mainFunction()}>Next</button>
        </Container>
      </div>
    </div >
  );
};
