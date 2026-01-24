// Comments data for videos

export interface Comment {
  id: string
  author: string
  authorId: string
  avatar: string
  text: string
  likes: number
  replies: number
  timestamp: string
  isPinned?: boolean
  repliesList?: Comment[]
}

// Generate realistic comments for each video
const commentTemplates = [
  "Great tutorial! This really helped me understand {topic}. Thanks for sharing!",
  "Amazing content! I've been looking for something like this for weeks.",
  "This is exactly what I needed. Clear and concise explanation.",
  "Wow, I never thought about it this way. Mind blown! 🔥",
  "Can you make a follow-up video about {topic}? Would love to see more!",
  "Thanks for the detailed walkthrough. Subscribed!",
  "This is so helpful! Bookmarking this for later reference.",
  "Great job explaining {topic}. The examples really helped.",
  "I've been struggling with this for days. Your explanation made it click!",
  "Excellent video! The production quality is top-notch.",
  "This is the best explanation I've found on YouTube. Well done!",
  "Love the way you break down complex concepts. Keep it up!",
  "Just what I was looking for! Thanks for making this.",
  "This helped me pass my exam. You're a lifesaver!",
  "Great content as always! Looking forward to more videos.",
  "The best tutorial on {topic} I've seen. Period.",
  "This is gold! Thank you for sharing your knowledge.",
  "Perfect timing! I needed this for my project.",
  "Your teaching style is amazing. Easy to follow and understand.",
  "This video deserves way more views. Quality content!",
  "I've watched this 3 times already. So much to learn!",
  "Can't believe this is free. This is premium content!",
  "You explained this better than my professor. Thank you!",
  "This is going straight to my favorites. Amazing work!",
  "I wish I found this channel earlier. Great stuff!",
  "The examples are perfect. Really helps with understanding.",
  "This is exactly the kind of content I love. More please!",
  "Your explanations are so clear. Keep making videos!",
  "I've learned more from this video than hours of reading.",
  "This is a game-changer. Thank you for sharing!",
  "Great video! One question though - what about {topic}?",
  "This is helpful but I think you missed {topic}.",
  "Good video, but could you explain {topic} in more detail?",
  "I have a different approach to this. What do you think about {topic}?",
  "Nice! I've been using {topic} for this. Works great!",
  "This is good, but I prefer {topic} method. Thoughts?",
  "Great explanation! I'd love to see a video on {topic} next.",
  "This is helpful, but I'm still confused about {topic}.",
  "Can you make a video comparing {topic} vs {topic}?",
  "I disagree with the part about {topic}. Here's why...",
]

const replyTemplates = [
  "Thanks! Glad it helped!",
  "Great question! I'll cover that in a future video.",
  "You're right, that's another good approach!",
  "I'll add that to my list of topics to cover.",
  "Appreciate the feedback!",
  "That's a valid point. Let me think about that.",
  "Thanks for watching!",
  "I'm glad you found it useful!",
  "Great suggestion! I'll consider that.",
  "Thanks for the support!",
]

const usernames = [
  "CryptoEnthusiast", "BlockchainDev", "Web3Explorer", "DeFiMaster", "NFTCollector",
  "SolidityPro", "EthereumFan", "CryptoNoob", "BlockchainNewbie", "Web3Learner",
  "DeFiTrader", "NFTCreator", "SmartContractDev", "CryptoInvestor", "BlockchainBuilder",
  "Web3Developer", "DeFiFarmer", "NFTArtist", "CryptoWhale", "BlockchainGuru",
  "Web3Wizard", "DeFiDeFi", "CryptoKing", "BlockchainNinja", "Web3Warrior",
  "DeFiDegen", "NFTHunter", "CryptoShark", "BlockchainBeast", "Web3Hero",
  "CryptoLegend", "BlockchainPro", "Web3Genius", "DeFiExpert", "NFTSpecialist",
  "CryptoAce", "BlockchainBoss", "Web3Champion", "DeFiGuru", "NFTCrafter",
  "CryptoMaster", "BlockchainStar", "Web3Pioneer", "DeFiVeteran", "NFTCreator",
  "CryptoElite", "BlockchainElite", "Web3Elite", "DeFiElite", "NFTElite",
]

const topics = [
  "Web3", "blockchain", "smart contracts", "DeFi", "NFTs", "Solidity", 
  "Ethereum", "cryptocurrency", "decentralization", "dApps", "tokens",
  "yield farming", "liquidity pools", "staking", "mining", "wallets",
]

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

function generateCommentText(template: string, videoTitle: string): string {
  let text = template
  const topicMatches = text.match(/\{topic\}/g)
  if (topicMatches) {
    topicMatches.forEach(() => {
      text = text.replace('{topic}', getRandomElement(topics))
    })
  }
  return text
}

