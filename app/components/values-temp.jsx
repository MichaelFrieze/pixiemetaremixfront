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

const carouselItemComponent = (valuesCarouselNumber, currentItem) => {
  let centerHighlight = null;
  if (currentItem + 1 === valuesCarouselNumber) {
    centerHighlight = 'center';
  }

  return (
    <>
      <motion.div
        className={`values-carousel-item ${centerHighlight}`}
        key={valuesCarouselNumber}
      >
        <h3 className="values-carousel-item-number">
          {'0' + valuesCarouselNumber + '.'}
        </h3>
        <div className="values-carousel-item-container">
          <h2 className="values-carousel-item-heading">Experience First</h2>
          <p className="values-carousel-item-text">
            We believe in building and providing high quality play-to-earn games
            to our community
          </p>
        </div>
      </motion.div>
    </>
  );
};

const emptyCarouselItemComponent = (valuesCarouselNumber) => {
  return (
    <>
      <motion.div
        className="values-carousel-item-empty"
        key={valuesCarouselNumber}
      ></motion.div>
    </>
  );
};

export function Values() {
  const [currentItem, setCurrentItem] = useState(1);
  const [isPrev, setIsPrev] = useState(false);

  const valuesCarouselItemsData = [1, 2, 3, 4, 5];
  const carouselItemsComponents = valuesCarouselItemsData.map(
    (valuesCarouselNumber) => {
      return carouselItemComponent(valuesCarouselNumber, currentItem);
    }
  );

  const prevBtn = () => {
    setIsPrev(true);
    setCurrentItem(currentItem - 1);
  };

  const nextBtn = () => {
    setIsPrev(false);
    setCurrentItem(currentItem + 1);
  };

  useEffect(() => {
    if (currentItem < 0) {
      setCurrentItem(0);
      return;
    }

    if (currentItem > valuesCarouselItemsData.length - 1) {
      setCurrentItem(valuesCarouselItemsData.length - 1);
      return;
    }
  }, [currentItem, valuesCarouselItemsData]);

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
          className="values-carousel"
          // whileHover={{
          //   scale: 1.01,
          // }}
        >
          <motion.div
            className="values-carousel-inner"
            key={currentItem}
            initial={{ x: 40 }}
            animate={{ x: 0 }}
            // transition={{ duration: 1 }}
          >
            {currentItem > 0
              ? carouselItemsComponents[currentItem - 1]
              : emptyCarouselItemComponent(currentItem - 1)}
            {carouselItemsComponents[currentItem]}
            {currentItem < valuesCarouselItemsData.length - 1
              ? carouselItemsComponents[currentItem + 1]
              : emptyCarouselItemComponent(currentItem + 1)}
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
