function Sidebar() {
  return (
    <>
      <div className="flex py-6 w-[300px]">
        <div className="sidemenu flex flex-col max-w-sm ml-16 ">
          <div className="flex justify-normal content-center bg-white hover:bg-white rounded-xl mt-2 py-2 px-4 w-52 ">
            <span className="material-symbols-outlined">monitoring</span>
            <button className="inline-block px-2 font-semibold text-gray-600 ">
              Overview
            </button>
          </div>
          <div className="flex justify-normal content-center active:bg-white hover:bg-white rounded-xl mt-2  w-52  py-2 px-4  ">
            <span className="material-symbols-outlined">menu_book</span>
            <button className=" inline-block px-2 font-semibold text-gray-600 ">
              Courses
            </button>
          </div>
          <div className="flex justify-normal content-center active:bg-white hover:bg-white rounded-xl  mt-2 w-52  py-2 px-4   ">
            <span className="material-symbols-outlined">calendar_month</span>
            <button className=" inline-block px-2 font-semibold text-gray-600 ">
              Shedule
            </button>
          </div>
          <div className="flex justify-normal content-center active:bg-white hover:bg-white rounded-xl w-52   mt-2 py-2 px-4  ">
            <span className="material-symbols-outlined">forum</span>
            <button className=" inline-block px-2 font-semibold text-gray-600 ">
              Messaging
            </button>
          </div>
          <div className="flex justify-normal content-center active:bg-white hover:bg-white rounded-xl w-52  py-2  mt-2 px-4  ">
            <span className="material-symbols-outlined">
              social_leaderboard
            </span>
            <button className="mr-1 inline-block px-2 font-semibold text-gray-600 ">
              Leaderboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
