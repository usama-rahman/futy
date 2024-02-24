function NavCopy() {
  return (
    <>
      <header className="block min-h-[4.375rem]">
        {/* navbar */}
        <div className=" fixed left-0 right-0 top-0 z-30 flex items-stretch bg-white shadow-sm md:min-h-[4.375rem] md:px-[1.5rem] ">
          {/* class="container is-widescreen" */}
          <div className="relative mx-auto my-0 block h-[100%] min-h-[4.375rem] w-auto grow items-stretch md:flex md:max-w-[1152px] ">
            {/* class="navbar-brand" */}
            <div className="flex min-h-[4.375rem] shrink-0 items-stretch md:mr-8 ">
              Futy
            </div>
            {/* navbar-menu */}
            <div className="hidden min-h-[4.375rem] shrink-0 items-stretch md:flex md:grow ">
              {/* class="navbar-start" */}
              <div className="flex flex-col md:mr-auto md:flex-row md:items-stretch md:justify-start ">
                {/* class="navbar-item nuxt-link-exact-active nuxt-link-active" */}
                <a className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940] ">
                  Home
                </a>
                <a className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940] ">
                  Product
                </a>
                <a className=" md:py-0.75rem py-0.5rem relative shrink-0 grow-0 px-[1.25rem] text-[1.5rem] font-semibold leading-tight text-[#292940] transition duration-300 ease-in	md:mr-3 md:flex md:items-center md:px-[0.5rem] md:text-[1rem] md:text-[#292940] ">
                  Home
                </a>
              </div>
              {/*  class="navbar-end" */}
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default NavCopy;
