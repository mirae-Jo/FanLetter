import React from "react";
import styled from "styled-components";

function LetterBoxPre({ letters, selectedMemberId, memberArr }) {
  return (
    <div>
      <StLetterBox>
        {letters
          .filter((mem) => {
            return (
              mem.writedTo ===
              memberArr.find((member) => {
                return member.id === selectedMemberId;
              }).name
            );
          })
          .map((letter) => {
            return (
              <StLetterWrap key={letter.id}>
                <StProfile src={letter.avatar} />
                <StLetterDiv>
                  <StH3>{letter.nickname}</StH3>
                  <StP>{letter.content}</StP>
                </StLetterDiv>
              </StLetterWrap>
            );
          })}
      </StLetterBox>
    </div>
  );
}
const StLetterBox = styled.div`
  width: 580px;
  height: auto;
  margin: 40px auto;
  border: 2px solid #fff;
  color: #fff;
`;
const StLetterWrap = styled.div`
  width: 540px;
  height: 120px;
  padding: 20px 0;
  box-sizing: border-box;
  margin: 10px auto;
`;
const StProfile = styled.img`
  width: 80px;
  height: 80px;
  float: left;
  margin-right: 20px;
  border-radius: 50%;
`;
const StLetterDiv = styled.div`
  width: 430px;
  height: 90px;
  float: right;
  white-space: nowrap;
`;
const StH3 = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
`;
const StP = styled.p`
  width: 420px;
  font-size: 1.2rem;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default LetterBoxPre;
