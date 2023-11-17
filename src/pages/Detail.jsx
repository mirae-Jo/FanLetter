import React, { useContext, useState } from "react";
import styled from "styled-components";
import ProfileImage from "../assets/baseline_account_circle_black_48dp.png";
import { useNavigate, useParams } from "react-router-dom";
import { MainContext } from "../context/MainContext";

function Detail() {
  const data = useContext(MainContext);
  const navigate = useNavigate();
  const params = useParams();
  const foundData = data.letters.find((item) => {
    return item.id === params.id;
  });
  const delBtn = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      const deleteLetter = data.letters.filter((item) => {
        return item.id !== params.id;
      });
      data.setLetters(deleteLetter);
      navigate("/");
      alert("삭제되었습니다");
    } else {
      return alert("취소되었습니다");
    }
  };
  const [nickname, setNickname] = useState(foundData.nickname);
  const [content, setContent] = useState(foundData.content);
  const [isLetterUpdate, setIsLetterUpdate] = useState(false);
  const updateBtn = () => {
    setIsLetterUpdate(true);
  };
  const completeBtn = () => {
    const updateLetter = {
      avatar: foundData.avatar,
      id: foundData.id,
      nickname: nickname,
      content: content,
      writedTo: foundData.writedTo,
    };
    const changeLetter = data.letters.map((letter) => {
      return letter.id === updateLetter.id ? updateLetter : letter;
    });
    data.setLetters(changeLetter);
    setIsLetterUpdate(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home으로 이동
      </button>
      <StLetterBox>
        <StLetterWrap>
          <StProfileWrap>
            <StProfile src={ProfileImage} />
          </StProfileWrap>
          {isLetterUpdate === true ? (
            <>
              <StLetterDiv>
                <input
                  value={nickname}
                  onChange={(e) => {
                    setNickname(e.target.value);
                  }}
                  maxLength={14}
                />
                <textarea
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  maxLength={100}
                  rows={4}
                ></textarea>
              </StLetterDiv>
              <StBtn>
                <button onClick={completeBtn}>완료</button>
              </StBtn>
            </>
          ) : (
            <>
              <StLetterDiv>
                <StH3>{foundData.nickname}</StH3>
                <StP>{foundData.content}</StP>
              </StLetterDiv>
              <StBtn>
                <button onClick={updateBtn}>수정</button>
                <button onClick={delBtn}>삭제</button>
              </StBtn>
            </>
          )}
        </StLetterWrap>
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
  background-color: #333;
`;
const StLetterWrap = styled.div`
  width: 540px;
  padding: 20px 0;
  margin: 10px auto;
`;
const StProfileWrap = styled.div`
  width: 80px;
  height: 150px;
  float: left;
`;
const StProfile = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 50%;
`;
const StLetterDiv = styled.div`
  width: 430px;
  float: right;
  input {
    width: 100%;
    padding: 10px;
  }
  textarea {
    width: 100%;
    resize: none;
    margin-top: 15px;
    padding: 10px;
  }
`;
const StH3 = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
`;
const StP = styled.p`
  width: 100%;
  word-break: break-all;
  font-size: 1.2rem;
  margin-top: 20px;
  line-height: 1.6rem;
`;
const StBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    width: 50px;
  }
`;

export default Detail;
