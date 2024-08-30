import PersonnelButton from "../Atoms/PersonnelButton";
import ViewingButton from "../Atoms/ViewingButton";
import { Payment } from "../utils/util";

// 영화명, *관, 시간, 금액

const ViewingCheck = () => {
  return (
    <div
      className="flex flex-col w-72  rounded-xl bg-violet-950 gap-2 text-white"
      style={{ paddingTop: "20px", paddingLeft: "15px", height: "500px" }}
    >
      <span className="flex flex-row font-extrabold text-2xl py-6">
        영화제목
      </span>
      <div className="flex flex-col gap-5 font-medium">
        <span>1관</span>
        <span>2024.08.25(일)</span>
        <span>시간</span>
      </div>
      <div className="w-32 h-36 mr-8 relative">
        <img
          className="w-full h-full absolute left-32 bottom-32"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div>
        <span className="flex justify-around font-semibold p">
          최종결제금액
          <Payment price={10000} />
        </span>
        <div className="flex justify-center items-center pt-9">
          <ViewingButton />
        </div>
      </div>
    </div>
  );
};
export default ViewingCheck;
