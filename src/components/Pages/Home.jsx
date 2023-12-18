import Header from "../Header.jsx";

function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="container bg-gray-100">
          <div className="flex p-6">
            <iframe
              width="1000"
              height="700"
              className="mx-auto rounded-md"
              src="https://www.youtube.com/embed/wsDDaJ7ZLxo?si=z-a2eWH4-FVbu5Hf?autoplay=1&mute=1"
            ></iframe>
          </div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
