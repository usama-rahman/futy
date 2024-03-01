import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

function BlogFeture() {
  return (
    <section className="reviewSection mt-10 block  px-6 py-12">
      <div className="mx-auto my-0 w-auto md:max-w-[1152px]">
        <h1 className=" text-[2rem] font-extrabold text-[#292940] md:text-[2.5rem] ">
          Blog
        </h1>

        <article className="mt-8  overflow-hidden rounded-xl text-white shadow-[1_2px_3px_rgba(41,41,64,.08),0_0_0_1px_rgba(41,41,64,.08)] md:flex md:min-h-[475px] ">
          <div className=" max-h-250px overflow-hidden md:max-h-[475px] md:w-[50%] ">
            <img
              src="https://images.prismic.io/futy-io/3495ad56-9f35-4701-b080-0d7b5ca713f7_wa-vasttelefoonnummer-2.png?auto=compress,format&w=800"
              alt="BlogImage"
            />
          </div>

          <div className="flex flex-col justify-center bg-white p-6 md:w-[50%] md:p-12  ">
            <div>
              <div className="mb-2  inline-flex h-[2em] cursor-pointer items-center justify-center rounded-full  bg-[rgba(32,191,85)] bg-opacity-10 px-[.75em] text-[.75rem] text-[rgba(32,191,85)] ">
                WhatsApp Business
              </div>
            </div>

            <div>
              <h2 className=" mt-2 text-[1.75rem] font-extrabold text-[#292940] md:text-[2rem] ">
                Link your landline telephone number to WhatsApp in 6 steps
              </h2>
            </div>

            <div>
              <p className=" text-xs-[1.125rem] mb-8 mt-4 text-[#292940]  ">
                Link your landline telephone number to the WhatsApp Business app
                for free in 6 steps to use WhatsApp for business.It is also
                possible to...
              </p>
            </div>

            <div className="mb-[-.5rem] flex flex-wrap items-center justify-start font-semibold text-[#5f77ff]  ">
              <Link
                to="/blog/vast-telefoonnummer-koppelen-whatsapp"
                className=" flex hover:underline"
              >
                Read further
                <span className=" relative right-[-.35em] flex items-center justify-center ">
                  <IoIosArrowForward />
                </span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
export default BlogFeture;
