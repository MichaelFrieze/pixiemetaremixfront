import valuesDesktopStyles from '~/styles/desktop/values.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const links = () => [
  {
    rel: 'stylesheet',
    media: '(min-width: 1920px)',
    href: valuesDesktopStyles,
  },
];

export function Values() {
  const [currentItem, setCurrentItem] = useState(0);
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const prevBtn = () => {
    setIsPrev(true);
    setIsNext(false);
    setCurrentItem(currentItem - 1);
  };

  const nextBtn = () => {
    setIsPrev(false);
    setIsNext(true);
    setCurrentItem(currentItem + 1);
  };

  useEffect(() => {
    const carouselItems = document.querySelectorAll('.values-carousel-item');
    const totalCarouselItems = carouselItems.length;

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
    }

    if (isNext) {
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
                <h2 className="values-carousel-item-heading">Lorem Ipsum</h2>
                <p className="values-carousel-item-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </motion.div>

            <motion.div className="values-carousel-item" id="item-5">
              <h3 className="values-carousel-item-number">05.</h3>
              <div className="values-carousel-item-container">
                <h2 className="values-carousel-item-heading">Lorem Ipsum</h2>
                <p className="values-carousel-item-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </motion.div>

            <motion.div className="values-carousel-item" id="item-6">
              <h3 className="values-carousel-item-number">06.</h3>
              <div className="values-carousel-item-container">
                <h2 className="values-carousel-item-heading">Lorem Ipsum</h2>
                <p className="values-carousel-item-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
        <motion.img
          className="values-planet"
          srcSet="/images/graphics/values-planet.svg"
          alt="values planet"
          loading="lazy"
          whileHover={{
            scale: 1.05,
          }}
        />
        <motion.img
          className="values-butterfly-1"
          srcSet="/images/graphics/values-butterfly-1.svg"
          alt="values butterfly 1"
          loading="lazy"
          whileHover={{
            scale: 1.05,
          }}
        />
        <motion.img
          className="values-butterfly-2"
          srcSet="/images/graphics/values-butterfly-2.svg"
          alt="values butterfly 2"
          loading="lazy"
          whileHover={{
            scale: 1.05,
          }}
        />
        <motion.img
          className="values-boat"
          srcSet="/images/graphics/values-boat.svg"
          alt="values boat"
          loading="lazy"
          whileHover={{
            scale: 1.02,
          }}
        />
      </div>
    </section>
  );
}
