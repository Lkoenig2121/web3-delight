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
  category?: string
}

export type VideoCategory = 'All' | 'Solidity' | 'DeFi' | 'NFTs' | 'Security' | 'Layer 2' | 'Tools' | 'Advanced'

export function getVideosByCategory(category: VideoCategory): Video[] {
  if (category === 'All') return allVideos
  
  return videos.filter(video => {
    const title = video.title.toLowerCase()
    const desc = video.description.toLowerCase()
    
    switch (category) {
      case 'Solidity':
        return title.includes('solidity') || title.includes('erc-') || title.includes('smart contract') || 
               title.includes('interface') || title.includes('inheritance') || title.includes('modifier')
      case 'DeFi':
        return title.includes('defi') || title.includes('uniswap') || title.includes('aave') || 
               title.includes('compound') || title.includes('liquidity') || title.includes('yield') ||
               title.includes('makerdao') || title.includes('curve') || title.includes('balancer')
      case 'NFTs':
        return title.includes('nft') || title.includes('erc-721') || title.includes('erc-1155') || 
               title.includes('minting') || title.includes('opensea') || title.includes('rarity') ||
               title.includes('generative') || title.includes('royalties')
      case 'Security':
        return title.includes('security') || title.includes('audit') || title.includes('vulnerability') ||
               title.includes('reentrancy') || title.includes('attack') || title.includes('safe')
      case 'Layer 2':
        return title.includes('polygon') || title.includes('arbitrum') || title.includes('optimism') ||
               title.includes('rollup') || title.includes('zk') || title.includes('starknet') ||
               title.includes('zksync') || title.includes('plasma') || title.includes('sidechain')
      case 'Tools':
        return title.includes('hardhat') || title.includes('truffle') || title.includes('foundry') ||
               title.includes('remix') || title.includes('metamask') || title.includes('wallet') ||
               title.includes('alchemy') || title.includes('infura') || title.includes('graph')
      case 'Advanced':
        return title.includes('oracle') || title.includes('dao') || title.includes('bridge') ||
               title.includes('tokenomics') || title.includes('proxy') || title.includes('factory') ||
               title.includes('vesting') || title.includes('multi-sig')
      default:
        return true
    }
  })
}

