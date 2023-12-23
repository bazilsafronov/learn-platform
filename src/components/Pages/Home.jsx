// import Header from "../Header.jsx";
import { Link } from "react-router-dom";
import mainImage from "../../images/main.png";
function Home() {
  return (
    <>
      <div className="flex flex-col mt-6">
        <div className="flex flex-row">
          <div className="flex-none w-[220px]">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <div className="font-bold px-2">Name company</div>
            </div>
          </div>
          <nav className="flex flex-grow">
            <button className="inline-block px-2 font-semibold text-gray-600 ">
              Catalog
            </button>
            <button className="inline-block px-2 font-semibold text-gray-600 ">
              Community
            </button>
            <button className="inline-block px-2 font-semibold text-gray-600 ">
              About us
            </button>
          </nav>
          <div className="flex-none">
            <Link className="px-2 font-semibold text-black-600" to="/signup">
              Log In
            </Link>
          </div>
        </div>
        <div className="flex flex-row mt-14 justify-center items-center">
          <div className="flex flex-col w-1/2">
            <h1 className="font-bold text-[70px] leading-none">
              Data to enrich your online business
            </h1>
            <p className="font-medium text-gray-800 text-xl mt-8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="flex w-1/2">
            <img
              className="w-[500px] rounded-3xl"
              src={mainImage}
              alt="mainImage"
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <button className="flex w-[150px] justify-center rounded-md bg-indigo-600 py-2 text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link to="/signup">Get started</Link>
          </button>
          <button className="flex font-semibold justify-center py-2">
            Learn more
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
