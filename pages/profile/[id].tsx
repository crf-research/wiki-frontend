import type { NextPage } from 'next'
import ProfileArticle from '../../components/ProfileArticle'
import { shortenAddress } from '../../helpers'

const Profile: NextPage = () => {
  return (
    <div className="max-h-full space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">John Doe</h1>
        <h2 className="mb-10 text-slate-400 hover:underline hover:underline-offset-2">
          <a
            href="https://etherscan.io/address/0xd2832a92fa4b93b4024b3e9f9699cd1924d7780b"
            target="_blank"
            rel="noreferrer"
          >
            {shortenAddress('0xD2832A92Fa4b93b4024b3E9F9699cD1924D7780b')}
          </a>
        </h2>
        <div className="flex justify-center">
          <div className="text-justify w-2/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            magna eget est lorem ipsum dolor. Amet aliquam id diam maecenas
            ultricies mi eget mauris pharetra.
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="solid w-2/5 bg-slate-500" />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-around w-2/5">
          <div className="space-y-8 w-full mr-8">
            <h1 className="text-xl font-semibold">Articles Created</h1>
            <ProfileArticle />
            <ProfileArticle />
          </div>
          <div className="space-y-8 w-full">
            <h1 className="text-xl font-semibold">Articles Edited</h1>
            <ProfileArticle />
            <ProfileArticle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
