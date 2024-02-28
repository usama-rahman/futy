import RightSvg from '../assets/image/rightBlue.svg';

function Pricing() {
  return (
    <section className="block px-6 py-12 ">
      <div className=" mx-auto my-0 w-auto md:max-w-[1152px] ">
        <div className=" text-center  md:mt-8 ">
          <h1 className=" mb-4 text-[1.875rem] font-extrabold text-[#292940] md:text-[2.75rem] ">
            Start generating leads today
          </h1>

          <ul className="flex   flex-row justify-center ">
            <li className=" mr-8 inline-flex px-0 py-1 font-[1rem] text-[#575778] md:mr-0 md:self-center md:px-2 md:py-0 md:text-[1em]  ">
              <img src={RightSvg} className="text-[#5f77ff mr-2" alt="" />
              Try for 14 days
            </li>

            <li className="mx-8 hidden px-0 py-1 font-[1rem] text-[#575778] md:inline-flex md:self-center md:px-2 md:py-0 md:text-[1em]  ">
              <img src={RightSvg} className="text-[#5f77ff mr-2" alt="" />
              No payment details required
            </li>

            <li className=" inline-flex px-0 py-1 font-[1rem] text-[#575778] md:self-center md:px-2 md:py-0 md:text-[1em]  ">
              <img src={RightSvg} className="text-[#5f77ff mr-2" alt="" />
              Can be canceled at any time
            </li>
          </ul>
        </div>
      </div>

      <div className=" mb-8 mt-16 ">
        <div className=" flex items-center justify-center ">
          <div className=""></div>
        </div>

        <div className=""></div>
      </div>
    </section>
  );
}
export default Pricing;
