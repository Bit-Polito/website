import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from 'react-tinder-card';

export default function SwipeableCarousel() {
  const initialCards = [
    {
      name: 'test1',
      src: '/assets/refactoring/mock1.png',
    },
    {
      name: 'test2',
      src: '/assets/refactoring/mock2.png',
    },
    {
      name: 'test3',
      src: '/assets/refactoring/mock3.png',
    },
  ];
  const [cards, setCards] = useState(initialCards);
  const [rerenderIndex, setRerenderIndex] = useState(0);
  const [wiggleTimeout, setWiggleTimeout] = useState(false);

  const onSwipe = () => {
    const newCards = cards.slice(0, -1);
    if (newCards.length === 1) {
      setCards(initialCards);
      return;
    }
    setCards([cards[cards.length - 1], ...newCards]);
    setWiggleTimeout(false);
  };

  useEffect(() => {
    setRerenderIndex((prev) => prev + 1);
  }, [cards]);

  useEffect(() => {
    setTimeout(() => {
      setWiggleTimeout(true);
    }, 5000);
  }, [wiggleTimeout]);

  return (
    <div
      key={rerenderIndex}
      className='relative mt-4 flex h-[500px] justify-center'
    >
      {cards.map((card, index) => (
        <div
          className={`absolute max-h-[500px] ${
            index < 2 && 'translate-y-12 scale-[85%]'
          } ${ index == 2 && wiggleTimeout && 'animate-wiggle'}`}
          style={{ zIndex: index }}
        >
          <TinderCard
            key={card.name}
            // className='m-auto block h-auto w-fit'
            onSwipe={onSwipe}
            preventSwipe={['up', 'down']}
            swipeRequirementType='position'
            swipeThreshold={100}
          >
            <img
              src={card.src}
              className='h-full max-h-[500px] w-auto bg-bkg bg-cover bg-center'
            />
          </TinderCard>
        </div>
      ))}
    </div>
  );
}
