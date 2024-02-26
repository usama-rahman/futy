function Start() {
  return (
    <section className="px-6 py-12 lg:px-6 lg:py-24 ">
      <div className="relative mx-auto my-0 w-auto flex-grow md:max-w-[1152px] ">
        <div className="mx-8 my-0  text-center md:mb-16 ">
          <h2 className=" text-3xl font-extrabold leading-tight text-[#292940] md:text-4xl ">
            Starts in 5 minutes:
          </h2>
        </div>

        <div className=" grid grid-rows-[auto] gap-[2.5rem]  md:grid-cols-[repeat(3,320px)]	 md:justify-center md:justify-items-center md:gap-3  ">
          <div className=" relative w-full ">
            <div className=" flex items-center rounded-full border border-[#f4f4f5] bg-white px-[10px] py-2 transition-all delay-100 ease-in-out hover:shadow-xl">
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
            <div className=" flex items-center rounded-full border border-[#f4f4f5] bg-white px-[10px] py-2 transition-all delay-100 ease-in-out hover:shadow-xl">
              <div className=" flex h-16 min-h-16 w-16 min-w-16 items-center justify-center rounded-full bg-[rgba(66,189,221)] bg-opacity-20 text-[rgba(66,189,221)]  ">
                <div className=" text-3xl font-bold ">2</div>
              </div>

              <div className=" pl-5 pr-3 ">
                <div className=" text-[1.125rem] font-bold leading-[1.25em] text-[#292940] ">
                  <p> Install on your website</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" relative w-full ">
            <div className=" flex items-center rounded-full border border-[#f4f4f5] bg-white px-[10px] py-2 transition-all delay-100 ease-in-out hover:shadow-xl">
              <div className=" flex h-16 min-h-16 w-16 min-w-16 items-center justify-center rounded-full bg-[rgba(32,191,85)] bg-opacity-20 text-[rgba(32,191,85)]  ">
                <div className=" text-3xl font-bold ">3</div>
              </div>

              <div className=" pl-5 pr-3 ">
                <div className=" text-[1.125rem] font-bold leading-[1.25em] text-[#292940] ">
                  <p> Receive more Leads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Start;
