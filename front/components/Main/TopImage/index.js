import React, { useState, useEffect, useCallback } from 'react';
import { Container } from './style';

const TopImage = (windowSize) => {
  const [imageSrc, setImageSrc] = useState('https://a0.muscache.com/im/pictures/8096fa47-0535-49d2-9aca-8db39b3faacd.jpg?im_w=320');

  useEffect(() => {
    console.log(windowSize);
    if (windowSize > 1440) {
      setImageSrc('https://a0.muscache.com/im/pictures/415fe2dc-98a1-4565-a702-70b03ae757d7.jpg?im_w=2560');
    } else if (windowSize > 950) {
      setImageSrc('https://a0.muscache.com/im/pictures/415fe2dc-98a1-4565-a702-70b03ae757d7.jpg?im_w=960');
    } else if (windowSize > 425) {
      setImageSrc('https://a0.muscache.com/im/pictures/415fe2dc-98a1-4565-a702-70b03ae757d7.jpg?im_w=720');
    } else {
      setImageSrc('https://a0.muscache.com/im/pictures/8096fa47-0535-49d2-9aca-8db39b3faacd.jpg?im_w=320');
    }
  }, [windowSize]);

  return (
    <Container>
      <div>
        <div>
          <img role="presentation" width={windowSize} src={imageSrc} alt={imageSrc} />
        </div>
      </div>
      <div>
        <p>
          에어비앤비
          <button>
            <p>2021</p>
          </button>
        </p>
        <br />
        <span>
          100개 이상의 신규
          {' '}
          <br />
          {' '}
          기능을 소개합니다.
        </span>
        <button type="button">
          <div>새로운 기능 알아보기</div>
        </button>
      </div>
    </Container>
  );
};

export default TopImage;
