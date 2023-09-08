import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, goerli, mainnet, polygon } from 'wagmi/chains'
import { Web3Button } from '@web3modal/react'

const chains = [ mainnet, goerli]
const projectId = '9364c3378f39ecce6920b8a6f05f1f91'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

 function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
      <Web3Button />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
export default App



