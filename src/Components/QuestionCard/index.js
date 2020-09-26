import React from "react";
import "./questionCard.css";
import Button from "react-bootstrap/Button";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export const QuestionCard = () => {
  return (
    <div className="questionCard_Wrapper">
      <div className="questionContent">
        <div className="questionStats p-1">
          <p>1/10</p>
          <p className="font-weight-bold">Easy</p>
          <p>5:00</p>
        </div>
        <p className="text-center question p-3">What is Your Country Name ?</p>
        <p className="text-center score">Score : 20 PTS</p>
        <Container>
        <Row className="m-3">
          <Col sm="6">
            <p className="Hello rounded-pill p-3">
              A : Lol Is here
            </p>
          </Col>
          <Col sm="6">
            <p className="Hello rounded-pill p-3">
              A : Lol Is here
            </p>
          </Col>
          <Col sm="6">
            <p className="Hello rounded-pill p-3">
              A : Lol Is here
            </p>
          </Col>
          <Col sm="6">
            <p className="Hello rounded-pill p-3">
              A : Lol Is here
            </p>
          </Col>
         
        </Row>
        <button className="btn-block nextBtn">Next</button>
        </Container>
      </div>
      {/* <Button>Next</Button> */}
    </div>
  );
};
