/* eslint-disable react/prop-types */

import FutyLogo from '../assets/image/futyLogo.svg';

import MenuEnterIcon from '../ui/MenuEnter';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { IoIosArrowForward } from 'react-icons/io';

import { useState } from 'react';
import MenuExit from '../ui/MenuExit';

function NavCopy({ setIsMenuOpen, isMenuOpen }) {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <>
      <header className="block min-h-[4.375rem]">
        {/* navbar */}
        <div className="  fixed left-0 right-0 top-0 z-30 flex items-stretch bg-white shadow-sm md:min-h-[4.375rem]  md:px-[1.5rem]">
          <div className="relative mx-auto my-0 flex h-[100%] min-h-[4.375rem] w-auto grow items-stretch justify-between md:flex md:max-w-[1152px] ">
            <div className="ml-4 flex min-h-[4.375rem] shrink-0  items-center text-xl font-semibold md:mr-8 ">
              <a className="flex items-center md:py-2 md:pl-0 md:pr-3">
                <img src={FutyLogo} alt="FutyLogo" className="" />
              </a>
            </div>

            <div className="  flex items-center  justify-between md:flex md:min-h-[4.375rem] md:shrink-0 md:grow md:items-stretch ">
              <div className=" hidden flex-col md:mr-auto md:flex md:flex-row md:items-stretch md:justify-start ">
                <a className=" active md:py-0.75rem py-0.5rem relative shrink-0 grow-0 cursor-pointer px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300	ease-in hover:text-[#5f77ff] active:text-[#5f77ff] md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940] ">
                  Home
                </a>
                <a className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 cursor-pointer px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in	hover:text-[#5f77ff] md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940] ">
                  Product
                </a>
                <a className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 cursor-pointer px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in hover:text-[#5f77ff]	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940] ">
                  Prices
                </a>

                <div
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                  className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in 	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940]  "
                >
                  <div className="flex cursor-pointer hover:text-[#5f77ff] ">
                    <span>Solutions</span>
                    <span className="flex items-center text-xl">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                    {isSolutionsOpen && <NavDropDownSolutions />}
                  </div>
                </div>

                <div
                  onMouseEnter={() => setIsBlogOpen(true)}
                  onMouseLeave={() => setIsBlogOpen(false)}
                  className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in hover:text-[#5f77ff]	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940]  "
                >
                  <div className="flex cursor-pointer ">
                    Blog
                    <span className="flex items-center text-xl">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                    {isBlogOpen && <NavDropDownBlog />}
                  </div>
                </div>
              </div>

              <div className="md:flex-end md:ml-auto md:flex md:items-stretch">
                <div className="flex flex-1 items-center justify-end px-3 py-2 md:flex-wrap md:justify-start ">
                  <a className="relative mb-2 mr-2 hidden h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[1.125em] py-1.5 text-center align-top	text-[.875rem] font-semibold	leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
                    login
                  </a>

                  <a className="relative mb-2 mr-2 inline-flex h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-[#5f77ff] px-[1.125em] py-1.5 text-center align-top	text-[.875rem] 	font-semibold leading-normal text-white hover:bg-[#566add] hover:text-white ">
                    <span className="text-[.75rem]"> Start for free →</span>
                  </a>
                </div>
              </div>
              <div className="mb-2 cursor-pointer pr-3 text-2xl md:hidden ">
                <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <MenuExit /> : <MenuEnterIcon />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default NavCopy;

const NavDropDownSolutions = () => {
  return (
    <>
      <div className=" absolute left-12 top-[73px] z-[21] block overflow-hidden border-x-[11px] border-b-[13px] border-white   border-x-transparent  "></div>

      <div
        className="
      solutionShadow absolute top-[85px] z-20 flex  rounded-[16px] border bg-white p-7
      "
      >
        <div className=" mt-0 min-w-[200px] pl-0 ">
          <h3 className=" mb-[1rem] cursor-text text-[1rem] font-bold text-[#292940]  ">
            INDUSTRIES
          </h3>

          <ul className=" pt-3">
            <li className=" block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Automotive
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              B2B / Industry
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Entertainment
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Legal services
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Brokerage
            </li>
          </ul>
        </div>

        <div className=" mt-0 min-w-[200px] pl-0 ">
          <h3 className=" mb-[1rem] cursor-text text-[1rem] font-bold text-[#292940]  ">
            INDUSTRIES
          </h3>

          <ul className=" pt-3">
            <li className=" block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Marketing
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Personal
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Recruitment
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Retail / E-commerce
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Software / SaaS
            </li>
          </ul>
        </div>

        <div className=" mt-0 min-w-[200px] pl-0 ">
          <h3 className=" mb-[1rem] cursor-text text-[1rem] font-bold text-[#292940]  ">
            TEMPLATES
          </h3>

          <ul className=" pt-3">
            <li className=" block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Leadbot
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              WhatsApp Widget
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Contact Leadbot
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Video Leadbot
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              WhatsApp form
            </li>

            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff] ">
              <a className="flex items-center justify-start font-bold text-[#5f77ff] ">
                <font className="hover:underline ">More templates</font>
                <span>
                  <IoIosArrowForward className="font-extrabold" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const NavDropDownBlog = () => {
  return (
    <>
      <div className=" absolute left-12 top-[73px] z-[21] block overflow-hidden border-x-[11px] border-b-[13px] border-white   border-x-transparent  "></div>

      <div
        className="
      solutionShadow absolute top-[85px] z-20 flex  rounded-[16px] border bg-white p-7
      "
      >
        <div className=" mt-0 min-w-[200px] pl-0 ">
          <h3 className=" mb-[1rem] cursor-text text-[1rem] font-bold text-[#292940]  ">
            BLOG
          </h3>

          <ul className=" pt-3">
            <li className=" block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              WhatsApp Business
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Conversion optimization
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Installation manuals
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Use cases
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Help center
            </li>

            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff] ">
              <a className="flex items-center justify-start font-bold text-[#5f77ff] ">
                <font className="hover:underline ">More Blogs</font>
                <span>
                  <IoIosArrowForward className="font-extrabold" />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className=" mt-0 min-w-[200px] pl-0 ">
          <h3 className=" mb-[1rem] cursor-text text-[1rem] font-bold text-[#292940]  ">
            INTEGRATIONS
          </h3>

          <ul className=" pt-3">
            <li className=" block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Calendly
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Google Ads
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Google Sheets
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Google Analytics
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              WhatsApp Business
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff] ">
              <a className="flex items-center justify-start font-bold text-[#5f77ff] ">
                <font className="hover:underline ">More integrations</font>
                <span>
                  <IoIosArrowForward className="font-extrabold" />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className=" mt-0 min-w-[200px] pl-0 ">
          <h3 className=" mb-[1rem] cursor-text text-[1rem] font-bold text-[#292940]  ">
            INSTALLATION
          </h3>

          <ul className=" pt-3">
            <li className=" block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              WordPress
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Shopify
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Lightspeed
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              YourWeb
            </li>
            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
              Google Tag Manager
            </li>

            <li className="block whitespace-nowrap py-[0.375rem]  pl-0 pr-[1.5rem] text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff] ">
              <a className="flex items-center justify-start font-bold text-[#5f77ff] ">
                <font className="hover:underline ">More guides</font>
                <span>
                  <IoIosArrowForward className="font-extrabold" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
