import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  fill: #edf2f4;
  width: ${({ width }) => width || "20px"};
  height: ${({ height }) => height || "20px"};
  transition: fill 0.2s;
  &:hover {
    fill: ${({ activeSection }) =>
      activeSection === 2 ? "#1f8a8a" : "#e76f51b8"};
  }
`;

const Mail = props => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      viewBox="0 0 459 459"
      {...props}
    >
      <path
        d="M211.65,142.8L211.65,142.8C214.2,142.8,214.2,142.8,211.65,142.8c2.55-10.2,5.1-15.3,5.1-22.95v-5.1 c2.55-12.75,2.55-22.95,0-25.5c0,0,0,0,0-2.55l-2.55-2.55l0,0l0,0c0,0,0,2.55-2.55,2.55C206.55,102,206.55,119.85,211.65,142.8 L211.65,142.8z M135.15,318.75c-5.1,2.55-10.2,5.1-12.75,7.65c-17.85,15.3-30.6,33.149-33.15,40.8l0,0l0,0l0,0 C104.55,364.65,119.85,349.35,135.15,318.75C137.7,318.75,137.7,318.75,135.15,318.75C137.7,318.75,135.15,318.75,135.15,318.75z M369.75,280.5c-2.55-2.55-12.75-10.2-48.45-10.2c-2.55,0-2.55,0-5.1,0l0,0c0,0,0,0,0,2.55c17.85,7.65,35.7,12.75,48.45,12.75 c2.55,0,2.55,0,5.1,0l0,0h2.55c0,0,0,0,0-2.55l0,0C372.3,283.05,369.75,283.05,369.75,280.5z M408,0H51C22.95,0,0,22.95,0,51v357 c0,28.05,22.95,51,51,51h357c28.05,0,51-22.95,51-51V51C459,22.95,436.05,0,408,0z M379.95,300.9c-5.101,2.55-12.75,5.1-22.95,5.1 c-20.4,0-51-5.1-76.5-17.85c-43.35,5.1-76.5,10.199-102,20.399c-2.55,0-2.55,0-5.1,2.55c-30.6,53.551-56.1,79.051-76.5,79.051 c-5.1,0-7.65,0-10.2-2.551l-12.75-7.649v-2.55c-2.55-5.101-2.55-7.65-2.55-12.75c2.55-12.75,17.85-35.7,48.45-53.551 c5.1-2.55,12.75-7.649,22.95-12.75c7.65-12.75,15.3-28.05,25.5-45.899c12.75-25.5,20.4-51,28.05-73.95l0,0 c-10.2-30.6-15.3-48.45-5.1-84.15c2.55-10.2,10.2-20.4,20.4-20.4h5.1c5.1,0,10.2,2.55,15.3,5.1c17.851,17.85,10.2,58.65,0,91.8 c0,2.55,0,2.55,0,2.55c10.2,28.05,25.5,51,40.8,66.3c7.65,5.1,12.75,10.2,22.95,15.3c12.75,0,22.95-2.55,33.15-2.55 c30.6,0,51,5.1,58.649,17.85c2.551,5.101,2.551,10.2,2.551,15.3C387.6,288.15,385.05,295.8,379.95,300.9z M214.2,201.45 c-5.1,17.85-15.3,38.25-25.5,61.2c-5.1,10.199-10.2,17.85-15.3,28.05h2.55h2.55l0,0c33.15-12.75,63.75-20.4,84.15-22.95 c-5.101-2.55-7.65-5.1-10.2-7.65C239.7,244.8,224.4,224.4,214.2,201.45z"
        id="drive-pdf"
      />
    </SVG>
  );
};

export default Mail;
