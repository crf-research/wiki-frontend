import type { NextPage } from 'next'
import ProfileArticle from '../../components/ProfileArticle'

const Profile: NextPage = () => {
  return (
    <div className="max-h-full space-y-8">
      <div className="text-center">
        <h1 className="text-xl mb-10">Wallet Address</h1>
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
