function Consultation() {
  return (
    <section className="block lg:px-6 lg:py-36 ">
      <div className="mx-4 my-0 w-auto md:mx-6 md:max-w-[1152px] lg:mx-auto ">
        <div className=" activeBox rounded-[24px] bg-[#5f77ff] bg-[left_-30px_top_0,right_-100px_bottom_0] bg-[url(https://www.futy.io/box-bg-blob-small.svg),url(https://www.futy.io/box-bg-blob-big.svg)] bg-no-repeat	p-8  md:bg-[left_0_top_0,right_0_bottom_0] md:p-16 ">
          <div className=" md:max-w-[60%] ">
            <div className=" mb-4 md:mb-6 ">
              <h3 className="text-[2.5rem] font-extrabold text-white ">
                Schedule a consultation
              </h3>
            </div>

            <div className="text-[1.125rem] text-white md:pr-8 ">
              <p>
                Schedule an online consultation with one of our marketing
                experts and discuss the options for your website.
              </p>
            </div>

            <div className=" mt-6 flex w-full flex-wrap items-center justify-start md:mt-8 md:w-[60%] lg:w-[40%] ">
              <button className=" mb-2 w-full cursor-pointer justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-[1.125em] py-[calc(.5em-1px)] text-center text-[1rem] font-bold text-[#5f77ff] shadow-none ">
                Schedule a consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Consultation;
