import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    caption: 'Titanic'
  },
  {
    src: 'https://www.prescottpark.org/uploads/2019/06/f00bf346385235.58520f9022451-1020x1020.jpg',
    caption: 'Jurassic Park'
  },
  {
    src: 'https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg',
    caption: 'Avatar'
  }
];

const CarouselPage = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if(activeIndex===items.length-1){
        return
    }
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if(activeIndex===0){
        return
    }
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem key={item.src} >
        <img src={item.src}  style={{width:"100%"}}/>
        <CarouselCaption  captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
      <div>
      <div style={{width:"25%",margin:"auto", height: "100vh"}}>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
     
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}  />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
      </div>
    
  );
}

export default CarouselPage;