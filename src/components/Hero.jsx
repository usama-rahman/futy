import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <section className="block px-6 py-12 md:p-12 ">
      <div className=" relative mx-auto my-0 w-auto flex-grow md:max-w-[1152px] ">
        <div className="md:flex">
          {/* Text */}
          <div className="flex  max-w-[550px] flex-col justify-center pr-4 ">
            <div>
              <a className=" mb-8 flex w-[80%] cursor-pointer	 items-center	justify-center rounded-3xl border border-[rgba(41,41,64,.08)] px-4 py-3 text-[1rem] text-[#292940] transition-all delay-200 ease-in-out hover:border-[#5f77ff] hover:shadow-[0_0_0_4px_#dfe4ff] md:w-[70%] ">
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
            <h1 className="line text-3xl font-[800]	 leading-tight text-[#292940] md:text-4xl ">
              <span className="md:text-[2.5rem]">
                <font>Easily convert your website visitors into</font>
              </span>

              <span>
                <Typewriter
                  options={{
                    strings: ['Calls', 'Customers', 'Sales', 'Leads'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>

            <div className="mt-4 text-lg md:mt-6 md:pr-8  ">
              <p className="text-[#575778]">
                <font>With Futy&apos;s </font>
                <strong className="font-[700] ">Leadbots</strong>
                <font>
                  , your website converts visitors into Leads in a
                  customer-friendly manner, including via WhatsApp, Video call
                  or a Quote Request.
                </font>
              </p>
            </div>

            <div className="mb-0 mt-8 flex flex-wrap items-center justify-start  ">
              <button className="relative mb-2 mr-2  h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[1.125em] py-1.5 text-center align-top	 font-semibold	leading-normal text-[#5f77ff] hover:bg-[#5f77ff] hover:text-white md:inline-flex ">
                Schedule a demo
              </button>

              <a className="relative mb-2 mr-2 inline-flex h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-[#5f77ff] px-[1.125em] py-1.5 text-center align-top	 	font-semibold leading-normal text-white hover:bg-[#566add] hover:text-white ">
                create an account
              </a>
            </div>

            <div className="mt-3 text-sm text-[#7f7f8c] ">
              <p>
                <em>
                  <font>Installed on </font>
                  <strong>any</strong>
                  <font> website within 5 minutes.</font>
                </em>
              </p>
            </div>
          </div>
          {/* Image */}
          <div className=" md:min-[550px] min-[550px] flex flex-1 items-center justify-center md:justify-end ">
            <img
              src="https://images.prismic.io/futy-io/c8d56270-9fbc-43fd-ba88-4ded57b8bc7d_hero-homepage.jpg?auto=compress,format&rect=0,0,1100,1100&w=550"
              alt="Futy"
              className="block h-auto max-h-[550px] w-full max-w-[550px]  "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
