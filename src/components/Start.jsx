import { FaArrowRight } from 'react-icons/fa';

function Start() {
  return (
    <section className="px-6 py-12 lg:px-6 lg:py-24 ">
      <div className="relative mx-auto my-0 w-auto flex-grow md:max-w-[1152px] ">
        <div className="mx-8 my-0  text-center md:mb-16 ">
          <h2 className=" text-3xl font-extrabold leading-tight text-[#292940] md:text-4xl ">
            Starts in 5 minutes:
          </h2>
        </div>

        <div className=" mt-8 grid grid-rows-[auto]  gap-[2.5rem]	md:grid-cols-[repeat(3,320px)] md:justify-center md:justify-items-center md:gap-3  ">
          <div className=" relative w-full ">
            <div className=" flex items-center rounded-full border border-[#f4f4f5] bg-white px-[10px] py-2 shadow-xl transition-all delay-100 ease-in-out">
              <div className=" flex h-16 min-h-16 w-16 min-w-16 items-center justify-center rounded-full bg-[rgba(111,86,229)] bg-opacity-20 text-[rgba(117,86,229)]  ">
                <div className=" text-3xl font-bold ">1</div>
              </div>

              <div className=" pl-5 pr-3 ">
                <div className=" text-[1.125rem] font-bold leading-[1.25em] text-[#292940] ">
                  <p> Create an account</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" relative w-full ">
            <div className=" flex items-center rounded-full border border-[#f4f4f5] bg-white px-[10px] py-2 shadow-xl transition-all delay-100 ease-in-out">
              <div className=" flex h-16 min-h-16 w-16 min-w-16 items-center justify-center rounded-full bg-[rgba(66,189,221)] bg-opacity-20 text-[rgba(66,189,221)]  ">
                <div className=" text-3xl font-bold ">2</div>
              </div>

              <div className=" pl-5 pr-3 ">
                <div className=" text-[1.125rem] font-bold leading-[1.25em] text-[#292940] ">
                  <p> Install on your website</p>
                </div>
              </div>
            </div>

            <div className=" absolute left-[-12px] top-10 text-[#5f77ff] ">
              <FaArrowRight />
            </div>
          </div>

          <div className=" relative w-full ">
            <div className=" flex items-center rounded-full border border-[#f4f4f5] bg-white px-[10px] py-2 shadow-xl transition-all delay-100 ease-in-out">
              <div className=" flex h-16 min-h-16 w-16 min-w-16 items-center justify-center rounded-full bg-[rgba(32,191,85)] bg-opacity-20 text-[rgba(32,191,85)]  ">
                <div className=" text-3xl font-bold ">3</div>
              </div>

              <div className=" pl-5 pr-3 ">
                <div className=" text-[1.125rem] font-bold leading-[1.25em] text-[#292940] ">
                  <p> Receive more Leads</p>
                </div>
              </div>
            </div>

            <div className="absolute left-[-12px] top-10 text-[#5f77ff]">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className=" mx-auto  mt-8 text-center ">
          <a className="relative mb-2 mr-2 inline-flex h-[2.857em] cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-[#5f77ff] px-[1.125em] py-1.5 text-center align-top	text-[.875rem] 	font-semibold leading-normal text-white hover:bg-[#566add] hover:text-white ">
            <span className="text-[1rem] ">Try for free →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Start;
