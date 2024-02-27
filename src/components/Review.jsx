import { FaQuoteLeft } from 'react-icons/fa';

function Review() {
  return (
    <section className="reviewSection mt-10 block px-6 py-12  ">
      <div className=" mx-auto my-0 w-auto md:max-w-[1152px] ">
        <div className=" mb-12 max-w-[600px] text-left md:mb-16 ">
          <h2 className=" text-[2rem] font-extrabold text-[#292940] md:text-[2.5rem] ">
            What do customers say about Futy?
          </h2>

          <div className=" mt-4 text-[1.125rem] text-[#575778]  md:pr-8 ">
            <p>
              For us, everything revolves around customer satisfaction. We are
              only satisfied when you are satisfied.
            </p>
          </div>
        </div>

        <div className="  md:flex ">
          <div className=" mb-6 flex w-full flex-col rounded-2xl border bg-[#292940] bg-[right_0_top_-40px,right_-3px_bottom_0;] bg-[url(https://www.futy.io/bg-blob-oval-dark-blue.svg)] bg-no-repeat px-5 py-7 md:mb-0 md:mr-8 md:max-w-[450px] md:p-8 ">
            <div className=" mb-2 text-[#5f77ff] ">
              <FaQuoteLeft className="h-7 w-8 " />
            </div>

            <div className=" flex-1 text-[1.0625rem] italic text-white ">
              <p>
                We use Futy a lot for our customers&apos; online marketing
                campaigns.At one of our customers, the number of
                <strong>
                  contact moments increased by 400% in a 3-week test period!
                </strong>
              </p>
            </div>

            <div className=" mt-[1.75rem] flex items-center ">
              <div className="h-14 w-14 ">
                <img
                  className="rounded-full border-[2px] border-white "
                  src="https://images.prismic.io/futy-io/18ad197d-9b11-430d-821f-7dc1fab9de1c_roald.png?auto=compress,format&rect=0,0,188,188&w=200&h=200"
                />
              </div>

              <div className="ml-[1.25rem]  ">
                <div className=" text-[1.125rem] font-extrabold text-white ">
                  <p> Roald Mulder </p>
                </div>

                <div className=" mt-[.15rem] text-[.8125rem] text-[#b9b9c9]  ">
                  <p>Social Road - Digital Marketing Agency</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" mb-6 flex w-full flex-col rounded-2xl border bg-[#292940] bg-[right_0_top_-40px,right_-3px_bottom_0;] bg-[url(https://www.futy.io/bg-blob-oval-dark-blue.svg)] bg-no-repeat px-5 py-7 md:mb-0 md:mr-8 md:max-w-[450px] md:p-8 ">
            <div className=" mb-2 text-[#5f77ff] ">
              <FaQuoteLeft className="h-7 w-8 " />
            </div>

            <div className=" flex-1 text-[1.0625rem] italic text-white ">
              <p>
                Great tool! My first feedback is that it is very easy to install
                the Leadbot. Allowed two hours for it, but was done before the
                coffee was gone.
              </p>
            </div>

            <div className=" mt-[1.75rem] flex items-center ">
              <div className="h-14 w-14 ">
                <img
                  className="rounded-full border-[2px] border-white "
                  src="https://images.prismic.io/futy-io/e3bbcce8-9268-43f5-a1ed-3fd1eec0095d_harm-blokvoort.jpg?auto=compress,format&rect=0,0,150,150&w=200&h=200"
                />
              </div>

              <div className="ml-[1.25rem]  ">
                <div className=" text-[1.125rem] font-extrabold text-white ">
                  <p> Harm Blokvoort </p>
                </div>

                <div className=" mt-[.15rem] text-[.8125rem] text-[#b9b9c9]  ">
                  <p>Strong In LED BV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Review;
