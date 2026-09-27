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
import { IconClaude, IconGemini, IconGpt } from './icons'

const models = [
  { name: 'GPT', desc: '选好就能用', Icon: IconGpt },
  { name: 'Claude', desc: '选好就能用', Icon: IconClaude },
  { name: 'Gemini', desc: '选好就能用', Icon: IconGemini },
] as const

export function MarketingModels() {
  return (
    <section
      className='mh-panel mh-panel--models'
      id='models'
      aria-label='模型'
    >
      <div className='mh-panel__inner'>
        <h2 className='mh-section-title'>选好模型就能用</h2>
        <p className='mh-section-lead'>
          不用关心背后怎么接。你只要选模型，剩下的我们来。
        </p>
        <ul className='mh-model-grid'>
          {models.map((entry) => {
            const Icon = entry.Icon
            return (
              <li key={entry.name} className='mh-model-card'>
                <div className='mh-model-card__icon'>
                  <Icon size={44} />
                </div>
                <h3 className='mh-model-card__name'>{entry.name}</h3>
                <p className='mh-model-card__desc'>{entry.desc}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
