'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const cardsData = [
    {
      title: 'Qui sommes-nous ?',
      description: 'Une entreprise à taille humaine, fiable pour tous vos besoins à la maison comme au bureau',
      link: 'about',
      linkText: 'Mieux nous connaître',
      svgPath: '/svg/about.svg'    },
    {
      title: 'Nos services',
      description: 'Dépannage et amélioration courant fort, volets, stores, portes de garage, interphonie, contrôle d’accès, alarmes…',
      link: 'services',
      linkText: 'Découvrir',
      svgPath: '/svg/services.svg'    },
    {
      title: 'Nos réalisations',
      description: 'Découvrez nos dernières réalisations',
      link: '#',
      linkText: 'Découvrir',
      svgPath: '/svg/work.svg'    },
  ];

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const handleSwipe = (direction) => {
    if (direction < 0) {
      setCurrent((prev) => (prev + 1) % cardsData.length);
    } else {
      setCurrent((prev) => (prev + cardsData.length - 1) % cardsData.length);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center items-center min-h-[32vh]">
        {cardsData.map((card, index) => {
          let xTranslate = "0%";
          let scaleValue = 0.7; 

          if (index === current) {
            scaleValue = 0.80;
          } else if (index === (current - 1 + cardsData.length) % cardsData.length) {
            xTranslate = "-50%";
          } else if (index === (current + 1) % cardsData.length) {
            xTranslate = "50%";
          }

          return (
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe > swipeConfidenceThreshold) {
                  handleSwipe(1);
                } else if (swipe < -swipeConfidenceThreshold) {
                  handleSwipe(-1);
                }
              }}
              initial={{ scale: scaleValue, zIndex: index === current ? 2 : 1 }}
              animate={{ x: xTranslate, scale: scaleValue, zIndex: index === current ? 2 : 1 }}
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, scale: { duration: 0.5 }, zIndex: { duration: 0 } }}
              className={`absolute w-full max-w-md px-4 sm:px-0 ${index === current ? 'z-10' : 'z-0'}`}
            >
              <Card {...card} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
