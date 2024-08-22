import ViewingButton from "../Atoms/ViewingButton";

const ViewingCheck = () => {
  return (
    <div className="flex flex-col w-60 h-60 rounded-xl bg-purple-300">
      <span>영화제목</span>
      <span>*관</span>
      <span>날짜</span>
      <span>시간</span>
      <img className="w-fit h-fit" src="pilot.jpg" alt="" />
      <span>결제금액 0원</span>
      <ViewingButton />
    </div>
  );
};
export default ViewingCheck;
