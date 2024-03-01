import navList from '../data/navList';

const RightSidebar = () => {
  return (
    <aside className=" rightSidebar h-full pl-6 pt-16  ">
      <div className=" mb-8 ">
        <div className=" mb-4 h-16 w-16 overflow-hidden rounded-full ">
          <img
            src="https://images.prismic.io/futy-io/c15fa45f-6d83-4515-b2c5-290090cc06c8_emiel-square-social+%281%29.jpg?auto=compress,format&rect=0,0,1400,1400&w=120&h=120"
            alt="Emiel Kolk"
          />
        </div>

        <p className="text-[1rem] font-semibold text-[#292940] ">Emiel Kolk </p>

        <div className=" mt-1 text-[.875rem] text-[#7a7b9a]  ">
          <p>Founder & Digital Consultant</p>
        </div>
      </div>

      <nav className=" sticky top-32 pt-[1rem] ">
        <p className="mb-3 text-[.8125rem] font-semibold uppercase text-[#292940] ">
          In this article
        </p>

        <ul>
          {navList.map((navItem) => (
            <li
              key={navItem.id}
              className=" py-1 text-[.8125rem] text-[#575778] hover:cursor-pointer "
            >
              {navItem.title}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default RightSidebar;
