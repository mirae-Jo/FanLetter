import React from "react";
import styled from "styled-components";
import { ReactComponent as TodoSvg } from "../../assets/newJeansLogo.svg";
import HeaderJpg from "../../assets/header.jpg";

const StHeader = styled.header`
  width: 100%;
  height: 500px;
  background: url(${HeaderJpg}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Header() {
  return (
    <div>
      <StHeader>
        <TodoSvg />
      </StHeader>
    </div>
  );
}

export default Header;
