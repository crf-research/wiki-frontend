import type { NextPage } from 'next'
import Link from 'next/link'
import ArticleFeature from '../components/ArticleFeature'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center text-center max-h-full">
      <div>
        <div className="space-y-10">
          <h1 className="text-7xl font-bold">| Solpedia | </h1>
          <div className="text-xl font-thin">
            One liner we need to think about
          </div>
        </div>
        <div className="space-x-16 mt-20">
          <Link href="/create" passHref>
            <button className="font-semibold text-xl bg-violet-500 rounded-md text-white px-4 py-2 w-28">
              Create
            </button>
          </Link>
          <Link href="/article/xx" passHref>
            <button className="font-semibold text-xl bg-violet-500 rounded-md text-white px-4 py-2 w-28">
              Read
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-20 px-40">
          <ArticleFeature />
          <ArticleFeature />
          <ArticleFeature />
        </div>
      </div>
    </div>
  )
}

export default Home
