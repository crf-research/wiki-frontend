import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useSigner,
  useAccount,
} from 'wagmi'
import { create } from 'ipfs-http-client'
import { GOERLI_ADDRESS, CONTRACT_ABI, GOERLI_CHAIN_ID } from '../constants'

type FormData = {
  title: string
  article: string
}

const projectId = process.env.INFURA_PROJECT_ID
const projectSecret = process.env.INFURA_PROJECT_SECRET
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

const client = create({
  host: 'ipfs.infura.io',
  protocol: 'https',
  port: 5001,
  headers: {
    authorization: auth,
  },
})

const Create: NextPage = () => {
  const [ipfsHash, setIpfsHash] = useState<string>('')
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const { data: signer } = useSigner()
  const { address } = useAccount()

  const { config, error, isError } = usePrepareContractWrite({
    addressOrName: GOERLI_ADDRESS,
    contractInterface: CONTRACT_ABI,
    functionName: 'createArticle',
    args: [ipfsHash],
  })

  const { write } = useContractWrite({
    ...config,
    onMutate({ args, overrides }) {
      console.log('Mutate', { args, overrides })
      if (!signer) {
        alert('Connect your wallet first!')
        return
      }
    },
    onError(error) {
      console.log('Error', error)
    },
    onSuccess(data) {
      console.log('Success', data)
    },
  })

  const onSubmit = async (data: any) => {
    data.creatorAddress = address
    if (!signer) {
      alert('Please connect your wallet first.')
      return
    }
    try {
      const { cid } = await client.add({
        content: JSON.stringify(data),
      })
      setIpfsHash(cid.toString())
      const url = `https://ipfs.io/ipfs/${cid}`
      console.log('url: ', url)
    } catch (err: any) {
      console.log('error creating article:', err)
    }
  }

  useEffect(() => {
    if (ipfsHash) {
      console.log('ipfs hash: ', ipfsHash)
      write?.()
    }
  }, [ipfsHash])

  return (
    <div className="max-h-full">
      <h1 className="font-semibold text-4xl mb-10 text-center">Create</h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-1/2">
          <div className="space-y-2">
            <label className="font-semibold mb-2 text-xl block text-slate-200">
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
            <label className="font-semibold mb-2 text-xl block text-slate-200">
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
