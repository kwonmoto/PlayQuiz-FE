import styled from "styled-components";
import { quizRunnerColor } from "./StyleProperties";

export const InputText = styled.input`
  width: 250px;
  height: 30px;
  margin: 10px;
  border: none;
  border-bottom: 1px solid ${quizRunnerColor.secondary};
  background: transparent;
  color: white;
  font-size: 18px;
  text-align: left;

  ::placeholder {
    color: ${quizRunnerColor.secondary};
  }

  &:focus {
    outline: none;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;

  p {
    margin: 0px 0px 0px 2px;
    color: white;
  }
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid ${quizRunnerColor.input};
  border-radius: 5px;
  background-color: ${quizRunnerColor.create};
  cursor: pointer;

  &:hover {
    background-color: ${quizRunnerColor.sub};
  }

  &:active {
    background-color: ${quizRunnerColor.third};
  }

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${quizRunnerColor.main};
  }
`;
