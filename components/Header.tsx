import Link from 'next/link'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

const Header = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  const { data: ensName } = useEnsName({ address })
  const { disconnect } = useDisconnect()

  // if (isConnected) {
  //   return (
  //     <div>
  //       <img src={ensAvatar} alt="ENS Avatar" />
  //       <div>{ensName ? `${ensName} (${address})` : address}</div>
  //       <button onClick={disconnect}>Disconnect</button>
  //     </div>
  //   )
  // }

  return (
    <div className="flex place-content-between items-center pt-20 pb-20 px-48">
      <Link href="/" passHref>
        <span className="cursor-pointer font-bold text-6xl">📖</span>
      </Link>
      <div>
        {connectors.map((connector) => (
          <button
            className="bg-violet-500 py-2 px-4 rounded-lg text-white font-bold"
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            Connect
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </button>
        ))}

        {error && <div>{error.message}</div>}
      </div>
    </div>
  )
}

export default Header
