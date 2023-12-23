import { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    saveUser(email, password);
    setEmail("");
    setPassword("");
    navigate("/overview");
  };

  const saveUser = (email, password) => {
    const user = { email, password };
    localStorage.setItem(user, JSON.stringify(user));
  };

  return (
    <>
      <div className="mt-20 bg-white mx-auto form__register__container w-[420px] rounded-xl flex flex-1 flex-col justify-center px-6 py-12">
        <img
          className="mx-auto h-10 w-auto "
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Signup a new account
            </h2>
            <div className="flex items-baseline justify-center">
              Already have an account?
              <div className="text-sm p-2">
                <Link
                  to="/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Sign in here
                </Link>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mt-8"
          >
            <div className="flex flex-col w-[300px]">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-2 text-gray-900"
              >
                First Name
              </label>
              <input
                className="block w-full h-10 rounded-md border-0 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                type="text"
                name="firstName"
                placeholder="Ivan"
              />
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-2 text-gray-900"
              >
                Last Name
              </label>
              <input
                className="block h-10 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                type="text"
                name="lastName"
                placeholder="Ivanov"
              />
            </div>
            <div className="email flex flex-col w-[300px]">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-2 text-gray-900"
              >
                Email
              </label>
              <input
                className="block w-full rounded-md border-0 h-10 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                name="email"
                placeholder="mail@mail.com"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-2 text-gray-900"
              >
                Password
              </label>
              <input
                className="block w-[300px] rounded-md border-0 py-1.5 h-10 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                name="password"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="cpassword"
                className="block text-sm font-medium leading-2 text-gray-900y-900"
              >
                Confirm Password
              </label>
              <input
                className="block w-[300px] rounded-md border-0 py-1.5 pl-7 h-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                type="password"
                name="cpassword"
              />
            </div>
            {error ? (
              <div>
                <span style={{ color: "red" }}>{error}</span>
              </div>
            ) : null}
            <button
              className="flex w-[300px] mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Create an account
            </button>
          </form>
          <GoogleLoginButton onClick={() => alert("Hello")} />
        </div>
      </div>
    </>
  );
}

export default Signup;
