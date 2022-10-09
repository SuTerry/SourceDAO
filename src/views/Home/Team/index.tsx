import React from 'react'

import { homeLang } from '@langs/index'

import langHook from '@hooks/langHook'

import './index.less'

export default (): JSX.Element => {

  const lang = langHook()

  return (
    <div className="home_team">
      <div className="home_team_content">
        <div className="h_t_c_title">{lang(homeLang.team_title)}</div>
        <div className="h_t_c_sub_title">{lang(homeLang.team_sub_title)}</div>
        <div className="h_t_c_team"></div>
      </div>
    </div>
  )
}
