import { useState, useEffect } from 'react';

const UseScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevOffset, setPrevOffset] = useState(0);

  const toggleScrollDirection = () => {
    const { scrollY } = window;
    if (scrollY === 0) {
      setScrollDirection(null);
    }
    if (scrollY > prevOffset) {
      setScrollDirection('down');
    } else if (scrollY < prevOffset) {
      setScrollDirection('up');
    }
    setPrevOffset(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollDirection);
    return () => {
      window.removeEventListener('scroll', toggleScrollDirection);
    };
  });

  return scrollDirection;
};

export default UseScrollDirection;
