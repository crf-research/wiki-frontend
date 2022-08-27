import Link from 'next/link'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'
import { shortenAddress } from '../helpers'
import { UserIcon } from '@heroicons/react/outline'

const Header = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
  const { address, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  const { data: ensName } = useEnsName({ address })
  const { disconnect } = useDisconnect()

  return (
    <div className="flex place-content-between items-center pt-20 pb-16 px-48">
      <Link href="/" passHref>
        <span className="cursor-pointer font-bold text-6xl">📖</span>
      </Link>
      <div className="flex space-x-4 items-center">
        {isConnected ? (
          <button
            className="bg-violet-300 py-2 px-4 rounded-lg text-white font-bold"
            onClick={() => disconnect()}
          >
            {shortenAddress(address)}
          </button>
        ) : (
          <div>
            {connectors.map((connector) => (
              <button
                className="bg-violet-500 py-2 px-4 rounded-lg text-white font-bold"
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                Connect
              </button>
            ))}

            {error && <div>{error.message}</div>}
          </div>
        )}
        <Link href="/profile/xx" passHref>
          <UserIcon className="h-8 w-8 text-slate-400 cursor-pointer hover:text-slate-200" />
        </Link>
      </div>
    </div>
  )
}

export default Header
