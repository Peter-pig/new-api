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
import { IconArrow, IconBrand } from './icons'

type HeroProps = {
  siteName: string
}

export function MarketingHero(props: HeroProps) {
  return (
    <section className='mh-panel mh-panel--hero' id='hero' aria-label='首页'>
      <div className='mh-panel__inner'>
        <p className='mh-eyebrow'>{props.siteName}</p>
        <p className='mh-positioning'>统一 API 网关</p>
        <div className='mh-hero-mark' aria-hidden>
          <IconBrand size={88} />
        </div>
        <h1 className='mh-headline'>稳定用上你想用的模型</h1>
        <p className='mh-subtitle'>省心</p>
        <a className='mh-btn mh-btn--primary' href='#cta'>
          立即开始
          <IconArrow size={16} />
        </a>
      </div>
      <div className='mh-scroll-hint' aria-hidden>
        <span>下滑</span>
      </div>
    </section>
  )
}
