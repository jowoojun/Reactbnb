import { useState, useEffect } from 'react';

const UseScrollY = () => {
  const [offset, setOffset] = useState(0);

  const toggleScrollY = () => {
    const { scrollY } = window;
    setOffset(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollY);
    return () => {
      window.removeEventListener('scroll', toggleScrollY);
    };
  });

  return offset;
};

export default UseScrollY;
