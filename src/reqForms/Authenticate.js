export const loginForm = (id, pw) => {
  return {
    id: id,
    pw: pw,
  };
};

export const joinForm = (id, pw, name, nickname, age) => {
  return {
    id: id,
    pw: pw,
    name: name,
    nickName: nickname,
    age: age,
  };
};
