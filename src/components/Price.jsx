/* eslint-disable no-unused-vars */

import { useState } from 'react';

import RightSvg from '../assets/image/rightBlue.svg';
import Iicon from '../assets/image/iicon.svg';

import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const rightLogo =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM0IDM0Ij48cGF0aCBmaWxsPSIjQkVDQUZGIiBkPSJNMTcgMEM3LjYwOSAwIDAgNy42MDkgMCAxN3M3LjYwOSAxNyAxNyAxNyAxNy03LjYwOSAxNy0xN1MyNi4zOTEgMCAxNyAwWm0xMC42NDYgMTMuMzg4TDE1LjAzMyAyNi4wMDFhMS4wOTcgMS4wOTcgMCAwIDEtMS41NSAwbC03LjEzLTcuMTI5YTEuMDk3IDEuMDk3IDAgMCAxIDAtMS41NWwxLjU1MS0xLjU1MmExLjA5OSAxLjA5OSAwIDAgMSAxLjU1MiAwbDQuODAyIDQuODAzIDEwLjI4Ni0xMC4yODdhMS4wOTYgMS4wOTYgMCAwIDEgMS41NTIgMGwxLjU1IDEuNTUyYTEuMDk3IDEuMDk3IDAgMCAxIDAgMS41NVoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuMDMzIDI2LjAwMWExLjA5NyAxLjA5NyAwIDAgMS0xLjU1IDBsLTcuMTMtNy4xMjlhMS4wOTcgMS4wOTcgMCAwIDEgMC0xLjU1bDEuNTUxLTEuNTUyYTEuMDk4IDEuMDk4IDAgMCAxIDEuNTUyIDBsNC44MDIgNC44MDMgMTAuMjg2LTEwLjI4N2ExLjA5NiAxLjA5NiAwIDAgMSAxLjU1MiAwbDEuNTUgMS41NTJhMS4wOTcgMS4wOTcgMCAwIDEgMCAxLjU1TDE1LjAzMyAyNi4wMDFaIi8+PC9zdmc+';

