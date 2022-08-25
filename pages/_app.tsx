import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

function MyApp({ Component, pageProps }: AppProps) {
  const { chains, provider, webSocketProvider } = configureChains(
    defaultChains,
    [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()]
  )
  const client = createClient({
    autoConnect: true,
    connectors: [new MetaMaskConnector({ chains })],
    provider,
    webSocketProvider,
  })

  return (
    <WagmiConfig client={client}>
      <Header />
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

export default MyApp
