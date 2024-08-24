import PersonnelButton from "../Atoms/PersonnelButton";
// 관람인원선택
const NumberOfSpectators = () => {
  return (
    <>
      <span>관람인원선택</span>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <PersonnelButton gallery="성인" />
        </div>
        <PersonnelButton gallery="청소년" />
        <PersonnelButton gallery="경로" />
        <PersonnelButton gallery="우대" />
      </div>
    </>
  );
};
export default NumberOfSpectators;
