import React from 'react'

import { useSwiper } from 'swiper/react'

import { homeLang } from '@langs/index'

import langHook from '@hooks/langHook'

import './index.less'

import arrowImg from '@img/home/arrow.png'
import logoImg from '@img/home/index/logo.png'

export default (): JSX.Element => {
  const swiper = useSwiper()

  const lang = langHook()

  return (
    <div className="home_index">
      <div className="home_index_content">
        <div className="h_i_c_bg"></div>
        <div className="h_i_c_logo">
          <img src={logoImg} alt="" />
        </div>
        <div className="h_i_c_text">
          <h1>SOURCE DAO</h1>
          <h6>{lang(homeLang.title)}</h6>
          <p>{lang(homeLang.sub_title)}</p>
        </div>
        <div className="h_i_c_buttons">
          <div className="h_i_c_b_launch">{lang(homeLang.launch_btn)}</div>
          <div className="h_i_c_b_paper">{lang(homeLang.paper_btn)}</div>
        </div>
      </div>
      <div className="home_index_arrow" onClick={() => swiper.slideNext()}>
        <img src={arrowImg} alt="" />
      </div>
    </div>
  )
}
