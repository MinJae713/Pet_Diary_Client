export const todate = new Date();
export const year = todate.getFullYear();
export const month = todate.getMonth() + 1;
export const date = todate.getDate();
export const day = todate.getDay();
// const weekOfYear = Math.ceil((todate.getDate() - 6 - todate.getDay()) / 7); // 몇 주차인지(0~4)
export const getDaysArr = (date) => {
  // 현재 주차의 날짜들 반환
  const days = [];
  const dayOfWeek = date.getDay();
  for (let i = 0; i < 7; i++) {
    const day = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + i - dayOfWeek
    );
    days.push(day);
  }
  return days;
};
export const toDaysArr = getDaysArr(todate);
export const getDayStr = {
  0: "일",
  1: "월",
  2: "화",
  3: "수",
  4: "목",
  5: "금",
  6: "토",
};
export const dayStr = getDayStr[day];
const getWeek = (date) => {
  const currentDate = date.getDate();
  const firstDay = new Date(date.setDate(1)).getDay();
  date.setDate(currentDate);
  return Math.ceil((currentDate + firstDay) / 7);
};
export const weekOfToday = getWeek(todate);
export const weekStr = {
  1: "첫",
  2: "둘",
  3: "셋",
  4: "넷",
  5: "다섯",
};
