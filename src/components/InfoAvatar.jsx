import point from "../images/focus.png";
function InfoAvatar() {
  return (
    <div className="flex h-12 flex-row justify-start bg-white rounded-3xl w-[180px]">
      <div className="flex flex-row justify-start h-[32px] content-center">
        <img src={point} alt="point" />
        <span className="inline-block font-bold text-sm">3320</span>
      </div>
      <div className="flex items-center">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="test"
        />
        <div className="flex font-semibold px-1 text-sm">Petr</div>
      </div>
    </div>
  );
}

export default InfoAvatar;
