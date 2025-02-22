import React from "react";

const JudgementItem = ({ details }) => {
  const { case_number, decision_date, judge, disposal_nature, headnotes, decision } = details;

  return (
    <li className="judgement-item">
      <h3>{case_number}</h3>
      <p><strong>Judges:</strong> {Array.isArray(judge) ? judge.join(", ") : judge}</p>
      <p><strong>Decision Date:</strong> {decision_date}</p>
      <p><strong>Disposal Nature:</strong> {disposal_nature}</p>
      <p><strong>Headnotes:</strong> {headnotes}</p>
      <p><strong>Decision:</strong> {decision}</p>
    </li>
  );
};

export default JudgementItem;
