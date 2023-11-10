import React from "react";
import styled from "styled-components";
import { ReactComponent as TodoSvg } from "./assets/newJeansLogo.svg";

// 1. styled-components를 만들었습니다.
const StHeader = styled.header`
  width: 100%;
  height: 500px;
  background: url("./assets/header.jpg") no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StWrap = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
`;
const StBtn = styled.button`
  width: 100px;
  height: 60px;
  border: 1px solid ${(props) => props.borderColor}; // 4.부모 컴포넌트에서 보낸 props를 받아 사용합니다.
  border-radius: 10px;
  margin: 30px auto;
  background-color: #fff;
  color: #46d442;
  &:hover {
    cursor: pointer;
    background-color: #46d442;
    color: #fff;
  }
`;

const App = () => {
  return (
    <div>
      <StHeader>
        <TodoSvg />
      </StHeader>
      {/*  <StWrap>
        <StBtn borderColor="#46d442">혜인</StBtn>
        <StBtn borderColor="#46d442">하니</StBtn>
        <StBtn borderColor="#46d442">다니엘</StBtn>
        <StBtn borderColor="#46d442">해린</StBtn>
        <StBtn borderColor="#46d442">민지</StBtn>
      </StWrap> */}
    </div>
  );
};

export default App;
