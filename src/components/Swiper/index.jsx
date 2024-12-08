
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { Container } from "./styles";

export function SwiperComponent ({data}) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  })

  return (
    <Container ref={sliderRef} className="keen-slider">
        {
            data.map((item) => {
                return(<div className="keen-slider__slide" key={item.id}>{item.item}</div>)
            })
        } 
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
        */