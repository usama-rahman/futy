import { IoIosArrowForward } from 'react-icons/io';

function Leadbot() {
  return (
    <section className=" mb-12 px-6 py-12 md:px-6 md:py-24 ">
      <div className=" my-o relative mx-auto w-auto flex-grow md:max-w-[1152px]">
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
        <div className="mt-8"></div>
      </div>
    </section>
  );
}
export default Leadbot;
