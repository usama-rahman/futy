import { useState } from 'react';
import RightSvg from '../assets/image/rightBlue.svg';
import Iicon from '../assets/image/iicon.svg';

function Pricing() {
  const [isPricingMonthly, setIsPricingMonthly] = useState(false);
  const [isPricingQuarterly, setIsPricingQuarterly] = useState(false);
  const [isPricingAnnual, setIsPricingAnnual] = useState(true);

  return (
    <section className="block px-6 py-12 ">
      {/* Title */}

      <div className=" mx-auto my-0 w-auto md:max-w-[1152px] ">
        <div className=" text-center  md:mt-8 ">
          <h1 className=" mb-4 text-[1.875rem] font-extrabold text-[#292940] md:text-[2.75rem] ">
            Start generating leads today
          </h1>

          <ul className="flex   flex-row justify-center ">
            <li className=" mr-8 inline-flex px-0 py-1 font-[1rem] text-[#575778] md:mr-0 md:self-center md:px-2 md:py-0 md:text-[1em]  ">
              <img src={RightSvg} className="text-[#5f77ff mr-2" alt="" />
              Try for 14 days
            </li>

            <li className="mx-8 hidden px-0 py-1 font-[1rem] text-[#575778] md:inline-flex md:self-center md:px-2 md:py-0 md:text-[1em]  ">
              <img src={RightSvg} className="text-[#5f77ff mr-2" alt="" />
              No payment details required
            </li>

            <li className=" inline-flex px-0 py-1 font-[1rem] text-[#575778] md:self-center md:px-2 md:py-0 md:text-[1em]  ">
              <img src={RightSvg} className="text-[#5f77ff mr-2" alt="" />
              Can be canceled at any time
            </li>
          </ul>
        </div>
      </div>

      {/* Plan */}

      <div className=" mx-auto mb-8 mt-16 md:max-w-[1280px]  ">
        <div className=" flex items-center justify-center ">
          <div className=" flex justify-center rounded-full bg-white p-1 shadow-[0_4px_20px_0_rgba(67,67,113,.1)] ">
            <div
              onClick={() => {
                setIsPricingAnnual(false);
                setIsPricingQuarterly(false);
                setIsPricingMonthly(true);
              }}
              className={` cursor-pointer rounded-full  px-4 py-2 text-sm font-bold ${isPricingMonthly ? 'bg-[#5f77ff] text-white' : ' hover:text-[#5f77ff] '}  `}
            >
              Monthly
            </div>

            <div
              onClick={() => {
                setIsPricingAnnual(false);
                setIsPricingQuarterly(true);
                setIsPricingMonthly(false);
              }}
              className={` cursor-pointer rounded-full  px-4 py-2 text-sm font-bold ${isPricingQuarterly ? 'bg-[#5f77ff] text-white' : ' hover:text-[#5f77ff] '}  `}
            >
              Quarterly
            </div>

            <div
              onClick={() => {
                setIsPricingAnnual(true);
                setIsPricingQuarterly(false);
                setIsPricingMonthly(false);
              }}
              className={` cursor-pointer rounded-full  px-4 py-2 text-sm font-bold ${isPricingAnnual ? 'bg-[#5f77ff] text-white' : ' hover:text-[#5f77ff] '}  `}
            >
              Annual
            </div>
          </div>
        </div>

        <div className=" mt-24  ">
          <div className=" rounded-[20px] border border-[#eff1ff] md:border-white md:p-8 ">
            <div>
              <h4 className=" text-2xl font-bold text-[#292940] ">Free</h4>

              <div className=" mt-2 flex items-center ">
                <div className=" text-[2.25rem] font-bold text-[#292940] ">
                  €0
                </div>

                <div className=" ml-2 text-[#b4b4c5] ">/ month</div>
              </div>

              <div className=" mt-3 text-[.875rem] text-[#434371]  ">
                <strong className=" text-[#292940]  ">Plug & play: </strong>
                start generating more leads in 5 minutes.
              </div>

              <div className="mt-4">
                <button className="relative mb-2 mr-2  h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[1.125em] py-1.5 text-center align-top text-[.875rem]	 font-bold	leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
                  create an account
                </button>
              </div>

              <div className=""></div>

              <div className=" mt-4 h-auto  ">
                <ul>
                  <li className=" flex items-center py-1 text-[.875rem] ">
                    <img
                      className="h-4 w-4 text-[#808080] "
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM0IDM0Ij48cGF0aCBmaWxsPSIjQkVDQUZGIiBkPSJNMTcgMEM3LjYwOSAwIDAgNy42MDkgMCAxN3M3LjYwOSAxNyAxNyAxNyAxNy03LjYwOSAxNy0xN1MyNi4zOTEgMCAxNyAwWm0xMC42NDYgMTMuMzg4TDE1LjAzMyAyNi4wMDFhMS4wOTcgMS4wOTcgMCAwIDEtMS41NSAwbC03LjEzLTcuMTI5YTEuMDk3IDEuMDk3IDAgMCAxIDAtMS41NWwxLjU1MS0xLjU1MmExLjA5OSAxLjA5OSAwIDAgMSAxLjU1MiAwbDQuODAyIDQuODAzIDEwLjI4Ni0xMC4yODdhMS4wOTYgMS4wOTYgMCAwIDEgMS41NTIgMGwxLjU1IDEuNTUyYTEuMDk3IDEuMDk3IDAgMCAxIDAgMS41NVoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuMDMzIDI2LjAwMWExLjA5NyAxLjA5NyAwIDAgMS0xLjU1IDBsLTcuMTMtNy4xMjlhMS4wOTcgMS4wOTcgMCAwIDEgMC0xLjU1bDEuNTUxLTEuNTUyYTEuMDk4IDEuMDk4IDAgMCAxIDEuNTUyIDBsNC44MDIgNC44MDMgMTAuMjg2LTEwLjI4N2ExLjA5NiAxLjA5NiAwIDAgMSAxLjU1MiAwbDEuNTUgMS41NTJhMS4wOTcgMS4wOTcgMCAwIDEgMCAxLjU1TDE1LjAzMyAyNi4wMDFaIi8+PC9zdmc+"
                      alt="Right"
                    />

                    <span className=" pl-3 pr-0"> Basic templates </span>

                    <span className="">
                      <img src={Iicon} alt="" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
