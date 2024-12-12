import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/65/90/c7/lechon-a-la-canasta.jpg?w=1000&h=-1&s=1',
    key: 1,
  },
  {
    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/35/72/87/un-chancho-al-horno-con.jpg?w=1000&h=-1&s=1',
    key: 2,
  },
  {
    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/2a/88/38/trucha-a-la-romana.jpg?w=1000&h=-1&s=1',
    key: 3,
  },
  {
    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/66/a5/45/aji-de-fideo.jpg?w=1000&h=-1&s=1',
    key: 4,
  },
  {
    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/95/e6/0e/trae-tu-olla-picana-para.jpg?w=1000&h=-1&s=1',
    key: 5,
  },
];

export default function Carrusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={9000} // Cambia el valor de interval para ajustar la velocidad (8 segundos en este caso)
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
