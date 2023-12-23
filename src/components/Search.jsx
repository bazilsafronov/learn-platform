function Search() {
  return (
    <header className="flex">
      <nav className="flex p-6">
        <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <div className="font-bold px-2">Name company</div>
          </div>
          <div className="flex rounded-lg w-[960px] ">
            <input
              type="text"
              className="rounded-md p-3 h-10 w-[760px]"
              placeholder="Search ..."
            />

            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="grey"
                className="w-[20px] h-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Search;
