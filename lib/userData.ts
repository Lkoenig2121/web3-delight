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
    id: 'web3user',
    username: 'web3user',
    displayName: 'Web3 User',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=web3user',
    bio: 'Passionate Web3 enthusiast exploring the decentralized future. Learning and sharing knowledge about blockchain, DeFi, and NFTs.',
    subscribers: '12.5K',
    videos: 5,
    totalViews: '450K',
    joinDate: 'December 2023',
    socialLinks: {
      twitter: '@web3user',
    },
  },
  {
    id: 'cryptodev',
    username: 'cryptodev',
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
  // Normalize the username for comparison
  const normalizedInput = username.toLowerCase().replace(/\s+/g, '')
  
  // First check existing profiles
  const existingProfile = userProfiles.find(u => {
    const normalizedId = u.id.toLowerCase().replace(/\s+/g, '')
    const normalizedUsername = u.username.toLowerCase().replace(/\s+/g, '')
    return normalizedId === normalizedInput || normalizedUsername === normalizedInput
  })
  
  if (existingProfile) return existingProfile
  
  // Generate a profile for comment authors that don't have one
  // Use the input as-is for display, but normalize for ID
  const usernameLower = normalizedInput
  const displayName = username.replace(/([A-Z])/g, ' $1').trim() || username
  
  // Generate more realistic subscriber counts for regular commenters
  // Most will have very few subscribers (0-500), some will have moderate (500-5K), few will have more
  const subscriberRand = Math.random()
  let subscribers: string
  if (subscriberRand < 0.6) {
    // 60% have 0-500 subscribers
    const count = Math.floor(Math.random() * 500)
    subscribers = count < 100 ? count.toString() : `${(count / 100).toFixed(1)}K`
  } else if (subscriberRand < 0.9) {
    // 30% have 500-5K subscribers
    const count = Math.floor(Math.random() * 4500) + 500
    subscribers = `${(count / 1000).toFixed(1)}K`
  } else {
    // 10% have 5K-20K subscribers
    const count = Math.floor(Math.random() * 15000) + 5000
    subscribers = `${(count / 1000).toFixed(1)}K`
  }
  
  return {
    id: usernameLower,
    username: username,
    displayName: displayName,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(username)}`,
    bio: `Web3 enthusiast and content creator. Passionate about blockchain technology and the decentralized web.`,
    subscribers: subscribers,
    videos: Math.floor(Math.random() * 10) + 1,
    totalViews: `${Math.floor(Math.random() * 50) + 1}K`,
    joinDate: new Date(2022 + Math.floor(Math.random() * 2), Math.floor(Math.random() * 12)).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    socialLinks: {
      twitter: `@${usernameLower}`,
    },
  }
}

