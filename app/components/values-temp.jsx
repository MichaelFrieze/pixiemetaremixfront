import valuesDesktopStyles from '~/styles/desktop/values-temp.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const links = () => [
  {
    rel: 'stylesheet',
    media: 'screen and (min-width: 1920px)',
    href: valuesDesktopStyles,
  },
];

export function Values() {
  const [currentItem, setCurrentItem] = useState(1);
  const [isPrev, setIsPrev] = useState(false);

  // let carouselItems = document.querySelectorAll('.values-carousel-item');
  // carouselItems.forEach(() => {
  //   // item.classList.add('center');
  //   totalCarouselItems = totalCarouselItems + 1;
  // });

  /* 
  - figure out how to keep the highlighted div in the center
  - reverse still does not remove previous highlighted div
  - make the div hilighted when also scrolling with mouse
  - add some kind of animation to the divs
  */

  const prevBtn = () => {
    setIsPrev(true);
    setCurrentItem(currentItem - 1);
  };

  const nextBtn = () => {
    setIsPrev(false);
    setCurrentItem(currentItem + 1);
  };

  useEffect(() => {
    const carouselItems = document.querySelectorAll('.values-carousel-item');
    const totalCarouselItems = carouselItems.length;

    console.log(totalCarouselItems);

    if (currentItem < 1) {
      setCurrentItem(1);
      return;
    }

    if (currentItem > totalCarouselItems) {
      setCurrentItem(totalCarouselItems);
      return;
    }

    if (isPrev) {
      document
        .querySelector(`#item-${currentItem}`)
        .scrollIntoView({ block: 'nearest', inline: 'end' });
    } else {
      document
        .querySelector(`#item-${currentItem}`)
        .scrollIntoView({ block: 'nearest', inline: 'start' });
    }
  }, [currentItem, isPrev]);

  return (
    <section className="values-section">
      <div className="values-container">
        <div className="values-heading">
          <h3 className="values-section-title">OUR VALUES</h3>
          <h1 className="values-header-text">
            Committed with{' '}
            <span className="values-header-highlight">Our Community</span>
          </h1>
        </div>

        <motion.div
          whileHover={{
            scale: 1.01,
          }}
          className="values-carousel"
        >
          <motion.div className="values-carousel-inner">
            <motion.div className="values-carousel-item" id="item-1">
              <h3 className="values-carousel-item-number">01.</h3>
              <div className="values-carousel-item-container">
                <h2 className="values-carousel-item-heading">
                  Experience First
                </h2>
                <p className="values-carousel-item-text">
                  We believe in building and providing high quality play-to-earn
                  games to our community
                </p>
              </div>
            </motion.div>

            <motion.div className="values-carousel-item" id="item-2">
              <h3 className="values-carousel-item-number">02.</h3>
              <div className="values-carousel-item-container">
                <h2 className="values-carousel-item-heading">
                  Execution is Key
                </h2>
                <p className="values-carousel-item-text">
                  We believe operational excellence will unlock us to deliver
                  better experiences for the long run
                </p>
              </div>
            </motion.div>

            <motion.div className="values-carousel-item" id="item-3">
              <h3 className="values-carousel-item-number">03.</h3>
              <div className="values-carousel-item-container">
                <h2 className="values-carousel-item-heading">
                  Thrive Together
                </h2>
                <p className="values-carousel-item-text">
                  Our goal is to help you build a career playing our games and
                  getting paid for your time.
                </p>
              </div>
            </motion.div>

            <motion.div className="values-carousel-item" id="item-4">
              <h3 className="values-carousel-item-number">04.</h3>
              <div className="values-carousel-item-container">
                <h2 className="values-carousel-item-heading">
                  Thrive Together
                </h2>
                <p className="values-carousel-item-text">
                  Our goal is to help you build a career playing our games and
                  getting paid for your time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="values-carousel-nav-container">
          <motion.button
            className="values-carousel-nav-arrow"
            onClick={prevBtn}
            whileHover={{
              scale: 1.02,
            }}
          >
            <img
              srcSet="/images/icons/values-left-arrow.svg"
              alt="left arrow"
              loading="lazy"
            />
          </motion.button>
          <motion.button
            className="values-carousel-nav-arrow"
            onClick={nextBtn}
            whileHover={{
              scale: 1.02,
            }}
          >
            <img
              srcSet="/images/icons/values-right-arrow.svg"
              alt="left arrow"
              loading="lazy"
            />
          </motion.button>
        </motion.div>
      </div>

      <div className="values-images">
        <img
          className="values-planet"
          srcSet="/images/graphics/values-planet.svg"
          alt="values planet"
          loading="lazy"
        />
        <img
          className="values-butterfly-1"
          srcSet="/images/graphics/values-butterfly-1.svg"
          alt="values butterfly 1"
          loading="lazy"
        />
        <img
          className="values-butterfly-2"
          srcSet="/images/graphics/values-butterfly-2.svg"
          alt="values butterfly 2"
          loading="lazy"
        />
        <img
          className="values-boat"
          srcSet="/images/graphics/values-boat.svg"
          alt="values boat"
          loading="lazy"
        />
      </div>
    </section>
  );
}
