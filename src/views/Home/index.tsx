import React, { useState, useCallback } from 'react'

import SwiperCore, { Mousewheel, FreeMode, Scrollbar } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import Header from '@components/Header'
import Footer from '@components/Footer'

import Index from './Index/index'
import Road from './Road'
import Team from './Team'

import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/scrollbar'

import './index.less'

SwiperCore.use([Mousewheel, FreeMode, Scrollbar])

export default (): JSX.Element => {
  const [routerIndex, setRouterIndex] = useState(0)

  const [swiperO, setSwiperO] = useState<SwiperCore>()

  const [swiperI, setSwiperI] = useState<SwiperCore>()

  const toSlide = useCallback(
    (index: number) => {
      if (index > 3) {
        swiperO?.slideTo(3)
      } else {
        swiperO?.slideTo(index)
      }
    },
    [swiperO, swiperI]
  )

  return (
    <div className="home">
      <Header routerIndex={routerIndex} toSlide={toSlide} />
      <Swiper
        direction="vertical"
        slidesPerView="auto"
        spaceBetween={30}
        mousewheel
        scrollbar={{
          el: '.swiper-scrollbar',
        }}
        onSlideChange={(swiper) => setRouterIndex(swiper.activeIndex)}
        onSwiper={(swiper) => setSwiperO(swiper)}
      >
        <SwiperSlide className="swiper-no-swiping">
          <Index />
        </SwiperSlide>
        <SwiperSlide className="swiper-no-swiping">
          <Road />
        </SwiperSlide>
        <SwiperSlide className="swiper-no-swiping">
          <Swiper
            direction="vertical"
            slidesPerView="auto"
            mousewheel
            nested
            autoHeight
            freeMode
            scrollbar={{
              draggable: true,
              hide: true,
            }}
            // onScroll={(swiper) => }
            onSwiper={(swiper) => setSwiperI(swiper)}
          >
            <SwiperSlide className="swiper-no-swiping">
              <Team />
            </SwiperSlide>
            <SwiperSlide className="swiper-no-swiping">
              <Footer />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
