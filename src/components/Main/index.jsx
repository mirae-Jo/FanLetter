import React, { useContext, useState } from "react";
import styled from "styled-components";
import LetterInputBox from "./LetterInputBox";
import MemberBtn from "./MemberBtn";
import LetterBoxPre from "./LetterBoxPre";
import { MainContext } from "../../context/MainContext";

// 배열

const memberArr = [
  { id: 1, name: "혜인" },
  { id: 2, name: "하니" },
  { id: 3, name: "다니엘" },
  { id: 4, name: "해린" },
  { id: 5, name: "민지" },
];

function Main() {
  const data = useContext(MainContext);
  const [selectedMemberId, setSelectedMemberId] = useState(memberArr[0].id);

  const MemberInputHandler = (memberId) => {
    setSelectedMemberId(memberId);
  };
  return (
    <div>
      <StMain>
        <MemberBtn
          selectedMemberId={selectedMemberId}
          MemberInputHandler={MemberInputHandler}
          memberArr={memberArr}
        />
        <LetterInputBox
          setLetters={data.setLetters}
          letters={data.letters}
          memberArr={memberArr}
        />
        <LetterBoxPre
          letters={data.letters}
          setLetters={data.setLetters}
          selectedMemberId={selectedMemberId}
          memberArr={memberArr}
        />
      </StMain>
    </div>
  );
}

// styled-component
const StMain = styled.div`
  width: 600px;
  margin: 0 auto;
`;

export default Main;
