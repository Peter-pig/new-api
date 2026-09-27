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
import { Sparkline } from './sparkline'

/** Model-level hardcoded demo metrics (not live). */
const rows = [
  {
    name: 'GPT',
    uptime: '99.97%',
    latency: '42ms',
    spark: [99.91, 99.94, 99.96, 99.93, 99.98, 99.97, 99.97],
  },
  {
    name: 'Claude',
    uptime: '99.95%',
    latency: '48ms',
    spark: [99.88, 99.92, 99.94, 99.91, 99.96, 99.95, 99.95],
  },
  {
    name: 'Gemini',
    uptime: '99.96%',
    latency: '45ms',
    spark: [99.9, 99.93, 99.95, 99.94, 99.97, 99.96, 99.96],
  },
] as const

export function MarketingAvailability() {
  return (
    <section
      className='mh-panel mh-panel--avail'
      id='availability'
      aria-label='模型可用性'
    >
      <div className='mh-panel__inner mh-panel__inner--wide'>
        <h2 className='mh-section-title'>模型可用性</h2>
        <p className='mh-section-lead'>按模型看稳定性与延迟，示意数据。</p>
        <div
          className='mh-avail-table'
          role='table'
          aria-label='近7日可用性示意'
        >
          <div className='mh-avail-row mh-avail-row--head' role='row'>
            <span role='columnheader'>模型</span>
            <span role='columnheader'>可用性</span>
            <span role='columnheader'>延迟</span>
            <span role='columnheader'>近7日</span>
          </div>
          {rows.map((row) => (
            <div className='mh-avail-row' role='row' key={row.name}>
              <span className='mh-avail-name' role='cell'>
                {row.name}
              </span>
              <span className='mh-avail-metric' role='cell'>
                {row.uptime}
              </span>
              <span className='mh-avail-metric' role='cell'>
                {row.latency}
              </span>
              <span className='mh-avail-spark' role='cell'>
                <Sparkline data={[...row.spark]} />
              </span>
            </div>
          ))}
        </div>
        <p className='mh-avail-footnote'>近7日监测示意 · 以实际数据为准</p>
      </div>
    </section>
  )
}
