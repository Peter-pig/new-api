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
/** Hand-drawn style SVGs — slightly imperfect strokes, only icons get this treatment. */

type IconProps = { className?: string; size?: number }

const stroke = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconCalm(props: IconProps) {
  const size = props.size ?? 64
  return (
    <svg
      className={props.className}
      width={size}
      height={size}
      viewBox='0 0 64 64'
      aria-hidden
    >
      <path
        {...stroke}
        d='M14.2 38.5c-1.8-8.4 2.2-16.8 9.6-20.1 4.1-1.8 8.9-1.4 12.4 1.1'
      />
      <path
        {...stroke}
        d='M34.5 18.8c5.2-2.1 11.4-.4 14.8 4.2 3.6 4.8 3.1 11.6-1.1 15.8'
      />
      <path
        {...stroke}
        d='M18.1 41.2c2.4 6.8 9.1 11.1 16.4 10.4 6.8-.6 12.4-5.2 14.2-11.5'
      />
      <circle {...stroke} cx='32.2' cy='33.8' r='5.4' />
      <path
        {...stroke}
        d='M32.2 28.6v-4.8M32.2 39.1v4.2M26.9 33.8h-4.6M42.1 33.8h4.1'
      />
    </svg>
  )
}

export function IconGpt(props: IconProps) {
  const size = props.size ?? 40
  return (
    <svg
      className={props.className}
      width={size}
      height={size}
      viewBox='0 0 40 40'
      aria-hidden
    >
      <path {...stroke} d='M19.8 6.2l9.4 5.2v11.1l-9.6 5.4-9.2-5.6V11.2z' />
      <path {...stroke} d='M19.8 6.2v10.8M10.4 11.4l9.4 5.6M29.2 11.4l-9.4 5.6' />
    </svg>
  )
}

export function IconClaude(props: IconProps) {
  const size = props.size ?? 40
  return (
    <svg
      className={props.className}
      width={size}
      height={size}
      viewBox='0 0 40 40'
      aria-hidden
    >
      <path {...stroke} d='M20.1 7.4v25.2' />
      <path {...stroke} d='M8.2 19.8h23.6' />
      <path {...stroke} d='M11.4 11.1l17.4 17.6' />
      <path {...stroke} d='M28.9 11.3L11.6 28.5' />
    </svg>
  )
}

export function IconGemini(props: IconProps) {
  const size = props.size ?? 40
  return (
    <svg
      className={props.className}
      width={size}
      height={size}
      viewBox='0 0 40 40'
      aria-hidden
    >
      <path {...stroke} d='M20.2 5.8l7.8 14.1-7.9 14.3-7.6-14.4z' />
      <path {...stroke} d='M20.2 12.6l4.2 7.3-4.3 7.5-4.1-7.6z' />
    </svg>
  )
}

export function IconArrow(props: IconProps) {
  const size = props.size ?? 18
  return (
    <svg
      className={props.className}
      width={size}
      height={size}
      viewBox='0 0 18 18'
      aria-hidden
    >
      <path
        {...stroke}
        strokeWidth={1.8}
        d='M3.2 9.1h11.4M10.1 4.8l4.6 4.3-4.5 4.4'
      />
    </svg>
  )
}

export function IconBrand(props: IconProps) {
  const size = props.size ?? 72
  return (
    <svg
      className={`mh-icon-brand ${props.className ?? ''}`.trim()}
      width={size}
      height={size}
      viewBox='0 0 64 64'
      aria-hidden
    >
      <g className='mh-icon-brand__spin'>
        <path className='mh-icon-brand__stroke' {...stroke} strokeWidth={1.75} d='M32.1 10.4v16.8' />
        <path className='mh-icon-brand__stroke mh-icon-brand__stroke--d1' {...stroke} strokeWidth={1.75} d='M32.1 36.6v16.9' />
        <path className='mh-icon-brand__stroke mh-icon-brand__stroke--d2' {...stroke} strokeWidth={1.7} d='M11.2 32.2h16.6' />
        <path className='mh-icon-brand__stroke mh-icon-brand__stroke--d3' {...stroke} strokeWidth={1.7} d='M36.4 32.2h16.8' />
        <path className='mh-icon-brand__stroke mh-icon-brand__stroke--d4' {...stroke} strokeWidth={1.65} d='M16.6 16.8l11.4 11.2' />
        <path className='mh-icon-brand__stroke mh-icon-brand__stroke--d5' {...stroke} strokeWidth={1.65} d='M36.2 36.4l11.6 11.3' />
        <path className='mh-icon-brand__stroke mh-icon-brand__stroke--d6' {...stroke} strokeWidth={1.65} d='M47.6 16.6L36.4 27.9' />
        <path className='mh-icon-brand__stroke mh-icon-brand__stroke--d7' {...stroke} strokeWidth={1.65} d='M27.8 36.5L16.4 47.8' />
        <circle className='mh-icon-brand__node' cx='32.1' cy='32.2' r='3.1' fill='none' {...stroke} strokeWidth={1.7} />
      </g>
    </svg>
  )
}

