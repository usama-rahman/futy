function SidebarLeft() {
  return (
    <aside className=" leftSideBar hidden h-full items-center pr-[1.5rem]  pt-[1.5rem] md:flex  ">
      <nav className="sticky top-20 pt-4 ">
        <div className=" mt-6 ">
          <p className=" text-[.8125rem] font-semibold text-[#292940] ">
            Popular articles
          </p>

          <ul className=" list-disc ">
            <li className="  py-1 text-[.8125rem] text-[#3273dc] ">
              Link your landline telephone number to WhatsApp in 6 steps
            </li>

            <li className="  py-1 text-[.8125rem] text-[#3273dc] ">
              8 useful Call to Action examples for your website
            </li>

            <li className="  py-1 text-[.8125rem] text-[#3273dc] ">
              What are the costs for WhatsApp Business?
            </li>
          </ul>
        </div>

        <div className=" mt-6 ">
          <p className=" text-[.8125rem] font-semibold text-[#292940] ">
            Related articles
          </p>

          <ul className=" list-disc ">
            <li className="  py-1 text-[.8125rem] text-[#3273dc] ">
              Receive your Leads in Mailchimp, via Google Sheets
            </li>

            <li className="  py-1 text-[.8125rem] text-[#3273dc] ">
              Activate widget via a link
            </li>

            <li className="  py-1 text-[.8125rem] text-[#3273dc] ">
              Set up conversions via Google Tag Manager
            </li>

            <li className="  py-1 text-[.8125rem] text-[#3273dc] ">
              Research: Futy Leadbot vs. Contact Form
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
export default SidebarLeft;
