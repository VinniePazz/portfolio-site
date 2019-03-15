import React, { Component } from "react";
import styled from "styled-components";
import { SkillsLink } from "../../components/styled/PuzzleLinks";
import { Item } from "../../components/Navigation";

const SVG = styled.svg`
  fill: #edf2f4;
  width: ${({ width }) => width || "30%"};
  height: ${({ height }) => height || "30%"};
  transition: fill 0.2s;

  ${SkillsLink}:hover & {
    fill: ${({ theme }) => theme.lightDarkHover};
  }

  ${Item}:hover & {
    fill: ${({ theme }) => theme.lightDarkHover};
  }
`;

const SkillsLogo = props => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      width="30%"
      height="30%"
      viewBox="0 0 94.667 94.667"
      {...props}
    >
      <g transform="matrix(0.9998 0 0 0.9998 0.00946621 0.00946621)">
        <path
          d="M82.413,9.146h9.346V83.33h-9.346V9.146z M63.803,11.831l-1.294,0.402c-1.62,0.512-3.524-0.201-4.179-1.558 c-0.314-0.657-0.329-1.383-0.041-2.047c0.334-0.768,1.044-1.369,1.945-1.65l14.591-4.545l1.776,13.001 c0.1,0.662-0.086,1.338-0.525,1.898c-0.537,0.688-1.4,1.134-2.368,1.226c-0.116,0.012-0.246,0.018-0.371,0.018 c-1.651,0-3.053-1.052-3.261-2.444l-0.225-1.967C52.988,37.514,14.157,62.539,12.472,63.617c-0.572,0.366-1.256,0.561-1.98,0.561 c-0.976,0-1.894-0.36-2.517-0.991c-0.573-0.577-0.841-1.313-0.758-2.069c0.087-0.785,0.558-1.507,1.294-1.975 C8.906,58.889,47.367,34.026,63.803,11.831z M74.859,25.623v57.705h-9.344V25.623H74.859z M58.518,42.77v40.56h-9.347V42.77 H58.518z M41.617,60.583v22.744h-9.345V60.583H41.617z M23.75,69.494v13.834h-9.344V69.494H23.75z M94.666,92.234H0V85.3h94.667 L94.666,92.234L94.666,92.234z"
          // fill="#EDF2F4"
        />
      </g>
    </SVG>
  );
};

export default SkillsLogo;
