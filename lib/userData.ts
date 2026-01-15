// User profile data
export interface UserProfile {
  id: string
  username: string
  displayName: string
  avatar: string
  bio: string
  subscribers: string
  videos: number
  totalViews: string
  joinDate: string
  socialLinks: {
    twitter?: string
    github?: string
    website?: string
  }
}

export const userProfiles: UserProfile[] = [
  {
    id: 'cryptodev',
    username: 'CryptoDev',
    displayName: 'Crypto Dev',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    bio: 'Web3 developer passionate about blockchain technology and decentralized applications. Sharing knowledge and building the future of the internet.',
    subscribers: '45.2K',
    videos: 12,
    totalViews: '1.2M',
    joinDate: 'January 2023',
    socialLinks: {
      twitter: '@cryptodev',
      github: 'cryptodev',
    },
  },
  {
    id: 'blockchainmaster',
    username: 'BlockchainMaster',
    displayName: 'Blockchain Master',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    bio: 'Teaching blockchain development one tutorial at a time. Expert in Solidity, Web3.js, and building production-ready DApps.',
    subscribers: '89.5K',
    videos: 28,
    totalViews: '3.5M',
    joinDate: 'November 2022',
    socialLinks: {
      twitter: '@blockchainmaster',
      github: 'blockchainmaster',
      website: 'blockchainmaster.io',
    },
  },
  {
    id: 'web3guru',
    username: 'Web3Guru',
    displayName: 'Web3 Guru',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    bio: 'Your guide to the Web3 ecosystem. Simplifying complex concepts and helping developers build amazing decentralized applications.',
    subscribers: '156.8K',
    videos: 45,
    totalViews: '8.9M',
    joinDate: 'March 2022',
    socialLinks: {
      twitter: '@web3guru',
      github: 'web3guru',
    },
  },
  {
    id: 'nftexpert',
    username: 'NFTExpert',
    displayName: 'NFT Expert',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    bio: 'NFT creator and educator. Building NFT marketplaces and teaching others how to create, mint, and trade NFTs.',
    subscribers: '72.3K',
    videos: 19,
    totalViews: '2.1M',
    joinDate: 'June 2022',
    socialLinks: {
      twitter: '@nftexpert',
    },
  },
  {
    id: 'defianalyst',
    username: 'DeFiAnalyst',
    displayName: 'DeFi Analyst',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    bio: 'Analyzing DeFi protocols and providing insights on yield farming, liquidity pools, and decentralized finance strategies.',
    subscribers: '34.7K',
    videos: 15,
    totalViews: '950K',
    joinDate: 'August 2022',
    socialLinks: {
      twitter: '@defianalyst',
    },
  },
  {
    id: 'ethdeveloper',
    username: 'EthDeveloper',
    displayName: 'Ethereum Developer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    bio: 'Building on Ethereum. Sharing tutorials, tips, and tricks for Ethereum development and smart contract programming.',
    subscribers: '201.5K',
    videos: 52,
    totalViews: '12.3M',
    joinDate: 'January 2022',
    socialLinks: {
      twitter: '@ethdeveloper',
      github: 'ethdeveloper',
      website: 'ethdeveloper.dev',
    },
  },
  {
    id: 'securitypro',
    username: 'SecurityPro',
    displayName: 'Security Pro',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    bio: 'Web3 security researcher and auditor. Helping developers build secure smart contracts and applications.',
    subscribers: '67.9K',
    videos: 23,
    totalViews: '1.8M',
    joinDate: 'April 2022',
    socialLinks: {
      twitter: '@securitypro',
      github: 'securitypro',
    },
  },
  {
    id: 'polygonbuilder',
    username: 'PolygonBuilder',
    displayName: 'Polygon Builder',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    bio: 'Building scalable applications on Polygon. Expert in layer 2 solutions and gas optimization techniques.',
    subscribers: '58.4K',
    videos: 17,
    totalViews: '1.4M',
    joinDate: 'May 2022',
    socialLinks: {
      twitter: '@polygonbuilder',
      github: 'polygonbuilder',
    },
  },
]

export function getUserProfile(username: string): UserProfile | undefined {
  return userProfiles.find(u => u.id === username || u.username.toLowerCase() === username.toLowerCase())
}

