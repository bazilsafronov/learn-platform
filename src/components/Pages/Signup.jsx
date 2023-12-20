import { GoogleLoginButton } from "react-social-login-buttons";

function Signup() {
  return (
    <div className="mt-[100px] mx-auto form__register__container flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Signup a new account
          </h2>
          <p>
            Already have an account?
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign in here
              </a>
            </div>
          </p>
        </div>
        <form action="#">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              name="firstName"
              placeholder="Ivan"
            />
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              name="lastName"
              placeholder="Ivanov"
            />
          </div>
          <div className="email">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="email"
              name="email"
              placeholder="mail@mail.com"
            />
          </div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="password"
            name="password"
          />
          <label
            htmlFor="cpassword"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Confirm Password
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="password"
            name="cpassword"
          />
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Create an account
          </button>
        </form>

        <GoogleLoginButton onClick={() => alert("Hello")} />
      </div>
    </div>
  );
}

export default Signup;
