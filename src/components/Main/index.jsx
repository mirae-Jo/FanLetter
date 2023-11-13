import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import LetterInputBox from "./LetterInputBox";
import MemberBtn from "./MemberBtn";

// 배열

const Letters = [{ id: uuid(), nicknames: "혜인화이팅", contents: "혜인체고" }];
const Dummys = [
  {
    createdAt: "2023-11-03T02:07:09.423Z",
    nickname: "Dr. Clint Christiansen",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
    content:
      "민지 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.",
    writedTo: "민지",
    id: "1",
  },
  {
    createdAt: "2023-11-02T23:13:18.491Z",
    nickname: "Chad Graham",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
    content:
      "혜인 Ipsam aspernatur nostrum eos unde velit molestiae dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.",
    writedTo: "혜인",
    id: "2",
  },
  {
    createdAt: "2023-11-02T11:25:37.026Z",
    nickname: "Tommy Abshire",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/646.jpg",
    content:
      "다니엘 Itaque nihil quae neque itaque. Non a officiis ducimus nemo consectetur. Ducimus libero voluptatum consequuntur.",
    writedTo: "다니엘",
    id: "3",
  },
  {
    createdAt: "2023-11-02T16:06:34.150Z",
    nickname: "Max Mayert",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
    content:
      "해린 Sint qui eligendi repudiandae placeat maiores repudiandae assumenda repudiandae. Distinctio commodi iste. Qui architecto iusto.",
    writedTo: "해린",
    id: "4",
  },
  {
    createdAt: "2023-11-03T05:40:17.575Z",
    nickname: "Olga Christiansen",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
    content:
      "하니 Molestiae saepe reiciendis saepe natus quo occaecati. Vel vero illum quo. Ducimus maiores porro optio illum officia nam. Cum possimus aut consequatur eaque libero ad nihil pariatur officiis.",
    writedTo: "하니",
    id: "5",
  },
];
const memberArr = [
  { id: 1, name: "혜인" },
  { id: 2, name: "하니" },
  { id: 3, name: "다니엘" },
  { id: 4, name: "해린" },
  { id: 5, name: "민지" },
];

function Main() {
  const [letters, setLetter] = useState(Dummys);
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
        />
        <LetterInputBox setLetter={setLetter} letter={letters} />
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
                <div key={letter.id}>
                  <StH3>{letter.nickname}</StH3>
                  <p>{letter.content}</p>
                </div>
              );
            })}
        </StLetterBox>
      </StMain>
    </div>
  );
}

// styled-component
const StMain = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const StLetterBox = styled.div`
  width: 580px;
  height: 200px;
  margin: 40px auto;
  background-color: #eee;
`;
const StH3 = styled.h3`
  font-weight: bold;
`;

export default Main;
