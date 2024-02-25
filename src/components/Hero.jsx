import { FaRegArrowAltCircleRight } from 'react-icons/fa';

function Hero() {
  return (
    <section className="block px-6 py-12 md:p-12 ">
      <div className=" relative mx-auto my-0 w-auto flex-grow md:max-w-[1152px] ">
        <div className="flex">
          {/* Text */}
          <div className="flex w-[50%] max-w-[550px] flex-col justify-center pr-4 ">
            <div>
              <a className="shadow-[0 1px 2px 0 rgba(67,67,113,.05)] mb-8 flex cursor-pointer items-center	justify-center rounded-3xl border border-[rgba(41,41,64,.08)] px-4 py-3 text-[1rem] text-[#292940] transition-all delay-200 ease-in-out ">
                Futy joins forces with
                <img
                  src="https://www.leadinfo.com/wp-content/uploads/2021/01/leadinfo-logo.svg"
                  alt="Logo"
                  className="ml-2 block max-h-6  max-w-full opacity-100 transition-all delay-500 ease-in-out "
                />
                <span className="relative ml-3 flex items-center text-[rgba(41,41,64,.7)] transition-all delay-200 ease-in-out  ">
                  <FaRegArrowAltCircleRight />
                </span>
              </a>
            </div>
            <h1></h1>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* Image */}
          <div className=" md:min-[550px] min-[550px] flex flex-1 items-center justify-center md:justify-end "></div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
