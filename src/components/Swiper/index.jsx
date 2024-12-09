
import React, {Children} from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { Container } from "./styles";

export function SwiperComponent ({title, children}) {
  
  const hasNoChilds = Children.count(children) === 0;

  if (hasNoChilds) return null;

  const sliderConfig = {
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    mode: "free-snap",
    loop: false,
    slides: {
      origin: "center",
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 1px)': {
        slides: { perView: 1.2, },
      },
      '(min-width: 355px)': {
        slides: { perView: 1.4, },
      },
      '(min-width: 375px)': {
        slides: { perView: 1.5, },
      },
      '(min-width: 425px)': {
        slides: { perView: 1.7, },
      },
      '(min-width: 550px)': {
        slides: { perView: 2.3, },
      },
      '(min-width: 650px)': {
        slides: { perView: 2.7, },
      },
      '(min-width: 800px)': {
        slides: { perView: 3.2, },
      },
      '(min-width: 900px)': {
        slides: { perView: 3.5, },
      },
      '(min-width: 976px)': {
        slides: { perView: 2.7, },
      },
      '(min-width: 1110px)': {
        slides: { perView: 3.4, },
      },
    }
  };
  const [sliderRef] = useKeenSlider((sliderConfig));

  return (
    <Container className="slider-wrapper">
      {title && <h2 className="title">{title}</h2>}
      <div ref={sliderRef} className="keen-slider">
        {Children.map(children, (child, id) => (
          <div className={`keen-slider__slide number-slide${id+1}`} key={id}>
            {child}
          </div>
        ))}
      </div>

    </Container>
  )
}
/*{
            data.map((item) => {
                return(<div className="keen-slider__slide" key={item.id}>{item.item}</div>)
            })
        } 
            
        <div className="keen-slider__slide">Item 1</div>
        <div className="keen-slider__slide">Item 2</div>
        <div className="keen-slider__slide">Item 3</div>
        <div className="keen-slider__slide">Item 4</div>
        <div className="keen-slider__slide">Item 5</div>
        <div className="keen-slider__slide">Item 6</div>
        <div className="keen-slider__slide">Item 7</div>
        <div className="keen-slider__slide">Item 8</div>
        <div className="keen-slider__slide">Item 9</div>



        <Container ref={sliderRef} className="keen-slider">
        {
            data.map((item) => {
                return(<div className="keen-slider__slide" key={item.id}>{item.item}</div>)
            })
        } 
    </Container>
        */