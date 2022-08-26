import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { useContract, useSigner, useAccount } from 'wagmi'

type FormData = {
  title: string
  article: string
  creatorAddress: string | undefined
}

const Create: NextPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const { data: signer, isError, isLoading } = useSigner()
  const { address } = useAccount()

  const onSubmit = async () => {
    console.log('submit')
    if (!signer) {
      alert('Please connect your wallet first.')
      return
    }
  }

  return (
    <div className="max-h-full">
      <h1 className="font-semibold text-4xl mb-10 text-center">Create</h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-1/2">
          <div className="space-y-2">
            <label className="font-semibold mb-2 text-xl block text-slate-300">
              Title
            </label>
            <input
              className="border border-slate-300 outline-non px-3 py-3 rounded-md bg-slate-100 text-slate-700 w-full"
              type="text"
              {...register('title', { required: true })}
            />
            {errors.title && (
              <div className="text-pink-400">
                Please do not leave this field blank
              </div>
            )}
          </div>
          <div>
            <label className="font-semibold mb-2 text-xl block text-slate-300">
              Article
            </label>
            <textarea
              className="border border-slate-300 outline-none rounded-md px-3 py-3 h-40 bg-slate-100 text-slate-700 w-full"
              {...register('article', { required: true })}
            />
            {errors.article && (
              <div className="text-pink-400">
                Please do not leave this field blank
              </div>
            )}
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="bg-violet-500 py-2 px-8 rounded-lg text-2xl text-white font-bold"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create