function generateTimestamp(): string {
  const units = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']
  const unit = getRandomElement(units)
  let value = 1
  
  if (unit === 'second') value = Math.floor(Math.random() * 59) + 1
  else if (unit === 'minute') value = Math.floor(Math.random() * 59) + 1
  else if (unit === 'hour') value = Math.floor(Math.random() * 23) + 1
  else if (unit === 'day') value = Math.floor(Math.random() * 30) + 1
  else if (unit === 'week') value = Math.floor(Math.random() * 4) + 1
  else if (unit === 'month') value = Math.floor(Math.random() * 11) + 1
  else value = Math.floor(Math.random() * 2) + 1
  
  return `${value} ${unit}${value > 1 ? 's' : ''} ago`
}

function generateReplies(count: number, videoTitle: string): Comment[] {
  const replies: Comment[] = []
  for (let i = 0; i < count; i++) {
    const author = getRandomElement(usernames)
    replies.push({
      id: `reply-${Date.now()}-${i}`,
      author,
      authorId: author.toLowerCase().replace(/\s+/g, ''),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`,
      text: getRandomElement(replyTemplates),
      likes: Math.floor(Math.random() * 500),
      replies: 0,
      timestamp: generateTimestamp(),
    })
  }
  return replies
}

// Generate comments for a video
export function generateCommentsForVideo(videoId: number, videoTitle: string, count: number = 2000): Comment[] {
  const comments: Comment[] = []
  
  // Generate main comments
  for (let i = 0; i < count; i++) {
    const author = getRandomElement(usernames)
    const hasReplies = Math.random() > 0.7
    const replyCount = hasReplies ? Math.floor(Math.random() * 5) + 1 : 0
    
    const comment: Comment = {
      id: `comment-${videoId}-${i}`,
      author,
      authorId: author.toLowerCase().replace(/\s+/g, ''),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`,
      text: generateCommentText(getRandomElement(commentTemplates), videoTitle),
      likes: Math.floor(Math.random() * 5000) + 1,
      replies: replyCount,
      timestamp: generateTimestamp(),
      isPinned: i === 0 && Math.random() > 0.8, // First comment might be pinned
    }
    
    // Add replies if this comment has them
    if (hasReplies && replyCount > 0) {
      comment.repliesList = generateReplies(replyCount, videoTitle)
    }
    
    comments.push(comment)
  }
  
  // Don't sort here - sorting will be done in getCommentsForVideo based on sortBy parameter
  return comments
}

// Parse timestamp to get a sortable date
function parseTimestamp(timestamp: string): number {
  const now = Date.now()
  const match = timestamp.match(/(\d+)\s+(second|minute|hour|day|week|month|year)s? ago/)
  if (!match) return now
  
  const value = parseInt(match[1])
  const unit = match[2]
  
  let multiplier = 1000 // milliseconds
  if (unit === 'second') multiplier = 1000
  else if (unit === 'minute') multiplier = 60 * 1000
  else if (unit === 'hour') multiplier = 60 * 60 * 1000
  else if (unit === 'day') multiplier = 24 * 60 * 60 * 1000
  else if (unit === 'week') multiplier = 7 * 24 * 60 * 60 * 1000
  else if (unit === 'month') multiplier = 30 * 24 * 60 * 60 * 1000
  else if (unit === 'year') multiplier = 365 * 24 * 60 * 60 * 1000
  
  return now - (value * multiplier)
}

// Get comments for a video with pagination and sorting
export function getCommentsForVideo(
  videoId: number, 
  videoTitle: string, 
  page: number = 1, 
  pageSize: number = 20,
  sortBy: 'top' | 'newest' = 'top'
): {
  comments: Comment[]
  total: number
  hasMore: boolean
} {
  // In a real app, this would fetch from a database
  // For now, we'll generate comments on the fly
  let allComments = generateCommentsForVideo(videoId, videoTitle, 2000)
  
  // Sort comments based on sortBy parameter
  if (sortBy === 'newest') {
    // Sort by timestamp (newest first), but keep pinned at top
    allComments.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1
      if (!a.isPinned && b.isPinned) return 1
      return parseTimestamp(b.timestamp) - parseTimestamp(a.timestamp)
    })
  } else {
    // Sort by likes (top comments), but keep pinned at top
    allComments.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1
      if (!a.isPinned && b.isPinned) return 1
      return b.likes - a.likes
    })
  }
  
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  
  return {
    comments: allComments.slice(startIndex, endIndex),
    total: allComments.length,
    hasMore: endIndex < allComments.length,
  }
}

