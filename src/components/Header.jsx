import Search from "./Search.jsx";
import Avatar from "./Avatar.jsx";
function Header() {
  return (
    <div className="flex flex-row items-baseline">
      <Search />
      <Avatar />
    </div>
  );
}

export default Header;
