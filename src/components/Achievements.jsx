import point from "../images/focus.png";
function Achievements() {
  return (
    <div className="flex justify-center items-center bg-white rounded-2xl h-[200px] w-[600px]">
      <div className="flex-col">
        <div className="flex">
          <img src={point} alt="point" height={48} width={64} />
          <div className="flex flex-col">
            <span className="font-bold">3472</span>
            <p>Total point</p>
          </div>
        </div>
        <div className="flex">
          <img src={point} alt="point" height={48} width={64} />
          <div className="flex flex-col">
            <span className="font-bold">3472</span>
            <p>Total point</p>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex">
          <img src={point} alt="point" height={48} width={64} />
          <div className="flex flex-col">
            <span className="font-bold">3472</span>
            <p>Total point</p>
          </div>
        </div>
        <div className="flex">
          <img src={point} alt="point" height={48} width={64} />
          <div className="flex flex-col">
            <span className="font-bold">3472</span>
            <p>Total point</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
