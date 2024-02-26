/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

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
  const [imgSlide, setImgSlide] = useState(data);
  const [index, setIndex] = useState(0);

  console.log(index);
  useEffect(() => {
    const lastIndex = imgSlide.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, imgSlide]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className=" block px-6 py-12 md:px-6 md:py-16 ">
      <div className="relative mx-auto my-0 w-auto md:max-w-[960px]  lg:max-w-[1152px] ">
        <div className="px-12 md:py-0  ">
          <div>
            <div
              onClick={() => setIndex(index - 1)}
              className=" absolute left-0 top-1/2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#eff1ff] p-0 leading-[0] text-[#5f77ff] "
            >
              <img src={LeftSlide} alt="Left" />
            </div>

            <div className="relative m-0 block overflow-hidden p-0  ">
              {imgSlide.map((item, imgIndex) => {
                let position = 'nextSlide';

                if (imgIndex === index) {
                  position = 'activeSlide';
                }
                if (
                  imgIndex === index - 1 ||
                  (index === 0 && imgIndex === imgSlide.length - 1)
                ) {
                  position = 'lastSlide';
                }

                return (
                  <div key={item.id} className="relative left-0 top-0 block ">
                    <img src={item.image} alt={item.id} />
                  </div>
                );
              })}
            </div>

            <div
              onClick={() => setIndex(index + 1)}
              className=" absolute right-0 top-1/2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#eff1ff] p-0 leading-[0] text-[#5f77ff]"
            >
              <img src={RightSlide} alt="Right" />
            </div>
          </div>
          <ul className=" absolute bottom-0 left-1/2 m-0 mt-2 flex w-full  -translate-x-1/2 transform items-center justify-center p-0 ">
            <li className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 ">
              <div className="flex h-full items-center justify-center ">
                <span className=" h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] opacity-100 "></span>
              </div>
            </li>

            <li className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 ">
              <div className="flex h-full items-center justify-center ">
                <span className=" h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] opacity-50 "></span>
              </div>
            </li>

            <li className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 ">
              <div className="flex h-full items-center justify-center ">
                <span className=" h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] opacity-50 "></span>
              </div>
            </li>

            <li className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 ">
              <div className="flex h-full items-center justify-center ">
                <span className=" h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] opacity-50 "></span>
              </div>
            </li>

            <li className="relative mx-1 my-0 inline-block h-5 w-5 cursor-pointer p-0 ">
              <div className="flex h-full items-center justify-center ">
                <span className=" h-1.5 w-1.5 rounded-3xl bg-[#5f77ff] opacity-50 "></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Slide;

// function App() {
//   const [people, setPeople] = useState(data);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index, people]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 3000);
//     return () => clearInterval(slider);
//   }, [index]);

//   return (
//     <section className="section">
//       <div className="title">
//         <h2>
//           <span>/</span>reviews
//         </h2>
//       </div>
//       <div className="section-center">
//         {people.map((person, personIndex) => {
//           const { id, image, name, title, quote } = person;

//           let position = 'nextSlide';

//           if (personIndex === index) {
//             position = 'activeSlide';
//           }
//           if (
//             personIndex === index - 1 ||
//             (index === 0 && personIndex === people.length - 1)
//           ) {
//             position = 'lastSlide';
//           }

//           return (
//             <article className={position} key={id}>
//               <img src={image} alt={name} className="person-img" />
//               <h4> {name} </h4>
//               <p className="title"> {title} </p>
//               <p className="text"> {quote} </p>
//               <FaQuoteRight className="icon" />
//             </article>
//           );
//         })}
//         <button className="prev" onClick={() => setIndex(index - 1)}>
//           <FiChevronLeft />
//         </button>
//         <button className="next" onClick={() => setIndex(index + 1)}>
//           <FiChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// }
