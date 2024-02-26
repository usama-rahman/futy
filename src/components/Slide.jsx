/* eslint-disable no-unused-vars */

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
  return <></>;
}
export default Slide;

import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

function MyApp() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image } = person;

          let position = 'nextSlide';

          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return <></>;
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
