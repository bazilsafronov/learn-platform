import Search from "./Search.jsx";
import InfoAvatar from "./InfoAvatar.jsx";
function Header() {
  return (
    <div className="flex flex-row items-baseline">
      <Search />
      <InfoAvatar />
    </div>
  );
}

export default Header;