function Pricing() {
  const [isPricingMonthly, setIsPricingMonthly] = useState(false);
  const [isPricingQuarterly, setIsPricingQuarterly] = useState(false);
  const [isPricingAnnual, setIsPricingAnnual] = useState(true);

  const [isHideStandard, setIsHideStandard] = useState(true);
  const [isHideFree, setIsHideFree] = useState(true);
  const [isHideStarter, setIsHideStarter] = useState(true);
  const [isHideBusiness, setIsHideBusiness] = useState(true);

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

      <div className=" mx-auto mb-8 mt-16 lg:max-w-[1280px]  ">
        <div className=" flex items-center justify-center  ">
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

        <div className=" mt-24 md:flex ">
          {/* Plan - 1 */}

          <div className="  my-4  rounded-[20px] border border-[#eff1ff] hover:shadow-[0_25px_50px_-12px_rgba(41,41,64,.15)] md:border-white md:p-8 ">
            <div className=" p-6 ">
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
                <button className="relative mb-2 mr-2 h-[2.857em]  w-full cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[1.125em] py-1.5 text-center align-top text-[.875rem]	 font-bold	leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
                  Create an account
                </button>
              </div>

              <div className=" mb-2 mt-5 flex items-center justify-center md:hidden ">
                <div
                  onClick={() => setIsHideFree(!isHideFree)}
                  className=" flex cursor-pointer items-center text-[#434371] "
                >
                  <h6 className="text-[.9375rem] font-bold ">
                    {isHideFree
                      ? 'Hide functionalities'
                      : 'Show functionalities'}
                  </h6>

                  <div className=" ml-[.25rem] min-w-3  ">
                    {isHideFree ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </div>
                </div>
              </div>

              {isHideFree && (
                <div className=" mt-4 h-auto  ">
                  <ul>
                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0"> Basic templates </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">
                        Standaard kleur & avatar
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0"> Geen support</span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">
                        Max. 20 Leads per maand
                      </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">Gratis Futy branding</span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Plan - 2 */}

          <div className=" my-4 rounded-[20px] border border-[#eff1ff] hover:shadow-[0_25px_50px_-12px_rgba(41,41,64,.15)] md:border-white md:p-8 ">
            <div className=" p-6 ">
              <h4 className=" text-2xl font-bold text-[#292940] ">Starter</h4>

              <div className=" mt-2 flex items-center ">
                <div className=" text-[2.25rem] font-bold text-[#292940] ">
                  €12.50
                </div>

                <div className=" ml-2 text-[#b4b4c5] ">/ month</div>
              </div>

              <div className=" mt-3 text-[.875rem] text-[#434371]  ">
                All prices are
                <strong className=" text-[#292940]  "> not per user </strong>
                but a total price for a website.
              </div>

              <div className="mt-4">
                <button className="relative mb-2 mr-2 h-[2.857em]  w-full cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[1.125em] py-1.5 text-center align-top text-[.875rem]	 font-bold	leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
                  Try it for free
                </button>
              </div>

              <div className=" mb-2 mt-5 flex items-center justify-center md:hidden ">
                <div
                  onClick={() => setIsHideStarter(!isHideStarter)}
                  className=" flex cursor-pointer items-center text-[#434371] "
                >
                  <h6 className="text-[.9375rem] font-bold ">
                    {isHideStarter
                      ? 'Hide functionalities'
                      : 'Show functionalities'}
                  </h6>

                  <div className=" ml-[.25rem] min-w-3  ">
                    {isHideStarter ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </div>
                </div>
              </div>

              {isHideStarter && (
                <div className=" mt-4 h-auto  ">
                  <ul>
                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0"> Basic templates </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">
                        5 users for WhatsApp Business
                      </span>
                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">
                        Link landline telephone number
                      </span>
                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">(WhatsApp) Forms </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">Send visitor data </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">
                        Additional functionalities{' '}
                      </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" flex pl-3 pr-0">
                        Subtle Futy branding
                      </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Plan - 3*/}

          <div className="  relative  my-4 rounded-[20px] border-2  border-[#5f77ff] shadow-[0_25px_50px_-12px_rgba(41,41,64,.15)]  ">
            <div className="absolute top-[-10px] z-10 flex w-full justify-center ">
              <span className="   rounded-full  bg-[#5f77ff] px-2 py-0.5 text-center text-[.875rem] font-bold text-white  ">
                Most chosen
              </span>
            </div>

            <div className="  p-8 py-8 md:p-[1.5rem] ">
              <h4 className=" text-2xl font-bold text-[#292940] ">Standard</h4>

              <div className=" mt-2 flex items-center ">
                <div className=" text-[2.25rem] font-bold text-[#292940] ">
                  €25
                </div>

                <div className=" ml-2 text-[#b4b4c5] ">/ month</div>
              </div>

              <div className=" mt-3 text-[.875rem] text-[#434371]  ">
                Offer your website visitor the
                <strong className=" text-[#292940]  "> best experience </strong>
                on every page and at every moment .
              </div>

              <div className="mt-4 w-full ">
                <a className="relative mb-2 mr-2 inline-flex h-[2.857em] w-full cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-[#5f77ff] px-[1.125em] py-1.5 text-center align-top	 	text-[.875rem] font-semibold leading-normal text-white hover:bg-[#566add] hover:text-white ">
                  Try it for free
                </a>
              </div>

              <div className=" mb-2 mt-5 flex items-center justify-center md:hidden ">
                <div
                  onClick={() => setIsHideStandard(!isHideStandard)}
                  className=" flex cursor-pointer items-center text-[#434371] "
                >
                  <h6 className="text-[.9375rem] font-bold ">
                    {isHideStandard
                      ? 'Hide functionalities'
                      : 'Show functionalities'}
                  </h6>

                  <div className=" ml-[.25rem] min-w-3  ">
                    {isHideStandard ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </div>
                </div>
              </div>

              {isHideStandard && <StanderFunction />}
            </div>
          </div>

          {/* Plan - 4 */}

          <div className="  my-4  rounded-[20px] border border-[#eff1ff] hover:shadow-[0_25px_50px_-12px_rgba(41,41,64,.15)] md:border-white md:p-8 ">
            <div className=" p-6 ">
              <h4 className=" text-2xl font-bold text-[#292940] ">Business</h4>

              <div className=" mt-2 flex items-center ">
                <div className=" text-[2.25rem] font-bold text-[#292940] ">
                  €45
                </div>

                <div className=" ml-2 text-[#b4b4c5] ">/ month</div>
              </div>

              <div className=" mt-3 text-[.875rem] text-[#434371]  ">
                Never let your website visitors
                <strong className=" text-[#292940]  "> leave </strong>
                for your competitor again!
              </div>

              <div className="mt-4">
                <button className="relative mb-2 mr-2  h-[2.857em] w-full cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[1.125em] py-1.5 text-center align-top	 text-[.875rem]	font-bold leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
                  create an account
                </button>
              </div>

              <div className=" text-[.9375rem] font-bold text-[#292940] ">
                Everything from Standard, plus:
              </div>

              <div className=" mb-2 mt-5 flex items-center justify-center md:hidden ">
                <div
                  onClick={() => setIsHideBusiness(!isHideBusiness)}
                  className=" flex cursor-pointer items-center text-[#434371] "
                >
                  <h6 className="text-[.9375rem] font-bold ">
                    {isHideBusiness
                      ? 'Hide functionalities'
                      : 'Show functionalities'}
                  </h6>

                  <div className=" ml-[.25rem] min-w-3  ">
                    {isHideBusiness ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </div>
                </div>
              </div>

              {isHideBusiness && (
                <div className=" mt-4 h-auto  ">
                  <ul>
                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0"> Custom flows </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">2 websites</span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0"> Help with setup </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">
                        Lead qualification module
                      </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">
                        Personal email signature
                      </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">Remove Futy branding</span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>

                    <li className=" flex items-center py-1 text-[.875rem] ">
                      <img
                        className="h-4 w-4 text-[#808080] "
                        src={rightLogo}
                        alt="Right"
                      />

                      <span className=" pl-3 pr-0">
                        Google Sheets integration
                      </span>

                      <span className=" cursor-pointer  pl-2 ">
                        <img src={Iicon} alt="What " />
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pricing;

const StanderFunction = () => {
  return (
    <>
      <div className=" text-[.9375rem] font-bold text-[#292940] ">
        Everything from Starter, plus:
      </div>

      <div className=" mt-4 h-auto  ">
        <ul>
          <li className=" flex items-center py-1 text-[.875rem] ">
            <img
              className="h-4 w-4 text-[#808080] "
              src={rightLogo}
              alt="Right"
            />

            <span className=" pl-3 pr-0"> Premium templates </span>

            <span className=" cursor-pointer  pl-2 ">
              <img src={Iicon} alt="What " />
            </span>
          </li>

          <li className=" flex items-center py-1 text-[.875rem] ">
            <img
              className="h-4 w-4 text-[#808080] "
              src={rightLogo}
              alt="Right"
            />

            <span className=" pl-3 pr-0">Dynamic variants</span>
            <span className=" cursor-pointer  pl-2 ">
              <img src={Iicon} alt="What " />
            </span>
          </li>

          <li className=" flex items-center py-1 text-[.875rem] ">
            <img
              className="h-4 w-4 text-[#808080] "
              src={rightLogo}
              alt="Right"
            />

            <span className=" pl-3 pr-0">Multi language</span>
            <span className=" cursor-pointer  pl-2 ">
              <img src={Iicon} alt="What " />
            </span>
          </li>

          <li className=" flex items-center py-1 text-[.875rem] ">
            <img
              className="h-4 w-4 text-[#808080] "
              src={rightLogo}
              alt="Right"
            />

            <span className=" pl-3 pr-0">Video module </span>

            <span className=" cursor-pointer  pl-2 ">
              <img src={Iicon} alt="What " />
            </span>
          </li>

          <li className=" flex items-center py-1 text-[.875rem] ">
            <img
              className="h-4 w-4 text-[#808080] "
              src={rightLogo}
              alt="Right"
            />

            <span className=" pl-3 pr-0">Call tracking integration </span>

            <span className=" cursor-pointer  pl-2 ">
              <img src={Iicon} alt="What " />
            </span>
          </li>

          <li className=" flex items-center py-1 text-[.875rem] ">
            <img
              className="h-4 w-4 text-[#808080] "
              src={rightLogo}
              alt="Right"
            />

            <span className=" pl-3 pr-0">
              Video call (Calendly) integration
            </span>

            <span className=" cursor-pointer  pl-2 ">
              <img src={Iicon} alt="What " />
            </span>
          </li>

          <li className=" flex items-center py-1 text-[.875rem] ">
            <img
              className="h-4 w-4 text-[#808080] "
              src={rightLogo}
              alt="Right"
            />

            <span className=" flex pl-3 pr-0">
              Live chat (Tawk) integration
            </span>

            <span className=" cursor-pointer  pl-2 ">
              <img src={Iicon} alt="What " />
            </span>
          </li>

          <li className=" flex items-center py-1 text-[.875rem] ">
            <img
              className="h-4 w-4 text-[#808080] "
              src={rightLogo}
              alt="Right"
            />

            <span className=" flex pl-3 pr-0">
              Google Analytics integration
            </span>

            <span className=" cursor-pointer  pl-2 ">
              <img src={Iicon} alt="What " />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
