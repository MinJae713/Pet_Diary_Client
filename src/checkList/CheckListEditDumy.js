import React from "react";
import { Text, View } from "react-native";
import { addTodoCheckAPI } from "../api/Checklist";

const CheckList = () => {
  // uuid() - 난수 생성해서 유일한 pk 만드는 놈
  const sunTodos = [
    {
      newTask: {
        id: "9b289d85-df9d-4ed7-40cf-6a7870dc5be8",
        textValue: "사료 사러가기",
        checked: false,
        writeDate: "2023-12-31",
      },
      userId: "dbalsend",
    },
    {
      newTask: {
        id: "f20f5bfb-1aea-9e3a-8826-0cc6314a412e",
        textValue: "병원 진료 예약하기",
        checked: true,
        writeDate: "2023-12-31",
      },
      userId: "dbalsend713",
    },
  ];
  const monTodos = [
    {
      newTask: {
        id: "8d2e2188-a272-56f8-bec3-2e996672589b",
        textValue: "수제 간식 만들기",
        checked: true,
        writeDate: "2024-1-1",
      },
      userId: "dbalsend713!",
    },
    {
      newTask: {
        id: "3355c965-287c-7148-f7e1-d1f22b7d457b",
        textValue: "강아지옷 사러가기",
        checked: false,
        writeDate: "2024-1-1",
      },
      userId: "dbalsend99",
    },
    {
      newTask: {
        id: "cbd001b9-50eb-2c52-53e6-271458f8bcec",
        textValue: "산책 가기",
        checked: true,
        writeDate: "2024-1-1",
      },
      userId: "dbalsend9907",
    },
    {
      newTask: {
        id: "4bbfc2bc-1475-f8b8-6c01-452c278ac290",
        textValue: "목욕시키기",
        checked: false,
        writeDate: "2024-1-1",
      },
      userId: "godyell73",
    },
    {
      newTask: {
        id: "40a2135c-c65d-98f1-6168-f1317cfb2e91",
        textValue: "발톱 깎기",
        checked: false,
        writeDate: "2024-1-1",
      },
      userId: "hk9126!!",
    },
    {
      newTask: {
        id: "0e1c2840-9d18-4211-86fe-129011d1a696",
        textValue: "알러지 약 먹이기",
        checked: true,
        writeDate: "2024-1-1",
      },
      userId: "dbalsend",
    },
    {
      newTask: {
        id: "5d74ae99-6101-0f7f-d387-1bc193c87197",
        textValue: "미용 예약하기",
        checked: true,
        writeDate: "2024-1-1",
      },
      userId: "dbalsend713",
    },
    {
      newTask: {
        id: "53ea0fac-c3a9-6b38-f4ee-e275a9400e0f",
        textValue: "간식 소분하기",
        checked: false,
        writeDate: "2024-1-1",
      },
      userId: "dbalsend713!",
    },
    {
      newTask: {
        id: "4b03a965-e8ed-18b5-a0c7-0261329a2ce6",
        textValue: "배변 패드 사기",
        checked: true,
        writeDate: "2024-1-1",
      },
      userId: "dbalsend99",
    },
  ];
  const tueTodos = [
    {
      newTask: {
        id: "e0042036-52a0-875c-a81b-47636f9994ef",
        textValue: "알러지 약 내가 먹기",
        checked: true,
        writeDate: "2024-1-2",
      },
      userId: "dbalsend9907",
    },
    {
      newTask: {
        id: "26f118c4-cd2b-c9dd-e260-6d2e4db55320",
        textValue: "산책 가기",
        checked: false,
        writeDate: "2024-1-2",
      },
      userId: "godyell73",
    },
    {
      newTask: {
        id: "af7b5736-977b-8681-4518-292cb56e8e6",
        textValue: "미용 예약 맞춰 가기",
        checked: true,
        writeDate: "2024-1-2",
      },
      userId: "hk9126!!",
    },
  ];
  const wedTodos = [
    {
      newTask: {
        id: "a27347ef-f7d3-def6-1a8b-6b070912a73d",
        textValue: "민재랑 코딩하기",
        checked: false,
        writeDate: "2024-1-3",
      },
      userId: "dbalsend",
    },
  ];
  const thuTodos = [
    {
      newTask: {
        id: "651649b3-6e37-b038-e2b3-405d4e93a4bf",
        textValue: "머리 자르러 가기",
        checked: true,
        writeDate: "2024-1-4",
      },
      userId: "dbalsend713",
    },
    {
      newTask: {
        id: "79bf3a75-36ea-2dae-dd46-c635c47ad708",
        textValue: "등 가슴 운동하러가기",
        checked: false,
        writeDate: "2024-1-4",
      },
      userId: "dbalsend713!",
    },
    {
      newTask: {
        id: "86fe35c8-f44b-6535-ed0c-48508e919dff",
        textValue: "양양이 밥주기",
        checked: true,
        writeDate: "2024-1-4",
      },
      userId: "dbalsend99",
    },
  ];
  const friTodos = [
    {
      newTask: {
        id: "44653e9a-7376-2f45-67ae-1d9ae0f0a0aa",
        textValue: "머리 자르러 안가기",
        checked: true,
        writeDate: "2024-1-5",
      },
      userId: "dbalsend9907",
    },
    {
      newTask: {
        id: "78e3f23f-5b67-cf06-f7d0-51fffd7bdb19",
        textValue: "어깨 하체 운동하러가기",
        checked: false,
        writeDate: "2024-1-5",
      },
      userId: "godyell73",
    },
    {
      newTask: {
        id: "8c467f63-c506-5e85-92cd-29d402a51320",
        textValue: "양양이 밥주지 말기",
        checked: true,
        writeDate: "2024-1-5",
      },
      userId: "hk9126!!",
    },
  ];
  const satTodos = [
    {
      newTask: {
        id: "00416bb5-e218-a9a9-cd24-44489e7928fe",
        textValue: "교회는 안가기",
        checked: false,
        writeDate: "2024-1-6",
      },
      userId: "dbalsend",
    },
    {
      newTask: {
        id: "c2cd1af0-d5f6-424f-7ac3-04b70f81d7db",
        textValue: "갔다가 무사히 돌아오기",
        checked: true,
        writeDate: "2024-1-6",
      },
      userId: "dbalsend99",
    },
  ];
  // 위엔 api 요청으로 전부 바뀔거임
  const getOneUUID = (day, todos) => {
    Object.values(todos).map(async (item) => {
      await addTodoCheckAPI(item);
    });
    console.log(day + " 완료");
  };
  const getUUIDs = () => {
    getOneUUID("월", monTodos);
    getOneUUID("화", tueTodos);
    getOneUUID("수", wedTodos);
    getOneUUID("목", thuTodos);
    getOneUUID("금", friTodos);
    getOneUUID("토", satTodos);
    getOneUUID("일", sunTodos);
  };

  getUUIDs();
  return (
    <View>
      <Text>ㅋ</Text>
    </View>
  );
};

export default CheckList;
