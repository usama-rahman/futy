const Company = () => {
  return (
    <section className="block px-6 py-12 md:p-12 ">
      <div className=" relative mx-auto my-0 w-auto flex-grow md:max-w-[960px] lg:max-w-[1152px] ">
        {/* Text */}
        <div className=" mb-4 text-center ">
          <h3 className=" text-[.9375rem] font-bold	leading-normal	 text-[#7a7b9a] ">
            More than 10,000 companies preceded you
          </h3>
        </div>
        {/* Logo */}
        <div className="gridLogo md:grid-rows[repeat(1,55px)] grid md:grid-cols-[repeat(5,1fr)] ">
          <div className=" flex  items-center justify-center ">
            <div className="w-[50%]">
              <img
                src="https://images.prismic.io/futy-io/e38d8ca0-c4dc-45e4-aa75-20449f7ee110_verbree.png?auto=compress,format"
                alt="Vakgarage Verbree logo"
              />
            </div>
          </div>

          <div className="flex  items-center justify-center">
            <div className="w-[50%]">
              <img
                src="https://images.prismic.io/futy-io/c9f7a440-823e-4005-8652-363881581898_Logo-okura.png?auto=compress,format"
                alt="Vakgarage Verbree logo"
              />
            </div>
          </div>

          <div className="hidden  items-center  justify-center md:flex ">
            <div className="w-[50%]">
              <img
                src="https://images.prismic.io/futy-io/dc851a92-f8ca-4cd5-b65f-33be2fe39b31_dtc.png?auto=compress,format"
                alt="Vakgarage Verbree logo"
              />
            </div>
          </div>

          <div className="flex  items-center justify-center">
            <div className="w-[50%]">
              <img
                src="https://images.prismic.io/futy-io/cba02dc4-7115-4e6f-be16-af50eb4214f5_runners-lab.png?auto=compress,format"
                alt="Vakgarage Verbree logo"
              />
            </div>
          </div>

          <div className="flex  items-center justify-center">
            <div className="w-[50%]">
              <img
                src="https://images.prismic.io/futy-io/56a4be23-0f2c-45ce-b4ad-44f3c0f2915e_letselschade.png?auto=compress,format"
                alt="Vakgarage Verbree logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Company;
