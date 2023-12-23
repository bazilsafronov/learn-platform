import { useState } from "react";
import { Link } from "react-router-dom";

const menu = [
  {
    name: "Overview",
    active: true,
    icon: "monitoring",
  },
  {
    name: "Courses",
    active: false,
    icon: "menu_book",
  },
  {
    name: "Shedule",
    active: false,
    icon: "calendar_month",
  },
  {
    name: "Messaging",
    active: false,
    icon: "forum",
  },
  {
    name: "Leaderboard",
    active: false,
    icon: "social_leaderboard",
  },
];

function Sidebar() {
  const [buttons, setButtons] = useState(menu);

  const onButtonClick = (button) => {
    setButtons((prevButtons) => {
      return prevButtons.map((prevButton) => {
        if (button === prevButton) {
          return { ...prevButton, active: true };
        }
        return { ...prevButton, active: false };
      });
    });
  };

  const buttonsList = buttons.map((button) => {
    return (
      <Link key={button.name} to={button.name.toLowerCase()}>
        <div
          onClick={() => onButtonClick(button)}
          className={
            "flex justify-normal content-center hover:bg-white rounded-xl mt-2 py-2 px-4 w-52 " +
            (button.active ? "bg-white" : "")
          }
        >
          <span className="material-symbols-outlined">{button.icon}</span>
          <button className="inline-block px-2 font-semibold text-gray-600 ">
            {button.name}
          </button>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="flex py-6 w-[300px]">
        <div className="sidemenu flex flex-col max-w-sm ml-16 ">
          {buttonsList}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
