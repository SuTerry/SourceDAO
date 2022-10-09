import React from 'react'

import { useSwiper } from 'swiper/react'

import { homeLang } from '@langs/index'

import langHook from '@hooks/langHook'

import './index.less'

import arrowImg from '@img/home/arrow.png'

import roadImg from '@img/home/road.png'

export default (): JSX.Element => {
  const swiper = useSwiper()

  const lang = langHook()

  return (
    <div className="home_road">
      <div className="home_road_content">
        <div className="h_r_c_title">{lang(homeLang.road_title)}</div>
        <div className="h_r_c_sub_title">{lang(homeLang.road_sub_title)}</div>
        <div className="h_r_c_road">
          <div className="h_r_c_r_bg_left"></div>
          <div className="h_r_c_r_bg_right"></div>
          <img src={roadImg} alt="" />
          <div className="h_r_c_r_setp h_r_c_r_setp1">
            <div className="h_r_c_r_s_title">{lang(homeLang.road_setp_1_title)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_1_1)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_1_2)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_1_3)}</div>
          </div>
          <div className="h_r_c_r_setp h_r_c_r_setp2">
            <div className="h_r_c_r_s_title">{lang(homeLang.road_setp_2_title)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_2_1)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_2_2)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_2_3)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_2_3)}</div>
          </div>
          <div className="h_r_c_r_setp h_r_c_r_setp3">
            <div className="h_r_c_r_s_title">{lang(homeLang.road_setp_3_title)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_3_1)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_3_2)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_3_3)}</div>
          </div>
          <div className="h_r_c_r_setp h_r_c_r_setp4">
            <div className="h_r_c_r_s_title">{lang(homeLang.road_setp_4_title)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_4_1)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_4_2)}</div>
            <div className="h_r_c_r_s_text">{lang(homeLang.road_setp_4_3)}</div>
          </div>
        </div>
      </div>
      <div className="home_road_arrow" onClick={() => swiper.slideNext()}>
        <img src={arrowImg} alt="" />
      </div>
    </div>
  )
}
