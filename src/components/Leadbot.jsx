import { IoIosArrowForward } from 'react-icons/io';

import RightSlide from '../assets/image/right.svg';
import LeftSlide from '../assets/image/left.svg';
import { useState } from 'react';

const data = [];

function Leadbot() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? data.length - 1 : currentIndex - 1;

    setCurrentIndex(newSlide);
  };

  const nextSlide = () => {
    const isFirstSlide = currentIndex === data.length - 1;
    const newSlide = isFirstSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newSlide);
  };

  return (
    <section className=" mb-12 px-6 py-12 md:px-6 md:py-24 ">
      <div className=" relative mx-auto my-0 w-auto flex-grow md:max-w-[1152px]">
        {/* Text */}
        <div className=" text-center ">
          <div className="">
            <h2 className="text-[2rem] font-extrabold leading-[1.5] text-[#292940] md:text-[2.5rem] ">
              Popular Leadbots
            </h2>
          </div>

          <div className=" mx-auto mb-0 mt-4 max-w-[600px] text-[1.125rem] text-[#575778]  ">
            <p>
              Set up the Leadbot dynamically on your website. Show per page, and
              outside opening hours, other buttons and contacts.
            </p>
          </div>

          <a className=" mt-6 flex h-8 cursor-pointer justify-center whitespace-nowrap pr-4 text-center font-bold text-[#5f77ff]  hover:underline  ">
            <font>Read more about our Leadbots</font>
            <span className="relative right-[-.65em] ml-[.28125em] mr-[calc(-.5625em-1px)] flex h-[1.5em] w-[1.5em] items-center justify-center  ">
              <IoIosArrowForward className="font-extrabold" />
            </span>
          </a>
        </div>

        {/* Slide */}

        <div className="mt-8">
          <div className=" relative box-border block ">
            <div
              onClick={prevSlide}
              className=" absolute bottom-[-35px] left-0 top-auto z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent p-0 leading-[0] text-[#5f77ff] md:top-1/2 md:transform-none md:bg-[#eff1ff]  "
            >
              <img src={LeftSlide} alt="Left" />
            </div>

            <div className="relative m-0 block overflow-hidden p-0 ">
              <div className=" relative left-0 top-0 mb-12 flex  w-full justify-center ">
                <div className=" flex h-full min-h-[1px] w-[478px] outline-none md:w-full ">
                  <div className=" inline-block h-[470px] w-full p-[5px] md:h-[600px] md:px-12 md:py-4 ">
                    <div className="relative grid h-full w-full grid-cols-[1fr] grid-rows-[auto_1fr_auto] overflow-hidden  rounded-lg bg-[#f7f8ff] ">
                      <div className=" flex h-full w-full justify-center self-center overflow-hidden bg-[#f7f8ff] p-4 md:rounded-l-lg md:rounded-r-lg ">
                        <div className=" h-full w-full ">
                          <img
                            src="https://images.prismic.io/futy-io/66fca36c-8a71-4ff9-bcf8-d6c2edf3970c_contact-bot-Featured+Image.png?auto=compress,format&rect=0,0,600,600&w=400"
                            alt="logo"
                          />
                        </div>
                      </div>

                      <div className=" w-full bg-[#fff] p-6 md:bg-[#292940] md:p-[2rem_2rem_1rem] ">
                        <h3 className="  text-[1.125rem] leading-normal text-[#292940] md:mb-4 md:text-[1.375rem] md:text-white  ">
                          Contact bot
                        </h3>

                        <div className=" hidden text-[.9375rem] text-white md:block ">
                          <p>
                            Met de Contact bot bied je bezoekers de mogelijkheid
                            om een vraag te stellen via WhatsApp, Telefoon of
                            E-mail. Of om een Terugbelverzoek achter te laten of
                            een Video Call in te plannen.
                          </p>
                        </div>
                      </div>

                      <div className=" bg-[#fff]  p-[.75rem_1.5rem]   md:bg-[#292940] md:p-[0_2rem_2rem] ">
                        <div className=" mb-[-.5rem] flex flex-wrap items-center  justify-start ">
                          <button className="relative mb-2 mr-2  h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[1.125em] py-1.5 text-center align-top text-[.75rem]	 font-semibold	leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
                            Meer informatie
                          </button>

                          <a className="relative mb-2 mr-2 inline-flex h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-[#5f77ff]	  px-[1.125em] py-1.5 text-center align-top text-[.75rem]	 	font-semibold leading-normal text-white hover:bg-[#566add] hover:text-white ">
                            Start gratis ontwerp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" hidden h-[470px] w-full p-[5px] md:inline-block md:h-[600px] md:px-12 md:py-4 ">
                    <div className="relative grid h-full w-full grid-cols-[1fr] grid-rows-[auto_1fr_auto] overflow-hidden  rounded-lg bg-[#f7f8ff] ">
                      <div className=" flex h-full w-full justify-center self-center overflow-hidden bg-[#f7f8ff] p-4 md:rounded-l-lg md:rounded-r-lg ">
                        <div className=" h-full w-full ">
                          <img
                            src="https://images.prismic.io/futy-io/66fca36c-8a71-4ff9-bcf8-d6c2edf3970c_contact-bot-Featured+Image.png?auto=compress,format&rect=0,0,600,600&w=400"
                            alt="logo"
                          />
                        </div>
                      </div>

                      <div className="w-full bg-[#fff] p-6 md:bg-[#292940] md:p-[2rem_2rem_1rem] ">
                        <h3 className=" text-[1.125rem] leading-normal text-[#292940] md:mb-4 md:text-[1.375rem] md:text-white  ">
                          Contact bot
                        </h3>

                        <div className="  text-[.9375rem] text-white ">
                          <p>
                            Met de Contact bot bied je bezoekers de mogelijkheid
                            om een vraag te stellen via WhatsApp, Telefoon of
                            E-mail. Of om een Terugbelverzoek achter te laten of
                            een Video Call in te plannen.
                          </p>
                        </div>
                      </div>

                      <div className=" bg-[#fff]  p-[.75rem_1.5rem]   md:bg-[#292940] md:p-[0_2rem_2rem] ">
                        <div className=" mb-[-.5rem] flex flex-wrap items-center  justify-start ">
                          <button className="relative mb-2 mr-2  h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[1.125em] py-1.5 text-center align-top text-[.75rem]	 font-semibold	leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
                            Meer informatie
                          </button>

                          <a className="relative mb-2 mr-2 inline-flex h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-[#5f77ff]	  px-[1.125em] py-1.5 text-center align-top text-[.75rem]	 	font-semibold leading-normal text-white hover:bg-[#566add] hover:text-white ">
                            Start gratis ontwerp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={nextSlide}
              className=" absolute bottom-[-35px] right-0 top-auto z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent p-0 leading-[0] text-[#5f77ff] md:top-1/2 md:transform-none md:bg-[#eff1ff]"
            >
              <img src={RightSlide} alt="Right" />
            </div>

            <ul className=" absolute bottom-[-25px] left-1/2  m-0 flex w-full  -translate-x-1/2 transform items-center justify-center p-0 ">
              <li
                onClick={() => setCurrentIndex(0)}
                className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 "
              >
                <div className="flex h-full items-center justify-center ">
                  <span
                    className={`h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] ${
                      currentIndex === 0 ? 'opacity-100' : 'opacity-50'
                    }`}
                  ></span>
                </div>
              </li>

              <li
                onClick={() => setCurrentIndex(1)}
                className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 "
              >
                <div className="flex h-full items-center justify-center ">
                  <span
                    className={`h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] ${
                      currentIndex === 1 ? 'opacity-100' : 'opacity-50'
                    }`}
                  ></span>
                </div>
              </li>

              <li
                onClick={() => setCurrentIndex(2)}
                className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 "
              >
                <div className="flex h-full items-center justify-center ">
                  <span
                    className={`h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] ${
                      currentIndex === 2 ? 'opacity-100' : 'opacity-50'
                    }`}
                  ></span>
                </div>
              </li>

              <li
                onClick={() => setCurrentIndex(3)}
                className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 "
              >
                <div className="flex h-full items-center justify-center ">
                  <span
                    className={`h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] ${
                      currentIndex === 3 ? 'opacity-100' : 'opacity-50'
                    }`}
                  ></span>
                </div>
              </li>

              <li
                onClick={() => setCurrentIndex(4)}
                className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 "
              >
                <div className="flex h-full items-center justify-center ">
                  <span
                    className={`h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] ${
                      currentIndex === 4 ? 'opacity-100' : 'opacity-50'
                    }`}
                  ></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Leadbot;
