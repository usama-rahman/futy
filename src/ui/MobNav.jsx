import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const MobNav = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const handleSolutions = (e) => {
    e.preventDefault();
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const handleBlog = (e) => {
    e.preventDefault();
    setIsBlogOpen(!isBlogOpen);
  };

  return (
    <div className="  left-0 top-[4.375rem] flex h-screen w-full flex-col bg-white">
      <div className=" z-20  w-full pl-3 pt-2 leading-normal	 ">
        <ul className="gap-2">
          <li className=" relative px-5 py-2 text-[1.5rem] font-semibold text-[#292940] ">
            <Link to="/">Home</Link>
          </li>
          <li className=" relative px-5 py-2 text-[1.5rem] font-semibold text-[#292940] ">
            <a href="">Product</a>
          </li>

          <li className=" relative px-5 py-2 text-[1.5rem] font-semibold text-[#292940] ">
            <Link to="/pricing">Price</Link>
          </li>

          <li
            onClick={handleSolutions}
            className=" relative px-5 py-2 text-[1.5rem] font-semibold text-[#292940] "
          >
            <span className="flex w-full cursor-pointer flex-row justify-between ">
              <a href="">Solutions</a>
              <span className="flex items-center pr-6 text-4xl ">
                {isSolutionsOpen ? (
                  <MdOutlineKeyboardArrowDown />
                ) : (
                  <IoIosArrowUp />
                )}
              </span>
            </span>
            {isSolutionsOpen && <SolutionsOpen />}
          </li>

          <li
            onClick={handleBlog}
            className=" relative px-5 py-2 text-[1.5rem] font-semibold text-[#292940] "
          >
            <span className="flex w-full cursor-pointer flex-row justify-between ">
              <a href="">Blog</a>
              <span className="flex items-center pr-6 text-4xl ">
                {isBlogOpen ? <MdOutlineKeyboardArrowDown /> : <IoIosArrowUp />}
              </span>
            </span>
            {isBlogOpen && <BlogOpen />}
          </li>
        </ul>
      </div>

      {/* Buttons */}

      <div>
        <div className="  bottom-16 left-0  flex w-full justify-between bg-white px-8 py-8 ">
          <a className="relative mb-2 mr-2  h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[5em] py-1.5 text-center align-top	text-[.875rem] font-semibold leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
            <span className="text-[1rem]"> login</span>
          </a>
          <a className="relative mb-2 mr-2 inline-flex h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-[#5f77ff] px-[4em] py-3 text-center align-top	text-[.875rem] 	font-semibold leading-normal text-white hover:bg-[#566add] hover:text-white ">
            <span className="text-[1rem]"> Start for free →</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobNav;

const SolutionsOpen = () => {
  return (
    <>
      <div className=" mt-4 pl-4 ">
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

const BlogOpen = () => {
  return (
    <div
      className="
      mt-4 pl-4
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

          <li className="mb-4 block cursor-pointer whitespace-nowrap py-2 text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff] ">
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
          <li className="mb-4 block cursor-pointer whitespace-nowrap py-2 text-[1rem] font-medium	 text-[#575778] hover:text-[#5f77ff]">
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

          <li className="mb-4 block cursor-pointer whitespace-nowrap py-2 text-[1rem]	 font-medium text-[#575778] hover:text-[#5f77ff] ">
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
  );
};
