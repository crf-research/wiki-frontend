export const GOERLI_CHAIN_ID = 5
export const GOERLI_ADDRESS = '0x0C87130bEaBcC80BBDDc417Fa9875bE9f56c322D'

export const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'articleId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'ipfsHash',
        type: 'string',
      },
    ],
    name: 'ArticleCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'articleId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'versionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'editor',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'ipfsHash',
        type: 'string',
      },
    ],
    name: 'NewVersionCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'existingArticleId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'ipfsHash',
        type: 'string',
      },
    ],
    name: 'addVersion',
    outputs: [
      {
        internalType: 'string',
        name: 'latestIdentifier',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'articleId',
    outputs: [
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'ipfsHash',
        type: 'string',
      },
    ],
    name: 'createArticle',
    outputs: [
      {
        internalType: 'uint256',
        name: 'createdArticleId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'editors',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'links',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'versionId',
    outputs: [
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'versions',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