export const videos: Video[] = [
  {
    id: 1,
    title: 'Introduction to Web3 Development',
    creator: 'CryptoDev',
    creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
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
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
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
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80',
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
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
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
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
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
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
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
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
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
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
    views: '145K',
    duration: '20:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Complete guide to building scalable applications on Polygon. Learn about layer 2 solutions and gas optimization.',
    likes: '11.7K',
    uploadDate: '2 weeks ago',
  },
  {
    id: 9,
    title: 'Getting Started with Web3',
    creator: 'web3user',
    creatorId: 'web3user',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    views: '45K',
    duration: '10:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=web3user',
    description: 'A beginner-friendly introduction to Web3 concepts and how to get started in the decentralized web.',
    likes: '3.2K',
    uploadDate: '1 week ago',
  },
  {
    id: 10,
    title: 'Understanding Blockchain Basics',
    creator: 'web3user',
    creatorId: 'web3user',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
    views: '38K',
    duration: '14:22',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=web3user',
    description: 'Learn the fundamental concepts of blockchain technology in an easy-to-understand way.',
    likes: '2.8K',
    uploadDate: '2 weeks ago',
  },
  // Additional videos to reach 100 total
  {
    id: 11,
    title: 'Solidity Programming Fundamentals',
    creator: 'CryptoDev',
    creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    views: '156K',
    duration: '25:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Master the Solidity programming language from scratch. Learn syntax, data types, functions, and best practices for smart contract development.',
    likes: '12.5K',
    uploadDate: '3 weeks ago',
  },
  {
    id: 12,
    title: 'Web3.js vs Ethers.js Comparison',
    creator: 'CryptoDev',
    creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
    views: '98K',
    duration: '18:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Compare Web3.js and Ethers.js libraries. Learn which one to use for your project and understand their key differences.',
    likes: '7.2K',
    uploadDate: '1 month ago',
  },
  {
    id: 13,
    title: 'ERC-20 Token Development Guide',
    creator: 'BlockchainMaster',
    creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80',
    views: '203K',
    duration: '32:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Complete guide to creating your own ERC-20 token. From writing the contract to deploying on mainnet.',
    likes: '18.3K',
    uploadDate: '2 weeks ago',
  },
  {
    id: 14,
    title: 'Hardhat Development Environment Setup',
    creator: 'BlockchainMaster',
    creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
    views: '134K',
    duration: '16:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Set up Hardhat for Ethereum development. Learn how to configure your project, write tests, and deploy contracts.',
    likes: '10.5K',
    uploadDate: '4 weeks ago',
  },
  {
    id: 15,
    title: 'Understanding Gas Optimization',
    creator: 'Web3Guru',
    creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    views: '287K',
    duration: '28:50',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Learn techniques to optimize gas usage in your smart contracts. Reduce costs and improve efficiency.',
    likes: '22.1K',
    uploadDate: '1 week ago',
  },
  {
    id: 16,
    title: 'IPFS Integration for Decentralized Storage',
    creator: 'Web3Guru',
    creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
    views: '176K',
    duration: '21:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Integrate IPFS into your DApp for decentralized file storage. Learn pinning, retrieval, and best practices.',
    likes: '14.8K',
    uploadDate: '3 weeks ago',
  },
  {
    id: 17,
    title: 'NFT Minting Smart Contract',
    creator: 'NFTExpert',
    creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
    views: '245K',
    duration: '35:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Build an NFT minting contract from scratch. Learn ERC-721 standard and implement your own collection.',
    likes: '19.6K',
    uploadDate: '5 days ago',
  },
  {
    id: 18,
    title: 'OpenSea Integration Tutorial',
    creator: 'NFTExpert',
    creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80',
    views: '198K',
    duration: '24:10',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'List and sell your NFTs on OpenSea. Complete guide to marketplace integration and metadata standards.',
    likes: '15.3K',
    uploadDate: '2 weeks ago',
  },
  {
    id: 19,
    title: 'Uniswap V3 Liquidity Pools',
    creator: 'DeFiAnalyst',
    creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    views: '312K',
    duration: '42:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Deep dive into Uniswap V3 concentrated liquidity. Learn how to provide liquidity and maximize returns.',
    likes: '28.4K',
    uploadDate: '1 week ago',
  },
  {
    id: 20,
    title: 'Aave Lending Protocol Explained',
    creator: 'DeFiAnalyst',
    creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
    views: '267K',
    duration: '38:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Understand how Aave works. Learn about lending, borrowing, and earning interest on your crypto assets.',
    likes: '23.7K',
    uploadDate: '2 weeks ago',
  },
  {
    id: 21,
    title: 'ERC-721 Implementation Guide',
    creator: 'NFTExpert',
    creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
    views: '189K',
    duration: '29:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Complete guide to implementing ERC-721 standard for NFTs. Learn the interface, events, and best practices.',
    likes: '15.2K',
    uploadDate: '1 week ago',
  },
  {
    id: 22,
    title: 'Smart Contract Testing with Hardhat',
    creator: 'BlockchainMaster',
    creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
    views: '167K',
    duration: '26:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Master smart contract testing using Hardhat. Learn unit tests, integration tests, and coverage analysis.',
    likes: '13.8K',
    uploadDate: '2 weeks ago',
  },
  {
    id: 23,
    title: 'Compound Protocol Overview',
    creator: 'DeFiAnalyst',
    creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    views: '298K',
    duration: '36:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Understanding Compound protocol for lending and borrowing. Learn about cTokens and interest rates.',
    likes: '26.4K',
    uploadDate: '5 days ago',
  },
  {
    id: 24,
    title: 'Reentrancy Attack Prevention',
    creator: 'SecurityPro',
    creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
    views: '223K',
    duration: '22:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Learn how to prevent reentrancy attacks in your smart contracts. Understand checks-effects-interactions pattern.',
    likes: '19.1K',
    uploadDate: '1 week ago',
  },
  {
    id: 25,
    title: 'Arbitrum Development Guide',
    creator: 'PolygonBuilder',
    creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
    views: '145K',
    duration: '31:40',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Build on Arbitrum L2. Learn about bridging, deployment, and optimizing for lower gas costs.',
    likes: '12.3K',
    uploadDate: '3 weeks ago',
  },
  {
    id: 26,
    title: 'EVM Architecture Explained',
    creator: 'EthDeveloper',
    creatorId: 'ethdeveloper',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    views: '267K',
    duration: '33:25',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    description: 'Deep dive into Ethereum Virtual Machine architecture. Understand opcodes, stack, and execution model.',
    likes: '24.8K',
    uploadDate: '2 weeks ago',
  },
  {
    id: 27,
    title: 'MetaMask Integration',
    creator: 'CryptoDev',
    creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80',
    views: '312K',
    duration: '19:50',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Integrate MetaMask wallet into your DApp. Learn about provider API and transaction handling.',
    likes: '28.5K',
    uploadDate: '1 week ago',
  },
  {
    id: 28,
    title: 'ERC-1155 Multi Token Standard',
    creator: 'NFTExpert',
    creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
    views: '178K',
    duration: '27:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Learn ERC-1155 standard for semi-fungible tokens. Perfect for gaming and multi-token collections.',
    likes: '14.9K',
    uploadDate: '2 weeks ago',
  },
  {
    id: 29,
    title: 'MakerDAO and DAI Stablecoin',
    creator: 'DeFiAnalyst',
    creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
    views: '256K',
    duration: '41:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Understanding MakerDAO protocol and how DAI stablecoin maintains its peg through collateralization.',
    likes: '22.3K',
    uploadDate: '1 week ago',
  },
  {
    id: 30,
    title: 'Upgradeable Contracts Pattern',
    creator: 'Web3Guru',
    creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    views: '198K',
    duration: '35:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Learn proxy patterns for upgradeable smart contracts. Understand UUPS, Transparent, and Beacon proxies.',
    likes: '17.6K',
    uploadDate: '3 weeks ago',
  },
  // Batch 2: Videos 31-60
  {
    id: 31, title: 'Events and Logs in Solidity', creator: 'CryptoDev', creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '142K', duration: '18:25',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Master Solidity events and logs. Learn how to emit events and filter them in your frontend applications.',
    likes: '11.8K', uploadDate: '2 weeks ago',
  },
  {
    id: 32, title: 'Yearn Finance Yield Strategies', creator: 'DeFiAnalyst', creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '234K', duration: '39:10',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Maximize your DeFi yields with Yearn Finance. Learn about vaults, strategies, and auto-compounding.',
    likes: '20.1K', uploadDate: '1 week ago',
  },
  {
    id: 33, title: 'NFT Metadata Standards', creator: 'NFTExpert', creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '167K', duration: '24:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Understanding NFT metadata standards. Learn JSON schema, IPFS storage, and marketplace compatibility.',
    likes: '13.5K', uploadDate: '2 weeks ago',
  },
  {
    id: 34, title: 'Transaction Lifecycle', creator: 'EthDeveloper', creatorId: 'ethdeveloper',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '289K', duration: '28:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    description: 'Follow a transaction from creation to confirmation. Understand nonces, gas, and block inclusion.',
    likes: '25.2K', uploadDate: '1 week ago',
  },
  {
    id: 35, title: 'Integer Overflow Protection', creator: 'SecurityPro', creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '156K', duration: '20:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Protect your contracts from integer overflow. Learn about SafeMath and Solidity 0.8+ built-in protection.',
    likes: '13.2K', uploadDate: '3 weeks ago',
  },
  {
    id: 36, title: 'Optimism Rollups Explained', creator: 'PolygonBuilder', creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '134K', duration: '33:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Understanding Optimistic Rollups. Learn about fraud proofs, challenge periods, and L2 architecture.',
    likes: '11.4K', uploadDate: '2 weeks ago',
  },
  {
    id: 37, title: 'Truffle Framework Setup', creator: 'BlockchainMaster', creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '178K', duration: '22:40',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Set up Truffle development framework. Learn about migrations, testing, and deployment workflows.',
    likes: '14.6K', uploadDate: '1 month ago',
  },
  {
    id: 38, title: 'Cross-chain Bridges', creator: 'Web3Guru', creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '245K', duration: '37:50',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Understanding cross-chain bridges. Learn about different bridge architectures and security considerations.',
    likes: '21.3K', uploadDate: '1 week ago',
  },
  {
    id: 39, title: 'Modifiers and Access Control', creator: 'CryptoDev', creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '198K', duration: '19:25',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Master Solidity modifiers for access control. Learn OpenZeppelin Ownable and role-based permissions.',
    likes: '16.8K', uploadDate: '2 weeks ago',
  },
  {
    id: 40, title: 'Curve Finance AMM', creator: 'DeFiAnalyst', creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '312K', duration: '44:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Deep dive into Curve Finance automated market maker. Learn about stablecoin swaps and liquidity provision.',
    likes: '28.9K', uploadDate: '5 days ago',
  },
  {
    id: 41, title: 'Rarity Calculation Methods', creator: 'NFTExpert', creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '189K', duration: '26:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Learn how to calculate NFT rarity. Understand trait-based scoring and ranking algorithms.',
    likes: '15.7K', uploadDate: '1 week ago',
  },
  {
    id: 42, title: 'Block Structure Deep Dive', creator: 'EthDeveloper', creatorId: 'ethdeveloper',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '223K', duration: '31:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    description: 'Understanding Ethereum block structure. Learn about headers, transactions, and state roots.',
    likes: '19.8K', uploadDate: '2 weeks ago',
  },
  {
    id: 43, title: 'Access Control Patterns', creator: 'SecurityPro', creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '167K', duration: '23:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Implement secure access control in smart contracts. Learn about roles, permissions, and multi-sig patterns.',
    likes: '14.1K', uploadDate: '3 weeks ago',
  },
  {
    id: 44, title: 'ZK-Rollups Overview', creator: 'PolygonBuilder', creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '145K', duration: '35:10',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Understanding Zero-Knowledge Rollups. Learn about zkSync, StarkNet, and cryptographic proofs.',
    likes: '12.1K', uploadDate: '2 weeks ago',
  },
  {
    id: 45, title: 'Foundry Development', creator: 'BlockchainMaster', creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '134K', duration: '27:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Modern smart contract development with Foundry. Learn Forge, Cast, and Anvil for faster development.',
    likes: '11.2K', uploadDate: '1 month ago',
  },
  {
    id: 46, title: 'Oracles and Chainlink', creator: 'Web3Guru', creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '267K', duration: '40:25',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Integrate Chainlink oracles into your contracts. Learn about price feeds, VRF, and automation.',
    likes: '23.4K', uploadDate: '1 week ago',
  },
  {
    id: 47, title: 'Structs and Mappings Deep Dive', creator: 'CryptoDev', creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '156K', duration: '21:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Master Solidity structs and mappings. Learn nested structures, iterating mappings, and gas optimization.',
    likes: '13.4K', uploadDate: '2 weeks ago',
  },
  {
    id: 48, title: 'Balancer Pool Mechanics', creator: 'DeFiAnalyst', creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '234K', duration: '38:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Understanding Balancer AMM pools. Learn about weighted pools, stable pools, and liquidity bootstrapping.',
    likes: '20.5K', uploadDate: '1 week ago',
  },
  {
    id: 49, title: 'Generative Art NFTs', creator: 'NFTExpert', creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '201K', duration: '32:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Create generative art NFT collections. Learn about algorithms, traits, and on-chain vs off-chain generation.',
    likes: '17.2K', uploadDate: '5 days ago',
  },
  {
    id: 50, title: 'Consensus Mechanisms Comparison', creator: 'EthDeveloper', creatorId: 'ethdeveloper',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '278K', duration: '36:10',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    description: 'Compare PoW, PoS, DPoS, and other consensus mechanisms. Understand their trade-offs and use cases.',
    likes: '24.1K',     uploadDate: '2 weeks ago',
  },
  // Batch 3: Videos 51-75
  {
    id: 51, title: 'Smart Contract Auditing', creator: 'SecurityPro', creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '189K', duration: '29:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Learn how to audit smart contracts. Understand common vulnerabilities and security best practices.',
    likes: '16.3K', uploadDate: '1 week ago',
  },
  {
    id: 52, title: 'Polygon PoS Architecture', creator: 'PolygonBuilder', creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '156K', duration: '34:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Understanding Polygon Proof-of-Stake architecture. Learn about validators, checkpoints, and Heimdall.',
    likes: '13.1K', uploadDate: '2 weeks ago',
  },
  {
    id: 53, title: 'Remix IDE Guide', creator: 'BlockchainMaster', creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '178K', duration: '20:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Master Remix IDE for smart contract development. Learn debugging, testing, and deployment features.',
    likes: '14.8K', uploadDate: '3 weeks ago',
  },
  {
    id: 54, title: 'DAO Governance Models', creator: 'Web3Guru', creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '245K', duration: '42:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Understanding DAO governance. Learn about voting mechanisms, proposals, and treasury management.',
    likes: '21.6K', uploadDate: '1 week ago',
  },
  {
    id: 55, title: 'Inheritance in Solidity', creator: 'CryptoDev', creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '167K', duration: '24:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Master contract inheritance in Solidity. Learn about multiple inheritance, function overriding, and constructors.',
    likes: '14.2K', uploadDate: '2 weeks ago',
  },
  {
    id: 56, title: 'SushiSwap vs Uniswap', creator: 'DeFiAnalyst', creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '312K', duration: '33:40',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Compare SushiSwap and Uniswap DEXs. Understand their differences in liquidity, fees, and tokenomics.',
    likes: '28.7K', uploadDate: '5 days ago',
  },
  {
    id: 57, title: 'NFT Royalties Implementation', creator: 'NFTExpert', creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '198K', duration: '28:25',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Implement NFT royalties in your contracts. Learn about EIP-2981 and marketplace integration.',
    likes: '16.9K', uploadDate: '1 week ago',
  },
  {
    id: 58, title: 'Merkle Trees and Proofs', creator: 'EthDeveloper', creatorId: 'ethdeveloper',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '234K', duration: '30:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    description: 'Understanding Merkle trees in blockchain. Learn about proofs, verification, and gas-efficient storage.',
    likes: '20.4K', uploadDate: '2 weeks ago',
  },
  {
    id: 59, title: 'Common Vulnerabilities', creator: 'SecurityPro', creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '223K', duration: '26:50',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Top 10 smart contract vulnerabilities and how to prevent them. Real-world examples and fixes.',
    likes: '19.3K', uploadDate: '1 week ago',
  },
  {
    id: 60, title: 'StarkNet Development', creator: 'PolygonBuilder', creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '145K', duration: '39:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Build on StarkNet L2. Learn Cairo programming language and STARK proofs.',
    likes: '12.5K', uploadDate: '3 weeks ago',
  },
  {
    id: 61, title: 'WalletConnect Tutorial', creator: 'BlockchainMaster', creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '167K', duration: '25:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Integrate WalletConnect for multi-wallet support. Learn about sessions, events, and mobile wallets.',
    likes: '13.9K', uploadDate: '2 weeks ago',
  },
  {
    id: 62, title: 'Tokenomics Design', creator: 'Web3Guru', creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '289K', duration: '45:10',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Design effective tokenomics for your project. Learn about supply, distribution, and utility models.',
    likes: '25.8K', uploadDate: '1 week ago',
  },
  {
    id: 63, title: 'Interface vs Abstract Contracts', creator: 'CryptoDev', creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '134K', duration: '17:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Understanding interfaces and abstract contracts in Solidity. Learn when to use each pattern.',
    likes: '11.3K', uploadDate: '3 weeks ago',
  },
  {
    id: 64, title: 'Liquidity Mining Guide', creator: 'DeFiAnalyst', creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '256K', duration: '36:25',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Complete guide to liquidity mining. Learn about rewards, impermanent loss, and yield optimization.',
    likes: '22.6K', uploadDate: '1 week ago',
  },
  {
    id: 65, title: 'Lazy Minting Explained', creator: 'NFTExpert', creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '178K', duration: '23:40',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Implement lazy minting for gas-efficient NFT creation. Learn about signature-based minting.',
    likes: '14.7K', uploadDate: '2 weeks ago',
  },
  {
    id: 66, title: 'State Trie Explained', creator: 'EthDeveloper', creatorId: 'ethdeveloper',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '267K', duration: '32:50',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    description: 'Understanding Ethereum state trie. Learn about accounts, storage, and Merkle Patricia trees.',
    likes: '23.6K', uploadDate: '2 weeks ago',
  },
  {
    id: 67, title: 'Secure Random Number Generation', creator: 'SecurityPro', creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '189K', duration: '21:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Generate secure random numbers in smart contracts. Learn about Chainlink VRF and commit-reveal schemes.',
    likes: '16.1K', uploadDate: '1 week ago',
  },
  {
    id: 68, title: 'zkSync Integration', creator: 'PolygonBuilder', creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '156K', duration: '37:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Build on zkSync L2. Learn about account abstraction and ZK-proof generation.',
    likes: '13.3K', uploadDate: '2 weeks ago',
  },
  {
    id: 69, title: 'The Graph Protocol', creator: 'BlockchainMaster', creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '201K', duration: '29:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Query blockchain data with The Graph. Learn about subgraphs, indexing, and GraphQL queries.',
    likes: '17.4K', uploadDate: '1 week ago',
  },
  {
    id: 70, title: 'Proxy Patterns', creator: 'Web3Guru', creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '234K', duration: '34:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Understanding proxy patterns for upgradeable contracts. Learn UUPS, Transparent, and Beacon proxies.',
    likes: '20.3K', uploadDate: '1 week ago',
  },
  {
    id: 71, title: 'Library Contracts Explained', creator: 'CryptoDev', creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '145K', duration: '19:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Create and use library contracts in Solidity. Learn about gas savings and code reuse.',
    likes: '12.2K', uploadDate: '3 weeks ago',
  },
  {
    id: 72, title: 'Impermanent Loss Explained', creator: 'DeFiAnalyst', creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '312K', duration: '31:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Understanding impermanent loss in liquidity pools. Learn how to calculate and mitigate it.',
    likes: '28.2K', uploadDate: '5 days ago',
  },
  {
    id: 73, title: 'NFT Staking Mechanisms', creator: 'NFTExpert', creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '198K', duration: '27:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Implement NFT staking in your contracts. Learn about time-locks, rewards, and unstaking mechanisms.',
    likes: '16.7K', uploadDate: '1 week ago',
  },
  {
    id: 74, title: 'Gas Price and Gas Limit', creator: 'EthDeveloper', creatorId: 'ethdeveloper',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '223K', duration: '24:10',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    description: 'Understanding gas mechanics in Ethereum. Learn how to optimize gas costs and transaction fees.',
    likes: '19.5K', uploadDate: '2 weeks ago',
  },
  {
    id: 75, title: 'Time-based Attacks', creator: 'SecurityPro', creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '167K', duration: '22:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Protect against time-based attacks. Learn about block.timestamp vulnerabilities and secure alternatives.',
    likes: '14.3K', uploadDate: '3 weeks ago',
  },
  // Batch 4: Videos 76-100
  {
    id: 76, title: 'State Channels Tutorial', creator: 'PolygonBuilder', creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '134K', duration: '28:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Understanding state channels for off-chain transactions. Learn about payment channels and applications.',
    likes: '11.6K', uploadDate: '2 weeks ago',
  },
  {
    id: 77, title: 'Alchemy API Usage', creator: 'BlockchainMaster', creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '178K', duration: '23:25',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Use Alchemy API for blockchain interactions. Learn about enhanced APIs, webhooks, and monitoring.',
    likes: '14.9K', uploadDate: '1 month ago',
  },
  {
    id: 78, title: 'Vesting Contracts', creator: 'Web3Guru', creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '245K', duration: '30:40',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Implement token vesting contracts. Learn about linear, cliff, and custom vesting schedules.',
    likes: '21.4K', uploadDate: '1 week ago',
  },
  {
    id: 79, title: 'Ethers.js Advanced Features', creator: 'CryptoDev', creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '189K', duration: '26:50',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Advanced Ethers.js features. Learn about providers, signers, contracts, and event filtering.',
    likes: '16.2K', uploadDate: '2 weeks ago',
  },
  {
    id: 80, title: 'Flash Loans Tutorial', creator: 'DeFiAnalyst', creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '298K', duration: '39:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Understanding flash loans in DeFi. Learn how to use Aave and dYdX flash loan features.',
    likes: '26.8K', uploadDate: '1 week ago',
  },
  {
    id: 81, title: 'Fractionalized NFTs', creator: 'NFTExpert', creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '167K', duration: '25:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Understanding fractionalized NFTs. Learn how to split NFT ownership and create shares.',
    likes: '14.0K', uploadDate: '2 weeks ago',
  },
  {
    id: 82, title: 'EIP Standards Overview', creator: 'EthDeveloper', creatorId: 'ethdeveloper',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '234K', duration: '33:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    description: 'Overview of Ethereum Improvement Proposals. Learn about ERC standards and their implementations.',
    likes: '20.6K', uploadDate: '2 weeks ago',
  },
  {
    id: 83, title: 'Front-running Prevention', creator: 'SecurityPro', creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '201K', duration: '24:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Prevent front-running attacks. Learn about commit-reveal schemes and private mempools.',
    likes: '17.3K', uploadDate: '1 week ago',
  },
  {
    id: 84, title: 'Plasma Chains', creator: 'PolygonBuilder', creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '145K', duration: '35:50',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Understanding Plasma scaling solution. Learn about child chains and exit mechanisms.',
    likes: '12.4K', uploadDate: '3 weeks ago',
  },
  {
    id: 85, title: 'Infura Node Setup', creator: 'BlockchainMaster', creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '156K', duration: '21:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Set up Infura for Ethereum node access. Learn about API keys, endpoints, and rate limits.',
    likes: '13.0K', uploadDate: '1 month ago',
  },
  {
    id: 86, title: 'Multi-sig Wallets', creator: 'Web3Guru', creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '267K', duration: '37:25',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Understanding multi-signature wallets. Learn about Gnosis Safe and custom multi-sig implementations.',
    likes: '23.5K', uploadDate: '1 week ago',
  },
  {
    id: 87, title: 'Factory Contract Pattern', creator: 'CryptoDev', creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '178K', duration: '22:40',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Implement factory pattern for contract deployment. Learn about cloning and gas optimization.',
    likes: '15.1K', uploadDate: '2 weeks ago',
  },
  {
    id: 88, title: 'Dynamic NFTs Tutorial', creator: 'NFTExpert', creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '189K', duration: '31:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Create dynamic NFTs that change based on conditions. Learn about on-chain metadata and updates.',
    likes: '16.0K', uploadDate: '1 week ago',
  },
  {
    id: 89, title: 'Upgrade Safety Patterns', creator: 'SecurityPro', creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '223K', duration: '28:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Safe upgrade patterns for smart contracts. Learn about storage layout and initialization.',
    likes: '19.2K', uploadDate: '1 week ago',
  },
  {
    id: 90, title: 'Sidechain Solutions', creator: 'PolygonBuilder', creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '134K', duration: '32:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Understanding sidechain scaling solutions. Learn about bridges and security models.',
    likes: '11.5K', uploadDate: '2 weeks ago',
  },
  {
    id: 91, title: 'Web3 Wallet Integration', creator: 'web3user', creatorId: 'web3user',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '67K', duration: '19:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=web3user',
    description: 'Integrate Web3 wallets into your application. Learn about connection, signing, and transaction handling.',
    likes: '5.8K', uploadDate: '1 week ago',
  },
  {
    id: 92, title: 'Decentralized Identity', creator: 'Web3Guru', creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '198K', duration: '36:10',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Understanding decentralized identity systems. Learn about DID, verifiable credentials, and SSI.',
    likes: '17.1K', uploadDate: '1 week ago',
  },
  {
    id: 93, title: 'Smart Contract Events', creator: 'CryptoDev', creatorId: 'cryptodev',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '145K', duration: '20:25',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev',
    description: 'Advanced event handling in smart contracts. Learn about indexed parameters and event filtering.',
    likes: '12.3K', uploadDate: '3 weeks ago',
  },
  {
    id: 94, title: 'Yield Farming Strategies', creator: 'DeFiAnalyst', creatorId: 'defianalyst',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '312K', duration: '41:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst',
    description: 'Advanced yield farming strategies. Learn about compounding, auto-harvesting, and risk management.',
    likes: '28.1K', uploadDate: '5 days ago',
  },
  {
    id: 95, title: 'NFT Metadata on IPFS', creator: 'NFTExpert', creatorId: 'nftexpert',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '178K', duration: '26:20',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert',
    description: 'Store NFT metadata on IPFS. Learn about pinning services and decentralized storage best practices.',
    likes: '14.6K', uploadDate: '2 weeks ago',
  },
  {
    id: 96, title: 'Ethereum Name Service', creator: 'EthDeveloper', creatorId: 'ethdeveloper',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '234K', duration: '29:45',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper',
    description: 'Understanding ENS domains. Learn about registration, resolution, and subdomain management.',
    likes: '20.5K', uploadDate: '2 weeks ago',
  },
  {
    id: 97, title: 'Smart Contract Testing', creator: 'SecurityPro', creatorId: 'securitypro',
    thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80', views: '201K', duration: '27:30',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro',
    description: 'Comprehensive guide to smart contract testing. Learn unit tests, integration tests, and fuzzing.',
    likes: '17.2K', uploadDate: '1 week ago',
  },
  {
    id: 98, title: 'Layer 2 Comparison', creator: 'PolygonBuilder', creatorId: 'polygonbuilder',
    thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80', views: '156K', duration: '38:15',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder',
    description: 'Compare different L2 solutions. Learn about rollups, sidechains, and state channels.',
    likes: '13.2K', uploadDate: '2 weeks ago',
  },
  {
    id: 99, title: 'Web3 Authentication', creator: 'BlockchainMaster', creatorId: 'blockchainmaster',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', views: '189K', duration: '24:50',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster',
    description: 'Implement Web3 authentication. Learn about wallet signatures and session management.',
    likes: '16.4K', uploadDate: '1 month ago',
  },
  {
    id: 100, title: 'Minimal Proxy (EIP-1167)', creator: 'Web3Guru', creatorId: 'web3guru',
    thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80', views: '245K', duration: '31:40',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru',
    description: 'Understanding minimal proxy pattern for gas-efficient contract cloning. Learn EIP-1167 implementation.',
    likes: '21.7K', uploadDate: '1 week ago',
  },
]

