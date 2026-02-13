import { SAMPLE_VIDEO_URLS, SAMPLE_VIDEO_LABELS } from '@/lib/videoData'

export interface Short {
  id: number
  title: string
  creator: string
  creatorId: string
  thumbnail: string
  views: string
  avatar: string
  videoUrl: string
  /** Human-readable name of the sample clip (matches actual playback) */
  sampleLabel: string
}

const baseShorts: Omit<Short, 'videoUrl'>[] = [
  { id: 1, title: '1-min Solidity tip', creator: 'CryptoDev', creatorId: 'cryptodev', thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80', views: '42K', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev' },
  { id: 2, title: 'DeFi in 60 seconds', creator: 'DeFiAnalyst', creatorId: 'defianalyst', thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=400&q=80', views: '28K', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeFiAnalyst' },
  { id: 3, title: 'NFT mint trick', creator: 'NFTExpert', creatorId: 'nftexpert', thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&q=80', views: '91K', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NFTExpert' },
  { id: 4, title: 'Smart contract gotcha', creator: 'Web3Guru', creatorId: 'web3guru', thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&q=80', views: '67K', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Web3Guru' },
  { id: 5, title: 'Security checklist', creator: 'SecurityPro', creatorId: 'securitypro', thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=400&q=80', views: '33K', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SecurityPro' },
  { id: 6, title: 'Layer 2 in 60 sec', creator: 'PolygonBuilder', creatorId: 'polygonbuilder', thumbnail: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&q=80', views: '19K', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PolygonBuilder' },
  { id: 7, title: 'First DApp in 1 min', creator: 'BlockchainMaster', creatorId: 'blockchainmaster', thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=400&q=80', views: '55K', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockchainMaster' },
  { id: 8, title: 'Ethereum 2.0 quick take', creator: 'EthDeveloper', creatorId: 'ethdeveloper', thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80', views: '38K', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthDeveloper' },
  { id: 9, title: 'Web3 beginner tip', creator: 'web3user', creatorId: 'web3user', thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80', views: '12K', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=web3user' },
  { id: 10, title: 'Gas optimization hack', creator: 'CryptoDev', creatorId: 'cryptodev', thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&q=80', views: '24K', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CryptoDev' },
]

export const shorts: Short[] = baseShorts.map((s) => {
  const idx = (s.id - 1) % SAMPLE_VIDEO_URLS.length
  return {
    ...s,
    videoUrl: SAMPLE_VIDEO_URLS[idx],
    sampleLabel: SAMPLE_VIDEO_LABELS[idx],
  }
})
