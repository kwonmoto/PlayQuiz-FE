import styled from "styled-components";
import { quizRunnerColor } from "./StyleProperties";

export const LongButton = styled.button`
  width: ${(props) => {
    if (props.size === "lg") {
      return "300px";
    } else if (props.size === "sm") {
      return "200px";
    } else return "250px";
  }};
  height: 40px;
  background-color: ${quizRunnerColor.third};
  border: none;
  border-radius: 30px;
  text-align: center;
  color: ${quizRunnerColor.main};
  font-size: 18px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${quizRunnerColor.sub};
    color: ${quizRunnerColor.main};
  }
  &:disabled {
    background-color: ${quizRunnerColor.input};
    color: ${quizRunnerColor.background};
    cursor: default;
  }
`;

export const LocalNavLayout = styled.div`
  color: white;
  user-select: none;
`;

export const Link = styled.span`
  color: white;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${quizRunnerColor.third};
  }
`;

export const CircleButton = styled.div`
  width: 45px;
  height: 45px;
  margin: 0px 10px;
  border-radius: 30px;
  background-color: ${quizRunnerColor.sub};
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${quizRunnerColor.input};
  }
`;
