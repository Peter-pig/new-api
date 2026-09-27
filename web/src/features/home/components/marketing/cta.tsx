/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'

import { IconArrow } from './icons'

type CTAProps = {
  siteName: string
  isAuthenticated?: boolean
}

export function MarketingCTA(props: CTAProps) {
  return (
    <section className='mh-panel mh-panel--cta' id='cta' aria-label='开始使用'>
      <div className='mh-panel__inner'>
        <h2 className='mh-section-title'>准备好了吗？</h2>
        <p className='mh-subtitle mh-subtitle--cta'>三分钟开始</p>
        {props.isAuthenticated ? (
          <Link className='mh-btn mh-btn--primary' to='/dashboard'>
            进入控制台
            <IconArrow size={16} />
          </Link>
        ) : (
          <Link className='mh-btn mh-btn--primary' to='/sign-up'>
            免费注册
            <IconArrow size={16} />
          </Link>
        )}
        <p className='mh-cta-brand'>{props.siteName}</p>
      </div>
    </section>
  )
}
