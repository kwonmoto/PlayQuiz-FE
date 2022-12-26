import styled from "styled-components";
import { quizRunnerColor } from "./StyleProperties";

export const Flex = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  border-radius: 20px;
`;

export const LoginForm = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 30px 15px;
  margin: 10px;
  border-radius: 20px;
  background: ${quizRunnerColor.main};
`;
