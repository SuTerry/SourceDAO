import React from 'react'

import { homeLang } from '@langs/index'

import langHook from '@hooks/langHook'

import './index.less'

import leadImg from '@img/home/lead.png'
import williamImg from '@img/home/william.png'
import raymondcoderImg from '@img/home/raymondcoder.png'
import lineImg from '@img/home/line.png'
import logo from '@img/home/team_logo.png'

export default (): JSX.Element => {

  const lang = langHook()

  return (
    <div className="home_team">
      <div className="home_team_content">
        <div className="h_t_c_title">{lang(homeLang.team_title)}</div>
        <div className="h_t_c_sub_title">{lang(homeLang.team_sub_title)}</div>
        <ul className="h_t_c_team">
          <li className='h_t_c_t_li h_t_c_t_li_william'>
            <div className="h_t_c_t_l_top">
              <img className='h_t_c_t_l_t_header_img' src={williamImg} alt="" />
              <div className="h_t_c_t_l_t_title">
                Co-Founder william.eth
              </div>
              <img className="h_t_c_t_l_t_line" src={lineImg} alt="" />
            </div>
            <div className="h_t_c_t_l_text">
              <p>
                <span>{lang(homeLang.team_william_text1_outline)}</span>
                {lang(homeLang.team_william_text1)}
              </p>
              <p>
                {lang(homeLang.team_william_text2)}
                <span>{lang(homeLang.team_william_text2_outline)}</span>
              </p>
              <p>{lang(homeLang.team_william_text3)}</p>
            </div>
          </li>
          <li className='h_t_c_t_li h_t_c_t_li_lead'>
            <div className="h_t_c_t_l_top">
              <img className='h_t_c_t_l_t_header_img' src={leadImg} alt="" />
              <div className="h_t_c_t_l_t_title">
                Lead Founder tiaotiao.eth
              </div>
              <img className="h_t_c_t_l_t_line" src={lineImg} alt="" />
            </div>
            <div className="h_t_c_t_l_text">
              <p>
                {lang(homeLang.team_lead_text1_before)}
                <span>{lang(homeLang.team_lead_text1_outline)}</span>
                {lang(homeLang.team_lead_text1_after)}
              </p>
              <p>
                {lang(homeLang.team_lead_text2)}
                <span>{lang(homeLang.team_lead_text2_outline)}</span>
              </p>
            </div>
          </li>
          <li className='h_t_c_t_li h_t_c_t_li_raymondcoder'>
            <div className="h_t_c_t_l_top">
              <img className='h_t_c_t_l_t_header_img' src={raymondcoderImg} alt="" />
              <div className="h_t_c_t_l_t_title">
                Co-Founder raymondcoder.bit
              </div>
              <img className="h_t_c_t_l_t_line" src={lineImg} alt="" />
            </div>
            <div className="h_t_c_t_l_text">
              <p>
                <span>{lang(homeLang.team_raymondcoder_text1_outline)}</span>
                {lang(homeLang.team_raymondcoder_text1)}
              </p>
              <p>
                {lang(homeLang.team_raymondcoder_text2_before)}
                <span>{lang(homeLang.team_raymondcoder_text2_outline)}</span>
                {lang(homeLang.team_raymondcoder_text2_after)}
              </p>
              <p>{lang(homeLang.team_raymondcoder_text3)}</p>
            </div>
          </li>
        </ul>
        <div className="h_t_c_logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  )
}
