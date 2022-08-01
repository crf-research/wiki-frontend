import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex place-content-between items-center pt-20 pb-20 px-48">
      <Link href="/" passHref>
        <span className="cursor-pointer font-bold text-6xl">📖</span>
      </Link>
      <div className="flex items-center">
        <button className="bg-violet-500 py-2 px-4 rounded-lg text-white font-bold">
          Connect Button
        </button>
      </div>
    </div>
  )
}

export default Header
