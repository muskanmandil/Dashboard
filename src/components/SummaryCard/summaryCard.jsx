import React from "react";
import "./summaryCard.css";

const SummaryCard = (props) => {
  return (
    <div className="card">
      <p className="cardTitle">{props.title}</p>
      <p className="cardValue">{props.value}</p>
    </div>
  );
};

export default SummaryCard;
