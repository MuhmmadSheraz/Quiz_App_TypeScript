import React from "react";
import "./resultCard.css";
export const ResultCard = () => {
  return (
    <div className="questionCard_Wrapper">
      <div className="resultContent">
        <div className="p-4">
          <span className=" helloText text-center p-3">
            <h1 className="P-2">**** Your Score ****</h1>
            <h1 className="P-2">Congractulation</h1>
            <h1 className="P-2">9/10</h1>
            <h1 className="P-2">Keep Up The Good Work</h1>
          </span>
        </div>
      </div>
      {/* <Button>Next</Button> */}
    </div>
  );
};
