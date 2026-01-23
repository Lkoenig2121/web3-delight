import { Video } from './videoData'

// Simple fuzzy matching function
export function fuzzyMatch(query: string, text: string): boolean {
  if (!query) return false
  
  const queryLower = query.toLowerCase()
  const textLower = text.toLowerCase()
  
  // Exact match
  if (textLower.includes(queryLower)) return true
  
  // Fuzzy match: check if all characters in query appear in order in text
  let queryIndex = 0
  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      queryIndex++
    }
  }
  
  return queryIndex === queryLower.length
}

// Search videos with fuzzy matching
export function searchVideos(query: string, videos: Video[]): Video[] {
  if (!query.trim()) return []
  
  const queryLower = query.toLowerCase().trim()
  
  return videos.filter(video => {
    // Search in title
    if (fuzzyMatch(queryLower, video.title)) return true
    
    // Search in creator name
    if (fuzzyMatch(queryLower, video.creator)) return true
    
    // Search in description
    if (fuzzyMatch(queryLower, video.description)) return true
    
    return false
  })
}

// Calculate match score for sorting (better matches first)
export function getMatchScore(query: string, video: Video): number {
  const queryLower = query.toLowerCase()
  let score = 0
  
  // Title matches get highest priority
  const titleLower = video.title.toLowerCase()
  if (titleLower === queryLower) score += 100
  else if (titleLower.startsWith(queryLower)) score += 50
  else if (titleLower.includes(queryLower)) score += 25
  else if (fuzzyMatch(queryLower, video.title)) score += 10
  
  // Creator matches
  const creatorLower = video.creator.toLowerCase()
  if (creatorLower.includes(queryLower)) score += 15
  
  // Description matches
  if (video.description.toLowerCase().includes(queryLower)) score += 5
  
  return score
}

