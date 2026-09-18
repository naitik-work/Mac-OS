import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";
import { pdfjs } from "react-pdf";

const Resume = ({ windowName }) => {
  return (
    <MacWindow windowName={windowName}>
      <div className="resume-window">
        <iframe src="/Hamza__Resume.pdf" title="Resume" frameBorder="0" />
      </div>
    </MacWindow>
  );
};

export default Resume;
