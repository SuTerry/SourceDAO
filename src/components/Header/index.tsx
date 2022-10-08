import React, { useState, useEffect, SyntheticEvent } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@store/index'

import { setLang } from '@store/modules/lang'

import ctsLang from '@constants/lang'

import { headerLang } from '@langs/index'

import langHook from '@hooks/langHook'

import './index.less'

import logoImg from '@img/header/logo.png'
import localImg from '@img/header/local.png'

const router = [
  {
    name: headerLang.home,
    url: '/'
  },
  {
    name: headerLang.roadmap,
    url: '#'
  },
  {
    name: headerLang.team,
    url: '#'
  },
  {
    name: headerLang.medium,
    url: '#'
  },
]

export default (): JSX.Element => {

  const [popShow, setPopShow] = useState(false)

  const { pathname } = useLocation()

  const dispatch = useAppDispatch()

  const { lang } = useAppSelector((state) => state.langReducers)

  const local = langHook()

  const handlePop = (event: SyntheticEvent<EventTarget>) => {
    event.stopPropagation()
    setPopShow(!popShow)
  }

  const handleLocal = (lang: ctsLang) => {
    dispatch(setLang(lang))
  }

  const handleDoc = () => setPopShow(false)

  useEffect(() => {
    document.addEventListener('click', handleDoc)
    return () => {
      document.removeEventListener('click', handleDoc)
    }
  }, [])

  return (
    <div className="header">
      <div className="header_w">
        <div className="header_w_logo">
          <img src={logoImg} alt="" />
        </div>
        <div className="header_w_buttons">
          <ul className="h_w_b_router">
            {
              router.map((route, index) => {
                return (
                  <li className={pathname === route.url ? 'h_w_b_r_current' : ''} key={index}>
                    {index > 0 ? <span>/</span> : <></>}
                    <Link to={route.url}>{local(route.name)}</Link>
                  </li>
                )
              })
            }
          </ul>
          <div className="h_w_b_lang" onClick={handlePop}>
            <img src={localImg} alt="" />
            {popShow && (
              <ul className="h_w_b_l_pop">
                <li className={lang === ctsLang.en_us ? 'h_w_b_l_p_current' : ''} onClick={() => handleLocal(ctsLang.en_us)}>English</li>
                <li className={lang === ctsLang.zh_cn ? 'h_w_b_l_p_current' : ''} onClick={() => handleLocal(ctsLang.zh_cn)}>简体中文</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

