import React, { useState } from "react";
import ProfileImage from "../../assets/baseline_account_circle_black_48dp.png";
import uuid from "react-uuid";
import styled from "styled-components";

function LetterInputBox({ setLetter, letter }) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const Formprops = (e) => {
    e.preventDefault();
    const newLetter = {
      id: uuid(),
      nicknames: nickname,
      contents: content,
    };
    setLetter([...letter, newLetter]);
    setNickname("");
    setContent("");
  };

  return (
    <div>
      <StMember onSubmit={Formprops}>
        <StCenterWrap>
          <StProfileImg src={ProfileImage} />
          <div>
            <span>누구에게 보내실건가요?</span>
            <select>
              <option>혜인</option>
              <option>하니</option>
              <option>다니엘</option>
              <option>해린</option>
              <option>민지</option>
            </select>
          </div>
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
            <StTextarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></StTextarea>
            <StInputBtn type="submit">입력</StInputBtn>
          </StInputWrap>
        </StCenterWrap>
      </StMember>
    </div>
  );
}

const StMember = styled.form`
  width: 580px;
  height: 180px;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid aqua;
  /* background-image: url(${(props) => props.backgroundImage}); */
  display: block;
  color: #fff;
`;
const StCenterWrap = styled.div`
  width: 540px;
  height: 165px;
  margin: 10px auto;
`;
const StProfileImg = styled.img`
  width: 65px;
  float: left;
  margin-top: 8px;
`;
const StInputWrap = styled.div`
  width: 450px;
  margin: 0 auto;
  float: left;
  margin-top: 15px;
  margin-left: 20px;
`;
const StSpan = styled.span`
  float: left;
  width: 70px;
`;
const StInput = styled.input`
  width: 350px;
  height: 25px;
`;
const StTextarea = styled.textarea`
  width: 350px;
  height: 50px;
  display: block;
`;
const StInputBtn = styled.button`
  float: right;
  margin-top: 10px;
  margin-right: 22px;
`;

export default LetterInputBox;
