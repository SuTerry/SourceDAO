import React from 'react'

import { homeLang, footerLang } from '@langs/index'

import langHook from '@hooks/langHook'

import './index.less'

import logo from '@img/footer/logo.png'
import community from '@img/footer/community.png'
import titter from '@img/footer/titter.png'
import mail from '@img/footer/mail.png'
import partner from '@img/footer/partner.png'

export default (): JSX.Element => {

  const lang = langHook()

  return (
    <div className="footer">
      <div className="footer_w">
        <div className="footer_w_content">
          <div className="f_w_c_logo">
            <img src={logo} alt="" />
            <div className="f_w_c_paper">{lang(homeLang.paper_btn)}</div>
          </div>
          <div className="f_w_c_contact">
            <div className="f_w_c_c_title">{lang(footerLang.contact)}</div>
            <div className="f_w_c_c_links">
              <a href="#">
                <img src={community} alt="" />
                <p>Join community</p>
              </a>
              <a href="#">
                <img src={titter} alt="" />
                <p>Follow Titter</p>
              </a>
              <a href="#">
                <img src={mail} alt="" />
                <p>sourcedao.eth@imibao.net</p>
              </a>
            </div>
          </div>
          <div className="f_w_c_partner">
            <div className="f_w_c_p_title">{lang(footerLang.partner)}</div>
            <a href="#">
              <img src={partner} alt="" />
              <p>BUIDLER DAO</p>
            </a>
          </div>
        </div>
        <div className="footer_w_copyright">@2022 Sourcedao.io</div>
      </div>
    </div>
  )
}
