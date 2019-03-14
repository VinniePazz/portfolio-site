import React from "react";
import styled from 'styled-components';
import { AboutLink } from '../../components/styled/PuzzleLinks'

const SVG = styled.svg`
	fill: #EDF2F4;
	width: 30%;
	height: 30%;
	transition: fill 0.2s;

	${AboutLink}:hover & {
    fill: #16364e;
  }
`;

const AboutLogo = () => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      viewBox="0 0 28.874 28.873"
    >
      <g>
        <g>
          <g>
            <circle cx="11.053" cy="8.619" r="2.35"  />
            <circle cx="16.161" cy="17.37" r="1.507"  />
            <path
              d="M24.423,12.417c1.894-9.269-5.637-13.511-13.995-12.176C2.069,1.574,2.383,6.63,1.891,9.043    C0.912,15.09,7.137,21.848,7.137,21.848l-0.355,7.025h10.136l0.776-3.23c0,0,0.44,0.738,3.059,0.96    c2.62,0.222,2.301-2.976,2.301-2.976s1.744-0.77,1.744-1.346c0-0.578-1.032-1.322-1.032-1.322s1.109,0.199,1.511-0.268    c0.399-0.467-0.49-2.154-0.49-2.154s1.368-0.035,2.174-0.922C27.767,16.729,24.423,14.106,24.423,12.417z M9.946,13.684    c0,0-0.057-0.626-0.085-0.939c-0.252-0.067-0.495-0.156-0.728-0.26c-0.276,0.234-0.828,0.701-0.828,0.701    s-0.094,0.052-0.141,0.078c-0.047,0.025-0.925-0.078-0.925-0.078l-1.51-1.783v-1.065c0,0,0.581-0.492,0.871-0.738    C6.537,9.361,6.499,9.118,6.482,8.867C6.101,8.692,5.341,8.345,5.341,8.345L5.036,7.458l0.035-0.145l0.975-2.124l1.031-0.271    c0,0,0.656,0.3,0.983,0.449c0.2-0.162,0.416-0.309,0.644-0.438C8.671,4.534,8.607,3.743,8.607,3.743L9.361,2.99l2.328-0.188    l0.754,0.754c0,0,0.048,0.601,0.073,0.901c0.303,0.082,0.592,0.191,0.867,0.324c0.252-0.217,0.757-0.649,0.757-0.649h1.067    l1.521,1.774V6.97c0,0-0.617,0.528-0.926,0.793c0.046,0.215,0.07,0.437,0.081,0.661c0.39,0.225,1.168,0.675,1.168,0.675    l0.271,1.031l-1.169,2.022l-1.031,0.271c0,0-0.605-0.35-0.908-0.524c-0.171,0.133-0.354,0.251-0.544,0.36    c0.036,0.404,0.109,1.211,0.109,1.211l-0.753,0.754l-2.325,0.212L9.946,13.684z M19.431,19.637l-0.661,0.174    c0,0-0.388-0.225-0.583-0.336c-0.11,0.085-0.228,0.16-0.35,0.23c0.023,0.26,0.07,0.776,0.07,0.776l-0.482,0.483l-1.491,0.136    l-0.483-0.483c0,0-0.037-0.4-0.055-0.603c-0.162-0.043-0.317-0.101-0.466-0.167c-0.177,0.15-0.531,0.449-0.531,0.449    s-0.061,0.033-0.09,0.051c-0.03,0.018-0.594-0.051-0.594-0.051l-0.968-1.145v-0.684c0,0,0.372-0.315,0.558-0.473    c-0.04-0.152-0.064-0.31-0.075-0.471c-0.245-0.111-0.732-0.335-0.732-0.335l-0.196-0.567l0.022-0.094l0.625-1.361l0.662-0.174    c0,0,0.42,0.191,0.63,0.288c0.128-0.104,0.267-0.197,0.413-0.281c-0.02-0.253-0.061-0.762-0.061-0.762l0.483-0.483l1.493-0.12    l0.484,0.483c0,0,0.03,0.385,0.046,0.578c0.194,0.053,0.38,0.123,0.556,0.208c0.162-0.139,0.486-0.417,0.486-0.417h0.685    l0.977,1.14v0.684c0,0-0.396,0.339-0.595,0.509c0.03,0.138,0.045,0.28,0.052,0.425c0.25,0.145,0.75,0.432,0.75,0.432l0.173,0.662    L19.431,19.637z"
              
            />
          </g>
        </g>
      </g>
    </SVG>
  );
};

export default AboutLogo;
