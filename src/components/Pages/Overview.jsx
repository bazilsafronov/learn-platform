import Sidebar from "./../Sidebar.jsx";
import Header from "./../Header.jsx";
import Tier from "../Tier.jsx";

function Overview() {
  return (
    <>
      <div className="flex">
        <Header />
      </div>
      <div className="flex">
        <Sidebar />
        <Tier />
      </div>
    </>
  );
}

export default Overview;