// Generate additional videos programmatically to reach 10,000 total
function generateAdditionalVideos(): Video[] {
  const additionalVideos: Video[] = []
  
  // Creator video quotas based on their profiles
  const creatorQuotas: { [key: string]: number } = {
    'cryptodev': 12,
    'blockchainmaster': 28,
    'web3guru': 45,
    'nftexpert': 19,
    'defianalyst': 15,
    'ethdeveloper': 52,
    'securitypro': 23,
    'polygonbuilder': 17,
    'web3user': 5,
  }
  
  // Count existing videos per creator
  const existingCounts: { [key: string]: number } = {}
  videos.forEach(video => {
    existingCounts[video.creatorId] = (existingCounts[video.creatorId] || 0) + 1
  })
  
  // Calculate how many more videos each creator needs
  const creators = [
    { name: 'CryptoDev', id: 'cryptodev', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev' },
    { name: 'BlockchainMaster', id: 'blockchainmaster', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster' },
    { name: 'Web3Guru', id: 'web3guru', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru' },
    { name: 'NFTExpert', id: 'nftexpert', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert' },
    { name: 'DeFiAnalyst', id: 'defianalyst', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst' },
    { name: 'EthDeveloper', id: 'ethdeveloper', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper' },
    { name: 'SecurityPro', id: 'securitypro', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro' },
    { name: 'PolygonBuilder', id: 'polygonbuilder', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder' },
    { name: 'web3user', id: 'web3user', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=web3user' },
  ]
  
  // Create a pool of creators with remaining video slots
  const creatorPool: Array<{ name: string; id: string; avatar: string }> = []
  creators.forEach(creator => {
    const existing = existingCounts[creator.id] || 0
    const quota = creatorQuotas[creator.id] || 0
    const remaining = Math.max(0, quota - existing)
    // Add creator to pool based on remaining slots (for proportional distribution)
    for (let i = 0; i < remaining; i++) {
      creatorPool.push(creator)
    }
  })
  
  // Calculate total remaining slots
  const totalRemaining = creatorPool.length
  const videosToGenerate = 10000 - videos.length
  
  // If we need more videos than remaining slots, distribute proportionally
  if (videosToGenerate > totalRemaining) {
    // Distribute extra videos proportionally based on creator quotas
    const totalQuota = Object.values(creatorQuotas).reduce((sum, q) => sum + q, 0)
    creators.forEach(creator => {
      const quota = creatorQuotas[creator.id] || 0
      const proportion = quota / totalQuota
      const extraVideos = Math.floor((videosToGenerate - totalRemaining) * proportion)
      for (let i = 0; i < extraVideos; i++) {
        creatorPool.push(creator)
      }
    })
  }

  const videoTopics = [
    // Solidity & Smart Contracts
    'Solidity', 'Smart Contract', 'ERC-20', 'ERC-721', 'ERC-1155', 'Solidity Programming',
    'Smart Contract Development', 'Contract Deployment', 'Solidity Basics', 'Advanced Solidity',
    'Contract Testing', 'Contract Security', 'Gas Optimization', 'Solidity Patterns',
    
    // DeFi
    'DeFi', 'Uniswap', 'Aave', 'Compound', 'MakerDAO', 'Yearn Finance', 'Curve Finance',
    'Balancer', 'SushiSwap', 'Liquidity Pool', 'Yield Farming', 'Staking', 'Lending',
    'Borrowing', 'Flash Loans', 'AMM', 'DEX',
    
    // NFTs
    'NFT', 'NFT Minting', 'NFT Marketplace', 'OpenSea', 'Rarible', 'Generative Art',
    'NFT Collection', 'NFT Metadata', 'IPFS', 'Royalties', 'NFT Staking',
    
    // Blockchain & Ethereum
    'Ethereum', 'Blockchain', 'EVM', 'Consensus', 'Proof of Stake', 'Proof of Work',
    'Merkle Tree', 'Hash Function', 'Block Structure', 'Transaction', 'Gas',
    
    // Layer 2
    'Polygon', 'Arbitrum', 'Optimism', 'zkSync', 'StarkNet', 'Rollup', 'Sidechain',
    'Layer 2', 'Scaling', 'L2 Solution',
    
    // Tools
    'Hardhat', 'Truffle', 'Foundry', 'Remix', 'MetaMask', 'Web3.js', 'Ethers.js',
    'The Graph', 'Alchemy', 'Infura', 'WalletConnect',
    
    // Security
    'Security', 'Audit', 'Vulnerability', 'Reentrancy', 'Access Control', 'Smart Contract Audit',
    
    // Advanced
    'DAO', 'Governance', 'Oracle', 'Chainlink', 'Bridge', 'Cross-chain', 'Tokenomics',
    'Vesting', 'Multi-sig', 'Proxy', 'Factory Pattern',
  ]

  const thumbnails = [
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
    'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80',
    'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
  ]

  const uploadDates = ['1 day ago', '2 days ago', '3 days ago', '1 week ago', '2 weeks ago', '3 weeks ago', '1 month ago', '2 months ago', '3 months ago', '6 months ago', '1 year ago']

  const descriptions = [
    'Learn everything about {topic}. This comprehensive tutorial covers all the essential concepts and practical examples.',
    'Master {topic} with this in-depth guide. Perfect for both beginners and experienced developers.',
    'Complete walkthrough of {topic}. We\'ll cover theory, implementation, and best practices.',
    'Understanding {topic} made easy. Step-by-step tutorial with real-world examples.',
    'Deep dive into {topic}. Learn advanced techniques and industry best practices.',
    'Get started with {topic} in this beginner-friendly tutorial.',
    'Advanced {topic} concepts explained. Take your skills to the next level.',
  ]

  // Count existing videos per creator from the first 100
  const creatorVideoCounts: { [key: string]: number } = {}
  videos.forEach(video => {
    creatorVideoCounts[video.creatorId] = (creatorVideoCounts[video.creatorId] || 0) + 1
  })
  
  // Generate videos for existing creators up to their quota, then create new creators
  let videoId = 101
  const newCreators: Array<{ name: string; id: string; avatar: string }> = []
  
  // First, fill up existing creators to their quotas
  creators.forEach(creator => {
    const existing = creatorVideoCounts[creator.id] || 0
    const quota = creatorQuotas[creator.id] || 0
    const needed = Math.max(0, quota - existing)
    
    for (let j = 0; j < needed && videoId <= 10000; j++) {
      const topic = videoTopics[Math.floor(Math.random() * videoTopics.length)]
      const titleVariations = [
        `${topic} Tutorial`,
        `${topic} Explained`,
        `Complete Guide to ${topic}`,
        `Introduction to ${topic}`,
        `${topic} for Beginners`,
        `Advanced ${topic}`,
        `Building with ${topic}`,
        `${topic} Deep Dive`,
        `Mastering ${topic}`,
        `${topic} Best Practices`,
        `Understanding ${topic}`,
        `${topic} Development`,
        `Getting Started with ${topic}`,
        `${topic} Fundamentals`,
        `${topic} Implementation`,
      ]
      const title = titleVariations[Math.floor(Math.random() * titleVariations.length)]
      
      const views = Math.floor(Math.random() * 1000000) + 100
      const viewsStr = views >= 1000000 ? `${(views / 1000000).toFixed(1)}M` : views >= 1000 ? `${(views / 1000).toFixed(1)}K` : views.toString()
      
      const durationMinutes = Math.floor(Math.random() * 45) + 5
      const durationSeconds = Math.floor(Math.random() * 60)
      const duration = `${durationMinutes}:${String(durationSeconds).padStart(2, '0')}`
      
      const likes = Math.floor(views * (0.05 + Math.random() * 0.1))
      const likesStr = likes >= 1000000 ? `${(likes / 1000000).toFixed(1)}M` : likes >= 1000 ? `${(likes / 1000).toFixed(1)}K` : likes.toString()
      
      const description = descriptions[Math.floor(Math.random() * descriptions.length)].replace('{topic}', topic.toLowerCase())
      const thumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)]
      const uploadDate = uploadDates[Math.floor(Math.random() * uploadDates.length)]

      additionalVideos.push({
        id: videoId++,
        title,
        creator: creator.name,
        creatorId: creator.id,
        thumbnail,
        views: viewsStr,
        duration,
        avatar: creator.avatar,
        description,
        likes: likesStr,
        uploadDate,
      })
    }
  })
  
  // Generate new creators for remaining videos
  const newCreatorNames = [
    'Web3Builder', 'CryptoCreator', 'BlockchainDev', 'DeFiMaster', 'NFTArtist',
    'SolidityExpert', 'EthereumPro', 'CryptoGuru', 'Web3Wizard', 'BlockchainNinja',
    'DeFiDegen', 'NFTCrafter', 'CryptoAce', 'Web3Hero', 'BlockchainStar',
    'DeFiTrader', 'CryptoKing', 'Web3Pioneer', 'BlockchainElite', 'DeFiVeteran',
    'CryptoLegend', 'Web3Genius', 'BlockchainBoss', 'DeFiExpert', 'NFTSpecialist',
    'CryptoMaster', 'Web3Champion', 'BlockchainPro', 'DeFiGuru', 'NFTCreator',
    'CryptoWhale', 'Web3Warrior', 'BlockchainBeast', 'DeFiFarmer', 'NFTCollector',
    'CryptoShark', 'Web3Explorer', 'BlockchainGuru', 'DeFiAnalyst', 'NFTHunter',
    'CryptoInvestor', 'Web3Learner', 'BlockchainNewbie', 'DeFiNoob', 'CryptoEnthusiast',
  ]
  
  // Generate remaining videos with new creators
  while (videoId <= 10000) {
    // Create a new creator if needed
    if (newCreators.length < 50 && Math.random() > 0.7) {
      const creatorName = newCreatorNames[newCreators.length % newCreatorNames.length]
      newCreators.push({
        name: creatorName,
        id: creatorName.toLowerCase().replace(/\s+/g, ''),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(creatorName)}`,
      })
    }
    
    // Use existing creator or new creator
    const allCreators = [...creators, ...newCreators]
    const creator = allCreators[Math.floor(Math.random() * allCreators.length)]
    const topic = videoTopics[Math.floor(Math.random() * videoTopics.length)]
    const titleVariations = [
      `${topic} Tutorial`,
      `${topic} Explained`,
      `Complete Guide to ${topic}`,
      `Introduction to ${topic}`,
      `${topic} for Beginners`,
      `Advanced ${topic}`,
      `Building with ${topic}`,
      `${topic} Deep Dive`,
      `Mastering ${topic}`,
      `${topic} Best Practices`,
      `Understanding ${topic}`,
      `${topic} Development`,
      `Getting Started with ${topic}`,
      `${topic} Fundamentals`,
      `${topic} Implementation`,
    ]
    const title = titleVariations[Math.floor(Math.random() * titleVariations.length)]
    
    const views = Math.floor(Math.random() * 1000000) + 100
    const viewsStr = views >= 1000000 ? `${(views / 1000000).toFixed(1)}M` : views >= 1000 ? `${(views / 1000).toFixed(1)}K` : views.toString()
    
    const durationMinutes = Math.floor(Math.random() * 45) + 5
    const durationSeconds = Math.floor(Math.random() * 60)
    const duration = `${durationMinutes}:${String(durationSeconds).padStart(2, '0')}`
    
    const likes = Math.floor(views * (0.05 + Math.random() * 0.1))
    const likesStr = likes >= 1000000 ? `${(likes / 1000000).toFixed(1)}M` : likes >= 1000 ? `${(likes / 1000).toFixed(1)}K` : likes.toString()
    
    const description = descriptions[Math.floor(Math.random() * descriptions.length)].replace('{topic}', topic.toLowerCase())
    const thumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)]
    const uploadDate = uploadDates[Math.floor(Math.random() * uploadDates.length)]

    additionalVideos.push({
      id: videoId++,
      title,
      creator: creator.name,
      creatorId: creator.id,
      thumbnail,
      views: viewsStr,
      duration,
      avatar: creator.avatar,
      description,
      likes: likesStr,
      uploadDate,
    })
  }

  return additionalVideos
}

// Combine existing videos with generated ones
const generatedVideos = generateAdditionalVideos()
export const allVideos: Video[] = [...videos, ...generatedVideos]

export function getVideoById(id: number): Video | undefined {
  return allVideos.find(v => v.id === id)
}

export function getVideosByCreator(creatorId: string): Video[] {
  const creatorVideos = allVideos.filter(v => v.creatorId === creatorId)
  
  // Limit videos to match profile video count
  const creatorQuotas: { [key: string]: number } = {
    'cryptodev': 12,
    'blockchainmaster': 28,
    'web3guru': 45,
    'nftexpert': 19,
    'defianalyst': 15,
    'ethdeveloper': 52,
    'securitypro': 23,
    'polygonbuilder': 17,
    'web3user': 5,
  }
  
  const quota = creatorQuotas[creatorId.toLowerCase()]
  if (quota) {
    // Return only the first N videos up to the quota, sorted by ID (oldest first)
    return creatorVideos
      .sort((a, b) => a.id - b.id)
      .slice(0, quota)
  }
  
  // For new creators not in the quota list, return all their videos
  return creatorVideos
}

