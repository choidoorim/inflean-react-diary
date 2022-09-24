import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Diary</h2>
      <p>이곳은 Diary 입니다</p>
    </div>
  );
};

export default Diary;
