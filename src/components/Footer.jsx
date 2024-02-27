function Footer() {
  return (
    <footer className="shrink flex-grow bg-[#292940] pt-8 text-white ">
      <div className=" mt-10 block px-6 py-12 md:p-12  ">
        <div className="mx-auto my-0 w-auto md:max-w-[1152px]">
          <div className=" m-[-.75rem] md:flex  ">
            <div className="block shrink flex-grow basis-0 p-[.75rem] ">
              <h3 className="mb-6 text-[1rem] font-semibold uppercase text-[#5f77ff]  ">
                LEFT
              </h3>

              <ul>
                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Showroom</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">prices</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Vacancies</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Help center</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Want to become a partner?</li>
                </a>
              </ul>
            </div>

            <div className="block shrink flex-grow basis-0 p-[.75rem] ">
              <h3 className="mb-6 text-[1rem] font-semibold uppercase text-[#5f77ff]  ">
                TEMPLATES
              </h3>

              <ul>
                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">WhatsApp Widget</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Leadbot quote</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Video Leadbot</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Contact Leadbot</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Calendly Leadbot</li>
                </a>
              </ul>
            </div>

            <div className="block shrink flex-grow basis-0 p-[.75rem] ">
              <h3 className="mb-6 text-[1rem] font-semibold uppercase text-[#5f77ff]  ">
                BLOG
              </h3>

              <ul>
                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">WhatsApp Business</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Conversion optimization</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Manuals</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">5-minute installation</li>
                </a>

                <a href="#" className=" hover:underline ">
                  <li className=" pb-2 ">Use cases</li>
                </a>
              </ul>
            </div>

            <div className="block shrink flex-grow basis-0 p-[.75rem] ">
              <h3 className="mb-6 text-[1rem] font-semibold uppercase text-[#5f77ff]  ">
                CONTACT
              </h3>

              <div>
                <p>
                  <strong>Futy HQ</strong>

                  <font>Computerweg 11 </font>
                  <br />

                  <font>3542 DP Utrecht </font>
                  <br />

                  <font>Netherlands </font>
                </p>
              </div>

              <div className=" mt-6 font-bold  ">
                <p>Futy is rated 4.8/5 (162 reviews) on Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto my-0 w-auto md:max-w-[1152px] ">
        <div className=" mt-4 border-t-[1px] border-white border-opacity-10 px-6 py-8  ">
          <a className=" cursor-pointer text-[.875rem] text-white hover:underline ">
            General terms and conditions
          </a>

          <a className=" ml-6 cursor-pointer text-[.875rem] text-white hover:underline ">
            Privacy Policy
          </a>

          <div className=" ml-6 inline cursor-pointer text-[.875rem] text-white hover:underline ">
            Chamber of Commerce: 78685192
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
