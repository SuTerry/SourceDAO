import React, { useState, useCallback } from 'react'

import SwiperCore, { Mousewheel, FreeMode, Scrollbar } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import Header from '@components/Header'

import Index from './Index/index'

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
        <SwiperSlide className="swiper-no-swiping">Slide 2</SwiperSlide>
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
              <h4>一段很长的内容</h4>
              <p>
                一<br />段<br />很<br />长<br />的<br />内<br />容
              </p>
              <p>
                一<br />段<br />很<br />长<br />的<br />内<br />容
              </p>
              <p>
                一<br />段<br />很<br />长<br />的<br />内<br />容
              </p>
              <p>
                一<br />段<br />很<br />长<br />的<br />内<br />容
              </p>
              <p>
                一<br />段<br />很<br />长<br />的<br />内<br />容
              </p>
              <p>
                一<br />段<br />很<br />长<br />的<br />内<br />容
              </p>
              <p>
                一<br />段<br />很<br />长<br />的<br />内<br />容
              </p>
              <p>
                一<br />段<br />很<br />长<br />的<br />内<br />容
              </p>
              <p>
                一<br />段<br />很<br />长<br />的<br />内<br />容
              </p>
              <p>
                一<br />段<br />很<br />长<br />的<br />内<br />容
              </p>
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
