/* eslint-disable react-hooks/exhaustive-deps */
import logo from "../lib/assets/images/Logo_L.png";
import React, { useState } from "react";
import * as ButtonStyles from "../styles/ButtonStyles";
import * as InputStyles from "../styles/InputStyles";
import * as LayoutStyles from "../styles/LayoutStyles";
import Checkbox from "../components/Checkbox";
import LocalNav from "../components/LocalNav";
import Divider from "../components/Divider";
import { isValid } from "../lib/utils/validation";

export default function Login() {
  const [authInfo, setAuthInfo] = useState({ email: "", password: "" });

  const canLogin =
    isValid(authInfo.email).email && isValid(authInfo.password).password;

  const localNavList = [
    { label: "회원가입", callbackFn: () => console.log("회원가입") },
    { label: "비밀번호 찾기", callbackFn: () => console.log("비밀번호 찾기") },
  ];

  return (
    <LayoutStyles.Wrapper>
      <LayoutStyles.LoginCard>
        <img src={logo} alt="logo" />
        <ButtonStyles.LongButton size="lg" children="QR" />
        <ButtonStyles.LongButton size="lg" children="PIN" />
        <LayoutStyles.LoginForm>
          <InputStyles.InputText
            placeholder="이메일을 입력하세요"
            type="email"
            value={authInfo.email}
            onChange={(e) =>
              setAuthInfo({ ...authInfo, email: e.target.value })
            }
          />
          <InputStyles.InputText
            placeholder="비밀번호를 입력하세요"
            type="password"
            value={authInfo.password}
            onChange={(e) =>
              setAuthInfo({ ...authInfo, password: e.target.value })
            }
          />
          <ButtonStyles.LongButton children="로그인" disabled={!canLogin} />
          <LayoutStyles.Flex>
            <Checkbox id="auto-login" label="자동로그인" />
            <LocalNav list={localNavList} />
          </LayoutStyles.Flex>
          <Divider children="다른 방법으로 로그인" />
          <LayoutStyles.Flex justify="center">
            <ButtonStyles.CircleButton />
            <ButtonStyles.CircleButton />
          </LayoutStyles.Flex>
        </LayoutStyles.LoginForm>
      </LayoutStyles.LoginCard>
    </LayoutStyles.Wrapper>
  );
}
