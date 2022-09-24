import { useEffect, useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState(diaryList);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()} 년 ${curDate.getMonth() + 1} 월`;

  useEffect(() => {
    const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1);

    const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0);

    setData(
      diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
    );
  }, [diaryList, curDate]);
  // 수정 삭제 시 diaryList 도 변경해야 되기 때문에 useEffect 에 설정해줘야 한다.
  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <h2>Home</h2>
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
