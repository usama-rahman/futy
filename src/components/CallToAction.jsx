import RightSvg from '../assets/image/rightSvg.svg';

function CallToAction() {
  return (
    <section className="reviewSection mt-10 block px-6 py-12">
      <div className="mx-auto my-0 w-auto md:max-w-[1152px]">
        <div className=" rounded-3xl bg-[#5f77ff] bg-[url(https://www.futy.io/box-bg-blob-small.svg)] bg-[left_-30px_top_0] bg-no-repeat px-6 py-12 text-center md:px-12 md:py-20 ">
          <div className="mb-6">
            <h2 className=" text-[1.75rem] text-white md:text-[2.5rem] ">
              We guarantee more Leads through your website
            </h2>
          </div>

          <div className=" flex justify-center ">
            <ul className="flex flex-col text-left md:flex-row md:justify-center ">
              <li className=" inline-flex px-0 py-1 font-[1rem] text-white md:self-center md:px-2 md:py-0 md:text-[1.125rem]  ">
                <img src={RightSvg} className="mr-2" alt="" />
                Try it for free for 14 days
              </li>

              <li className=" inline-flex px-0 py-1 font-[1rem] text-white md:self-center md:px-2 md:py-0 md:text-[1.125rem]  ">
                <img src={RightSvg} className="mr-2" alt="" />
                Plug & play
              </li>

              <li className=" inline-flex px-0 py-1 font-[1rem] text-white md:self-center md:px-2 md:py-0 md:text-[1.125rem]  ">
                <img src={RightSvg} className="mr-2" alt="" />
                No payment details required
              </li>
            </ul>
          </div>

          <div className=" mb-4 mt-10 flex  flex-col flex-wrap items-center justify-center md:flex-row  ">
            <button className="relative mb-2 mr-2 h-[2.857em] w-full cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-white bg-[#5f77ff] px-[1.125em] py-1.5 text-center align-top text-[1.125rem] font-semibold	 leading-normal	text-white hover:bg-white hover:text-[#5f77ff] md:inline-flex md:w-[30%] lg:w-[20%] ">
              Schedule a demo
            </button>

            <a className="relative mb-2 mr-2 inline-flex h-[2.857em] w-full cursor-pointer items-center justify-center text-nowrap rounded-[4px] border border-[#5f77ff] bg-white px-[1.125em] py-1.5 text-center align-top text-[1.125rem]	 	font-semibold leading-normal text-[#5f77ff] md:w-[30%] lg:w-[20%]  ">
              Start for free
            </a>
          </div>

          <div className="mt-8">
            <strong className="font-bold text-white ">
              There is both a free and a paid version available
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CallToAction;
