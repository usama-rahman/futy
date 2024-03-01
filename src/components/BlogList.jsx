import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

import catagortData from '../data/catagory';
import blogList from '../data/bolgList';

function BlogList() {
  return (
    <section className="reviewSection mt-10 block  px-6 py-12">
      <div className="mx-auto my-0 w-auto md:max-w-[1152px]">
        <div className=" blogGrid grid md:gap-x-12 ">
          <div className=" articleGrid grid ">
            {blogList.map((item) => (
              <article
                key={item.id}
                className=" flex  flex-col overflow-hidden rounded-xl bg-white shadow-[0_2px_3px_rgba(41,41,64,.08),0_0_0_1px_rgba(41,41,64,.08)] transition-all duration-200 "
              >
                <div className="h-[220px]  border">
                  <img
                    className=" h-full w-full object-cover "
                    alt={item.title}
                    src={item.image}
                  />
                </div>

                <div className="  p-8 ">
                  <div className=" mb-3 mr-1 inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-[rgba(209,52,91)] bg-opacity-10 px-3 text-[.75rem] text-[rgba(209,52,91)] ">
                    {item.tags}
                  </div>

                  <h3 className=" text-[1.5rem] font-extrabold text-[#292940] md:text-[1.75rem] ">
                    {item.title}
                  </h3>

                  <p className=" mt-4 flex-1 ">{item.content}</p>

                  <div className=" mt-4 flex flex-wrap items-center justify-start font-semibold text-[#5f77ff]">
                    <Link className=" flex text-[.875rem] hover:underline">
                      Read further
                      <span className=" relative right-[-.35em] flex items-center justify-center ">
                        <IoIosArrowForward />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className=" catagoryGrid ">
            <div className=" border-b border-[#cfd6ff] pb-2 ">
              <h4 className=" text-2xl font-extrabold text-[#292940] ">
                Catagory
              </h4>
            </div>

            <ul className="mt-6">
              {catagortData.map((item) => (
                <li key={item} className="mb-5 ">
                  <div className=" flex rounded-xl bg-white p-3 shadow-[0_2px_3px_rgba(41,41,64,.08),0_0_0_1px_rgba(41,41,64,.08)] ">
                    <div className=" h-20 w-20 overflow-hidden rounded-xl ">
                      <img src={item.image} alt={item.title} />
                    </div>

                    <div className=" flex flex-1 flex-col justify-center pl-5 ">
                      <h3 className=" text-[1.125rem] font-semibold ">
                        {item.title}
                      </h3>

                      <p className=" mt-0.5 text-[.875rem] text-[#575778] ">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BlogList;
