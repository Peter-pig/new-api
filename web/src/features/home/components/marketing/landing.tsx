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
import { useStatus } from '@/hooks/use-status'

import { DEFAULT_SITE_NAME } from './config'
import { MarketingAvailability } from './availability'
import { MarketingCTA } from './cta'
import { MarketingHero } from './hero'
import { MarketingModels } from './models'
import './marketing.css'

type MarketingLandingProps = {
  isAuthenticated?: boolean
}

export function MarketingLanding(props: MarketingLandingProps) {
  const { status } = useStatus()
  const siteName =
    (status?.system_name as string | undefined)?.trim() || DEFAULT_SITE_NAME

  return (
    <main className='mh-landing' aria-label='猫狗 AI 首页'>
      <MarketingHero siteName={siteName} />
      <MarketingModels />
      <MarketingAvailability />
      <MarketingCTA
        siteName={siteName}
        isAuthenticated={props.isAuthenticated}
      />
    </main>
  )
}
