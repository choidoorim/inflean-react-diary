import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("id"));

  return (
    <div>
      <h2>Edit</h2>
      <p>이곳은 Edit 입니다</p>
      <button onClick={() => setSearchParams({ who: "test" })}>
        Query String 바꾸기
      </button>

      <button onClick={() => navigate("/home")}>Home 으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default Edit;
