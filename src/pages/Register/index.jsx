import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className=" w-full px-4 ">
      <div className=" mb-3 flex w-full items-center justify-center ">
        <div className=" block w-[80%] md:w-1/2 md:p-[.75rem] ">
          <div className=" mt-32 flex flex-col items-center ">
            <h1 className=" mb-10 text-[2rem] font-bold text-[#292940] ">
              Create account
            </h1>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full md:max-w-[360px]"
            >
              <input
                type="text"
                required
                placeholder="Company"
                className="  w-full rounded-lg border border-[#526cff34] px-4 py-3 shadow-[0_2px_15px_0_rgba(67,67,113,.07)] focus:border-[#526cff7e] focus:outline-none "
              />

              <input
                type="email"
                required
                placeholder="Business Email"
                className=" mt-4  w-full rounded-lg border border-[#526cff34] px-4 py-3 shadow-[0_2px_15px_0_rgba(67,67,113,.07)] focus:border-[#526cff7e] focus:outline-none "
              />

              <input
                type="password"
                required
                placeholder="Password"
                className=" mt-4 w-full rounded-lg border border-[#526cff34] px-4 py-3 shadow-[0_2px_15px_0_rgba(67,67,113,.07)] focus:border-[#526cff7e] focus:outline-none "
              />

              <div className="mt-5 flex flex-row text-[.875rem] ">
                <input
                  type="checkbox"
                  className="border-[2px] border-[#cfd6ff]  "
                  width={30}
                  height={30}
                />
                <p className=" ml-3 ">
                  I agree to the &nbsp;
                  <Link className=" text-[#5f77ff] underline hover:text-[#292940] ">
                    Terms and Conditions
                  </Link>
                  &nbsp;and the &nbsp;
                  <Link className=" text-[#5f77ff] underline hover:text-[#292940] ">
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <button
                className=" mt-5 w-full rounded-lg bg-[#526cff] px-4 py-3 text-[1rem] font-bold text-white shadow-[0_2px_15px_0_rgba(67,67,113,.07)] hover:bg-[#5263ff] "
                type="submit"
              >
                Register
              </button>
            </form>

            <div className="mt-6 flex w-full max-w-[360px] flex-col items-center justify-center  text-[1em] text-[#69698d]">
              <div className=" flex w-full justify-center ">
                Don&apos;t have an account?&nbsp;
                <Link
                  to="/login"
                  className=" font-bold text-[#5f77ff] hover:underline "
                >
                  Log in.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-24 flex justify-center  ">
        <img
          src="https://app.futy.io/_nuxt/img/futy-logo-dark.3908dec.svg"
          alt="Futy"
          width="150px"
        />
      </div>

      <div className=""></div>
    </section>
  );
}
export default Register;
