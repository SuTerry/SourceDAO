import React from 'react'

import SwiperCore, { Mousewheel, FreeMode, Scrollbar } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import { homeLang } from '@langs/index'

import langHook from '@hooks/langHook'

import Header from '@components/Header'

import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/scrollbar'

import './index.less'

SwiperCore.use([Mousewheel, FreeMode, Scrollbar])

export default (): JSX.Element => {
  const lang = langHook()


  return (
    <div className="home">
      <Header />
      <Swiper
        direction="vertical"
        mousewheel
        scrollbar={{
          el: '.swiper-scrollbar',
        }}
      >
        <SwiperSlide className="swiper-no-swiping">
          Slide 1{lang(homeLang.login)}
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
