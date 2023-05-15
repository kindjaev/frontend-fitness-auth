import React from 'react'
import {Box} from "@mui/material"
import BodyPart from './BodyPart'
// import {ScrollMenu, VisobilityContext} from "react-horizontal-scrolling-menu"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import {useState, useEffect} from "react"
import ExerciseCard from './ExerciseCard';

const innerWidth = () => {
  let width= window.innerWidth
  if (width <= 624){
    return 1
  } else if (width > 624 && width <= 950){
    return 2
  } else {
    return 3
  }
}

function HorizontalScrollBar({data, bodyPart, setBodyPart, setSearch, handleSearch}) {
  const [width, setWidth] = useState(innerWidth() || 1)
  const [slidesPerGroup, setSlidesPerGroup] = useState(innerWidth() || 1)


  useEffect(() => {
    window.addEventListener("resize", function() {
      if (window.matchMedia("(max-width: 624px)").matches) {
       setWidth(1)
       setSlidesPerGroup(1)
      } else if (window.matchMedia("(min-width: 624px) and (max-width: 950px)").matches) {
        setWidth(2)
       setSlidesPerGroup(2)

      } else {
        setWidth(3)
        setSlidesPerGroup(3)
      }
    })
  }, [width])

  return (

    <div>
        <Swiper
          slidesPerView={width}
          spaceBetween={30}
          slidesPerGroup={slidesPerGroup}
          // loop={true}
          pagination={{
            dynamicBullets: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {data && data.map((item, i) => (
              <SwiperSlide key={i}>
                {bodyPart 
                  ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} setSearch={setSearch} handleSearch={handleSearch}/>
                  : <ExerciseCard data={item} key={i}/>
                }
              </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default HorizontalScrollBar