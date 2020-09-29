import React, { useEffect, useState } from "react";
import "./questionCard.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { propsQuestion } from "../../Types/quizQuestionTYpes"

export const QuestionCard: React.FC<propsQuestion> = ({ question, options, correct_answer, callBack }) => {
  const [isClicked, setIsClicked] = useState<number>()

  // Logic Here

  const selectedAnswer = (x: string, index: number, e: any) => {
    setIsClicked(index)
    // e.target.classList.add('isClicked')
    // e.target.classList.remove('Hello')
    // console.log(e)
    // console.log(options[index])

    console.log("Option Clicked ! )", x)
  }

  return (
    <div className="questionCard_Wrapper">
      <div className="questionContent">
        <div className="questionStats p-1">
          <p>1/10</p>
          <p className="font-weight-bold">Easy</p>
          <p>5:00</p>
        </div>
        <p className="text-center question p-3">{question}</p>
        <p className="text-center score">Score : 20 PTS</p>
        <Container>
          <Row className="m-3">
            {options.map((x, index) => {
              // let key = Math.random() * 100
              return <Col sm="6" key={index}>
                <p className={isClicked == index ? `isClicked rounded-pill p-3 ` : `Hello rounded-pill p-3`} onClick={(e) => selectedAnswer(x, index, e)} >
                  A : {x}
                </p>
              </Col>
            })}

          </Row>
          <button className="btn-block nextBtn" onClick={() => callBack(correct_answer)}>Next</button>
        </Container>
      </div>
    </div >
  );
};
