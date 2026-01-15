// Shared video data
export interface Video {
  id: number
  title: string
  creator: string
  creatorId: string
  thumbnail: string
  views: string
  duration: string
  avatar: string
  description: string
  likes: string
  uploadDate: string
  videoUrl?: string
}

export const videos: Video[] = [
  {
    id: 1,
    title: 'Introduction to Web3 Development',
    creator: 'CryptoDev',
    creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    views: '125K',
    duration: '12:34',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Learn the fundamentals of Web3 development, including blockchain basics, smart contracts, and decentralized applications. This comprehensive guide will get you started on your Web3 journey.',
    likes: '8.2K',
    uploadDate: '2 weeks ago',
  },
  {
    id: 2,
    title: 'Building Your First DApp',
    creator: 'BlockchainMaster',
    creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800',
    views: '89K',
    duration: '18:22',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Step-by-step tutorial on building your first decentralized application from scratch. We\'ll cover everything from setup to deployment.',
    likes: '6.5K',
    uploadDate: '3 weeks ago',
  },
  {
    id: 3,
    title: 'Smart Contracts Explained',
    creator: 'Web3Guru',
    creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639322537221-d02ef2d6f8e4?w=800',
    views: '234K',
    duration: '15:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Deep dive into smart contracts: how they work, security best practices, and real-world applications. Perfect for beginners and intermediate developers.',
    likes: '18.9K',
    uploadDate: '1 month ago',
  },
  {
    id: 4,
    title: 'NFT Marketplace Tutorial',
    creator: 'NFTExpert',
    creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800',
    views: '156K',
    duration: '22:10',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Build a complete NFT marketplace using Solidity and React. Learn about minting, trading, and displaying NFTs.',
    likes: '12.3K',
    uploadDate: '2 months ago',
  },
  {
    id: 5,
    title: 'DeFi Protocols Deep Dive',
    creator: 'DeFiAnalyst',
    creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639322537221-d02ef2d6f8e4?w=800',
    views: '98K',
    duration: '19:33',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Understanding decentralized finance protocols, liquidity pools, yield farming, and how to interact with DeFi applications.',
    likes: '7.8K',
    uploadDate: '1 week ago',
  },
  {
    id: 6,
    title: 'Ethereum 2.0 Explained',
    creator: 'EthDeveloper',
    creatorId: 'ethdeveloper',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    views: '312K',
    duration: '14:28',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    description: 'Everything you need to know about Ethereum 2.0: proof-of-stake, sharding, and the future of the Ethereum network.',
    likes: '24.5K',
    uploadDate: '3 months ago',
  },
  {
    id: 7,
    title: 'Web3 Security Best Practices',
    creator: 'SecurityPro',
    creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800',
    views: '178K',
    duration: '16:52',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Critical security practices for Web3 developers. Learn how to protect your smart contracts and applications from common vulnerabilities.',
    likes: '14.2K',
    uploadDate: '1 month ago',
  },
  {
    id: 8,
    title: 'Building on Polygon',
    creator: 'PolygonBuilder',
    creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800',
    views: '145K',
    duration: '20:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Complete guide to building scalable applications on Polygon. Learn about layer 2 solutions and gas optimization.',
    likes: '11.7K',
    uploadDate: '2 weeks ago',
  },
]

export function getVideoById(id: number): Video | undefined {
  return videos.find(v => v.id === id)
}

export function getVideosByCreator(creatorId: string): Video[] {
  return videos.filter(v => v.creatorId === creatorId)
}

