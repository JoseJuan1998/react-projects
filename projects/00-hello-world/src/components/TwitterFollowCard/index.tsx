import { useState } from 'react'
import { ITwitterFollowCard } from './interface'

function TwitterFollowCard({
  imageUrl,
  altText,
  name,
  username,
  isFollowing,
  formatUsername,
}: ITwitterFollowCard) {
  const [isFollowingState, setIsFollowingState] = useState(isFollowing)

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          src={imageUrl}
          alt={altText}
          className='tw-followCard-header-avatar'
        />
        <div className='tw-followCard-header-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-header-info-username'>
            {formatUsername(username)}
          </span>
        </div>
      </header>

      <aside>
        <button
          className={
            isFollowingState
              ? 'tw-followCard-button tw-followCard-buttonFollowing'
              : 'tw-followCard-button'
          }
          onClick={() => setIsFollowingState(!isFollowingState)}
        >
          <span className='tw-followCard-button-text'>{isFollowingState ? 'Following' : 'Follow'}</span>
          <span className='tw-followCard-button-text-unfollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
