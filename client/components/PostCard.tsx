import {
  faArrowUpFromBracket,
  faCertificate,
  faChartSimple,
  faEllipsis,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons'

import {
  faComment,
  faHeart,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type PostCardProps = {
  name: string
  username: string
  isPremium: boolean
  time: string
  commentCnt: number
  retweetCnt: number
  likeCnt: number
}

const PostCard = ({
  name,
  username,
  isPremium,
  time,
  commentCnt,
  retweetCnt,
  likeCnt,
}: PostCardProps) => {
  return (
    <div className='flex p-4 border-b-[0.8px] border-primary hover:cursor-pointer'>
      {/* profile pic */}
      <div className='flex-[1_1_0%] h-[40px] w-[40px] pr-3'>
        <img
          src='https://pbs.twimg.com/profile_images/1688483184734789632/h5jyAcos_400x400.jpg'
          className='rounded-full'
          alt='profile_pic'
        />
      </div>
      {/* body */}
      <div className='flex-[11_1_0%]'>
        {/* title */}
        <div className='flex w-[100%] justify-between pb-[2px]'>
          <div>
            <span className='hover:underline font-semibold'>{name}</span>{' '}
            {isPremium && (
              <FontAwesomeIcon
                icon={faCertificate}
                className='text-[var(--twitter-primary)]'
              />
            )}{' '}
            <span className='text-[15px] text-[#6E7378]'>
              @{username} · {time}
            </span>
          </div>
          <div>
            <span className=''>
              <FontAwesomeIcon icon={faEllipsis} className='text-[#6E7378]' />
            </span>
          </div>
        </div>
        {/* content */}
        <div className='text-[15px] pb-3'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
          odio nemo, laboriosam ipsum, dolorum nostrum expedita molestias error
          facere tempore tempora neque in eligendi consectetur! Ratione, quia
          maxime.
        </div>
        {/* action button */}
        <div className='text-[#6E7378] text-sm flex justify-between'>
          <div>
            <FontAwesomeIcon icon={faComment} />
            &nbsp;&nbsp;{commentCnt}
          </div>
          <div>
            <FontAwesomeIcon icon={faRetweet} />
            &nbsp;&nbsp;{retweetCnt}
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            &nbsp;&nbsp;{likeCnt}
          </div>
          <div>
            <FontAwesomeIcon icon={faChartSimple} />
            &nbsp;&nbsp;10
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
