// import App from "next/app";
import React, { ReactElement } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import Web3Provider from '@context/Web3'
import { UserPreferencesProvider } from '@context/UserPreferences'
import PricesProvider from '@context/Prices'
import UrqlProvider from '@context/UrqlProvider'
import ConsentProvider from '@context/CookieConsent'
import App from 'src/components/App'

import '@oceanprotocol/typographies/css/ocean-typo.css'
import '../stylesGlobal/styles.css'
import '../stylesGlobal/player.css'
import Decimal from 'decimal.js'
import MarketMetadataProvider from '@context/MarketMetadata'
import { PlayerProvider } from '@context/Player.context'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  Decimal.set({ rounding: 1 })
  return (
    <MarketMetadataProvider>
      <Web3Provider>
        <UrqlProvider>
          <UserPreferencesProvider>
            <PricesProvider>
              <ConsentProvider>
                <PlayerProvider>
                  <App>
                    <Component {...pageProps} />
                  </App>
                </PlayerProvider>
              </ConsentProvider>
            </PricesProvider>
          </UserPreferencesProvider>
        </UrqlProvider>
      </Web3Provider>
    </MarketMetadataProvider>
  )
}

export default MyApp
