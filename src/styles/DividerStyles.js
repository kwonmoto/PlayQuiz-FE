import styled from "styled-components";
import { quizRunnerColor } from "./StyleProperties";

export const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
  user-select: none;
`;

export const DividerBorder = styled.div`
  border-bottom: 1px solid ${quizRunnerColor.sub};
  width: 100%;
`;

export const DividerContent = styled.span`
  padding: 0px 10px 0px 10px;
  color: white;
  white-space: nowrap;
`;
