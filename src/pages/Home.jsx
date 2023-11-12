import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as TodoSvg } from "../assets/newJeansLogo.svg";
import HeaderJpg from "../assets/header.jpg";
import uuid from "react-uuid";

// 1. styled-components를 만들었습니다.
const StAll = styled.div`
  background-color: #333;
`;
const StHeader = styled.header`
  width: 100%;
  height: 500px;
  background: url(${HeaderJpg}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StMain = styled.div`
  width: 600px;
  margin: 0 auto;
`;
const StWrap = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
`;
const StBtn = styled.button`
  width: 100px;
  height: 60px;
  border: 2px solid ${(props) => props.bordercolor}; // 4.부모 컴포넌트에서 보낸 props를 받아 사용합니다.
  border-radius: 10px;
  margin: 30px auto;
  background-color: ${(props) => (props.selected ? "aqua" : "transparent")};
  color: ${(props) => (props.selected ? "navy" : "aqua")};
  font-weight: 900;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    background-color: aqua;
    color: navy;
  }
`;
const StMember = styled.form`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #fff;
  background-image: url(${(props) => props.backgroundImage});
`;
const StInputWrap = styled.div`
  width: 500px;
  height: 80px;
  margin: 0 auto;
`;
const StSpan = styled.span`
  float: left;
  width: 70px;
`;
const StInput = styled.input`
  width: 400px;
  height: 50px;
  display: block;
`;
const StButton = styled.button``;
const StLetterBox = styled.div`
  width: 600px;
  height: 200px;
  margin: 20px 0;
  background-color: #eee;
`;
const StH3 = styled.h3`
  font-weight: bold;
`;
const StFooter = styled.footer`
  height: 50px;
  background-color: #444;
`;

// 배열
const memberArr = [
  { id: 1, name: "혜인" },
  { id: 2, name: "하니" },
  { id: 3, name: "다니엘" },
  { id: 4, name: "해린" },
  { id: 5, name: "민지" },
];
const Letters = [{ id: uuid(), nicknames: "혜인화이팅", contents: "혜인체고" }];

function Home() {
  const [letter, SetLetter] = useState(Letters);
  const [selectedMemberId, setSelectedMemberId] = useState(memberArr[0].id);
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const MemberInputHandler = (memberId) => {
    setSelectedMemberId(memberId);
  };
  return (
    <StAll>
      <StHeader>
        <TodoSvg />
      </StHeader>
      <StMain>
        <StWrap>
          {memberArr.map((member) => {
            return (
              <StBtn
                key={member.id}
                borderColor="aqua"
                onClick={() => {
                  MemberInputHandler(member.id);
                }}
                selected={selectedMemberId === member.id}
              >
                {member.name}
              </StBtn>
            );
          })}
        </StWrap>
        <div>
          <StMember
            onSubmit={(e) => {
              e.preventDefault();
              const newLetter = {
                id: uuid(),
                nicknames: nickname,
                contents: content,
              };
              SetLetter([...letter, newLetter]);
              setNickname("");
              setContent("");
            }}
          >
            <StInputWrap>
              <StSpan>닉네임 : </StSpan>
              <StInput
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
              ></StInput>
            </StInputWrap>
            <StInputWrap>
              <StSpan>내용 : </StSpan>
              <StInput
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></StInput>
            </StInputWrap>
            <StButton type="submit">입력</StButton>
          </StMember>
        </div>
        <StLetterBox>
          {letter.map((letter) => {
            return (
              <div key={letter.id}>
                <StH3>{letter.nicknames}</StH3>
                <p>{letter.contents}</p>
              </div>
            );
          })}
        </StLetterBox>
      </StMain>
      <StFooter>푸터</StFooter>
    </StAll>
  );
}

export default Home;
