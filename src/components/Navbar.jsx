import { RiMenu4Line } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';

import Button from '../ui/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let navLinks = [
    { name: 'HOME', link: '/' },
    { name: 'SERVICE', link: '/' },
    { name: 'ABOUT', link: '/' },
    { name: "BLOG'S", link: '/' },
    { name: 'CONTACT', link: '/' },
  ];

  const handleMenuIcon = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  return (
    <header className="min-h-[4.375rem]">
      <div className="fixed left-0 top-0 flex w-full justify-center shadow-md">
        <div className="w-[1152px] items-center justify-between bg-white px-7 py-4 md:flex md:px-10">
          <div className="flex cursor-pointer items-center  text-2xl font-bold">
            Futy
          </div>

          <div
            onClick={() => handleMenuIcon()}
            className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
          >
            {isMenuOpen ? <IoClose /> : <RiMenu4Line />}
          </div>

          <ul
            className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-stretch md:justify-start md:pb-0 md:pl-0 ${
              isMenuOpen ? 'top-20 ' : 'top-[-490px]'
            }`}
          >
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="my-7 text-sm font-semibold md:my-0 md:ml-8"
              >
                <Link
                  to={link.link}
                  className="text-gray-800 duration-500 hover:text-[#5f77ff]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Button text="Start for free" />
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
