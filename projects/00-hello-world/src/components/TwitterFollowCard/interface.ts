export interface ITwitterFollowCard {
  imageUrl: string
  altText: string
  name: string
  username: string
  isFollowing: boolean
  formatUsername: (username: string) => string
}
