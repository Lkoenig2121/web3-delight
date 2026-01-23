// Subscription management utilities

export function getSubscriptions(): string[] {
  if (typeof window === 'undefined') return []
  const subscriptions = localStorage.getItem('subscriptions')
  return subscriptions ? JSON.parse(subscriptions) : []
}

export function isSubscribed(creatorId: string): boolean {
  const subscriptions = getSubscriptions()
  return subscriptions.includes(creatorId)
}

export function subscribe(creatorId: string): void {
  const subscriptions = getSubscriptions()
  if (!subscriptions.includes(creatorId)) {
    subscriptions.push(creatorId)
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions))
  }
}

export function unsubscribe(creatorId: string): void {
  const subscriptions = getSubscriptions()
  const filtered = subscriptions.filter(id => id !== creatorId)
  localStorage.setItem('subscriptions', JSON.stringify(filtered))
}

export function toggleSubscription(creatorId: string): boolean {
  if (isSubscribed(creatorId)) {
    unsubscribe(creatorId)
    return false
  } else {
    subscribe(creatorId)
    return true
  }
}

