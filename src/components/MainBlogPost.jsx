function MainBlogPost() {
  return (
    <div className=" mainArticle mb-16 rounded-xl bg-white pt-16 shadow-[0_2px_5px_0_rgba(67,67,113,.07)] md:px-12 md:pb-12 ">
      <strong className="mb-8 text-[1.125rem] font-bold text-[#575778] ">
        What is the best way to let visitors request a quote via your website? A
        good quotation form is important for this. With Futy&apos;s Leadbots you
        ensure that the quotation form is always visible on your website and can
        be sent with one push of a button.
      </strong>

      <div>
        <section className=" mt-8 pb-6 ">
          <img
            src="https://prismic-io.s3.amazonaws.com/futy-io/b2762d5b-6e41-471c-8421-47a61e584a16_offerte-formulier-velden-website.png"
            alt="BlogImage"
          />
        </section>

        <section className="mt-8 pb-6">
          <h2 className=" mt-8 pb-6 text-[1.75rem] font-bold ">
            How can you easily get more quote requests via your website?
          </h2>

          <p className="text-[1.125rem] leading-[1.9] text-[#575778] ">
            The secret formula: ensure that the call-to-action button for
            requesting a quote is always visible on the screen. With a Leadbot
            you always have the most important buttons of the website within
            reach at the bottom right of the website, including: Request quote.
            This not only helps the visitor in a customer-friendly way, it also
            ensures many more requests via your website! You can also use the
            quotation form. can also be displayed directly in a widget on your
            website.
          </p>

          <p className=" mt-8 pb-6 text-lg font-bold text-[#575778] ">
            Watch a video here:
          </p>

          {/* <div className="max-w-full overflow-hidden "> */}
          <iframe
            width="100%"
            height="312"
            src="https://www.youtube.com/embed/PaWt4pSTw_M?si=FXyExjmyYHTjYBzs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {/* </div> */}
        </section>

        <section className="block  lg:py-4 ">
          <div className="mx-2 my-0 w-auto md:mx-2 md:max-w-[1152px] lg:mx-auto ">
            <div className=" activeBox rounded-[24px] bg-[#5f77ff] bg-[left_-30px_top_0,right_-100px_bottom_0] bg-[url(https://www.futy.io/box-bg-blob-small.svg),url(https://www.futy.io/box-bg-blob-big.svg)] bg-no-repeat	p-4  md:bg-[left_0_top_0,right_0_bottom_0] md:p-8 ">
              <div className=" md:max-w-[100%] ">
                <div className=" mb-4 md:mb-6 ">
                  <h3 className="text-[1.75rem] font-extrabold text-white ">
                    Design your quotation form immediately
                  </h3>
                </div>

                <div className="text-[1.125rem] text-white md:pr-8 ">
                  <p>
                    Start a 14-day free trial and install the Futy Leadbot on
                    your website within 5 minutes (plug & play):
                  </p>
                </div>

                <div className=" mt-6 flex w-full flex-wrap items-center justify-start md:mt-8 md:w-[40%] lg:w-[30%] ">
                  <button className=" mb-2 w-full cursor-pointer justify-center whitespace-nowrap rounded-md border border-transparent bg-white  py-[calc(.5em-1px)] text-center text-[.85rem] font-bold text-[#5f77ff] shadow-none ">
                    Create a Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default MainBlogPost;
