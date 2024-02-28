
import { useState } from "react";

import RightSlide from '../assets/image/right.svg';
import LeftSlide from '../assets/image/left.svg';

const data = [
  {
    id: 1,
    image:
      'https://images.prismic.io/futy-io/767dc5c5-90c4-4ccd-9a51-bcec32ce3ee7_tmc.jpg?auto=compress,format',
  },
  {
    id: 2,
    image:
      'https://images.prismic.io/futy-io/d7ce8de1-c628-48df-a570-6bc6f94bcf17_alleskwijt.jpg?auto=compress,format',
  },
  {
    id: 3,
    image:
      'https://images.prismic.io/futy-io/68c893ec-1f20-4e7e-936c-9f71d393fe10_outstanding24.jpg?auto=compress,format',
  },
  {
    id: 4,
    image:
      'https://images.prismic.io/futy-io/8f503e35-2043-4636-80ca-13783c470ca5_loods-futy.jpg?auto=compress,format',
  },
  {
    id: 5,
    image:
      'https://images.prismic.io/futy-io/0e095aa7-f6c0-4b39-aef3-6e8c48210f47_eneco.jpg?auto=compress,format',
  },
];

function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? data.length - 1 : currentIndex - 1;

    setCurrentIndex(newSlide);
  };

  const nextSlide = () => {
    const isFirstSlide = currentIndex === data.length - 1;
    const newSlide = isFirstSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newSlide);
  };

  return (
    <section className=" block px-6 py-12 md:px-6 md:py-16 ">
      <div className="relative mx-auto my-0 w-auto md:max-w-[960px]  lg:max-w-[1152px] ">
        <div className="px-12 md:py-0  ">
          <div>
            <div
              onClick={prevSlide}
              className=" absolute bottom-[-35px] left-0 top-auto z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent p-0 leading-[0] text-[#5f77ff] md:top-1/2 md:transform-none md:bg-[#eff1ff]  "
            >
              <img src={LeftSlide} alt="Left" />
            </div>

            <div className="relative m-0 block overflow-hidden p-0  ">
              <div className="relative left-0 top-0 block ">
                <img src={data[currentIndex].image} alt="" />
              </div>
            </div>

            <div
              onClick={nextSlide}
              className=" absolute bottom-[-35px] right-0 top-auto z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent p-0 leading-[0] text-[#5f77ff] md:top-1/2 md:transform-none md:bg-[#eff1ff]"
            >
              <img src={RightSlide} alt="Right" />
            </div>
          </div>
          <ul className=" absolute bottom-[-25px] left-1/2  m-0 flex w-full  -translate-x-1/2 transform items-center justify-center p-0 ">
            <li
              onClick={() => setCurrentIndex(0)}
              className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 "
            >
              <div className="flex h-full items-center justify-center ">
                <span
                  className={`h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] ${
                    currentIndex === 0 ? 'opacity-100' : 'opacity-50'
                  }`}
                ></span>
              </div>
            </li>

            <li
              onClick={() => setCurrentIndex(1)}
              className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 "
            >
              <div className="flex h-full items-center justify-center ">
                <span
                  className={`h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] ${
                    currentIndex === 1 ? 'opacity-100' : 'opacity-50'
                  }`}
                ></span>
              </div>
            </li>

            <li
              onClick={() => setCurrentIndex(2)}
              className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 "
            >
              <div className="flex h-full items-center justify-center ">
                <span
                  className={`h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] ${
                    currentIndex === 2 ? 'opacity-100' : 'opacity-50'
                  }`}
                ></span>
              </div>
            </li>

            <li
              onClick={() => setCurrentIndex(3)}
              className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 "
            >
              <div className="flex h-full items-center justify-center ">
                <span
                  className={`h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] ${
                    currentIndex === 3 ? 'opacity-100' : 'opacity-50'
                  }`}
                ></span>
              </div>
            </li>

            <li
              onClick={() => setCurrentIndex(4)}
              className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 "
            >
              <div className="flex h-full items-center justify-center ">
                <span
                  className={`h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] ${
                    currentIndex === 4 ? 'opacity-100' : 'opacity-50'
                  }`}
                ></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Slide;

