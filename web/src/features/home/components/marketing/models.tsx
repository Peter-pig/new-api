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

const models = [
  { name: 'GPT', desc: '选好就能用', src: '/models/gpt.svg' },
  { name: 'Claude', desc: '选好就能用', src: '/models/claude.svg' },
  { name: 'Gemini', desc: '选好就能用', src: '/models/gemini.svg' },
] as const

export function MarketingModels() {
  return (
    <section className='mh-panel mh-panel--models' id='models' aria-label='模型'>
      <div className='mh-panel__inner'>
        <h2 className='mh-section-title'>选好模型就能用</h2>
        <p className='mh-section-lead'>不用关心背后怎么接。你只要选模型，剩下的我们来。</p>
        <ul className='mh-model-grid'>
          {models.map(({ name, desc, src }) => (
            <li key={name} className='mh-model-card'>
              <div className='mh-model-card__icon'>
                <img
                  className='mh-model-card__logo'
                  src={src}
                  alt=''
                  width={52}
                  height={52}
                />
              </div>
              <h3 className='mh-model-card__name'>{name}</h3>
              <p className='mh-model-card__desc'>{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
