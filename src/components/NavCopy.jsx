/* eslint-disable no-unused-vars */

import { RiMenu4Line } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

function NavCopy() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <>
      <header className="block min-h-[4.375rem]">
        {/* navbar */}
        <div className=" fixed left-0 right-0 top-0 z-30 flex items-stretch bg-white shadow-sm md:min-h-[4.375rem] md:px-[1.5rem] ">
          {/* class="container is-widescreen" */}
          <div className="relative mx-auto my-0 flex h-[100%] min-h-[4.375rem] w-auto grow items-stretch justify-between md:flex md:max-w-[1152px] ">
            {/* class="navbar-brand" */}
            <div className="flex min-h-[4.375rem] shrink-0 items-stretch md:mr-8 ">
              Futy
            </div>
            {/* navbar-menu */}
            <div className="  flex items-center  justify-between md:flex md:min-h-[4.375rem] md:shrink-0 md:grow md:items-stretch ">
              {/* class="navbar-start" */}
              <div className=" hidden flex-col md:mr-auto md:flex md:flex-row md:items-stretch md:justify-start ">
                {/* class="navbar-item nuxt-link-exact-active nuxt-link-active" */}
                <a className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940] ">
                  Home
                </a>
                <a className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940] ">
                  Product
                </a>
                <a className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940] ">
                  Home
                </a>
                {/* class="navbar-item navbar-dropdown is-open" */}
                <div className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940]  ">
                  {/* class="navbar-link" */}
                  <div className="cursor-pointer pr-6">Solutions</div>
                  {/* class="arrow" */}
                  <div className="block"></div>
                  {/* class="navbar-dropdown-menu-wrapper" */}
                  <div className="z-20  min-w-full md:absolute md:left-[-1rem] md:top-full md:hidden md:pt-4 ">
                    {/* class="navbar-dropdown-menu" */}
                    <div className=" shadow-[0 0 30px 0 rgba(67,67,113,.2)] flex rounded-2xl bg-white p-7 ">
                      {/* class="navbar-dropdown-column" */}

                      <div className="ml-4 mt-4 md:mt-0 md:min-w-52 md:pl-0">
                        {/* class="column-title" */}
                        <h3 className="mb-2 text-[1rem] font-semibold uppercase text-[#292940]  md:mb-4 ">
                          Industries
                        </h3>

                        <ul>
                          <li>
                            <a>Automotive</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940]  ">
                  {/* class="navbar-link" */}
                  <div className="cursor-pointer pr-6">Blog</div>
                  {/* class="arrow" */}
                </div>
              </div>
              {/*  class="navbar-end" */}
              <div className="md:flex-end md:ml-auto md:flex md:items-stretch">
                {/* class="buttons" */}
                <div className="flex flex-1 items-center justify-end px-3 py-2 md:flex-wrap md:justify-start ">
                  <a className="relative mb-2 mr-2 hidden h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[1.125em] py-1.5 text-center align-top	text-[.875rem] font-semibold	leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
                    login
                  </a>
                  <a className="relative mb-2 mr-2 inline-flex h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-[#5f77ff] px-[1.125em] py-1.5 text-center align-top	text-[.875rem] 	font-semibold leading-normal text-white hover:bg-[#566add] hover:text-white ">
                    <span className="text-[.75rem]"> Start for free →</span>
                  </a>
                </div>
              </div>
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mb-2 cursor-pointer pr-3 text-2xl md:hidden "
              >
                {isMenuOpen ? <IoClose /> : <RiMenu4Line />}
                {isMenuOpen && <MobNav />}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default NavCopy;

const MobNav = () => {
  return (
    <div className="absolute left-0 top-[4.375rem] flex h-screen w-full flex-row">
      <div className=" z-20 w-full  bg-blue-300 pl-3 pt-2 leading-normal	 ">
        <ul className="gap-2">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Price</a>
          </li>
          <li></li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="absolute  bottom-16 left-0 z-30 flex w-full justify-between bg-white px-8 py-8 ">
          <a className="relative mb-2 mr-2  h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[5em] py-1.5 text-center align-top	text-[.875rem] font-semibold	leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
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
