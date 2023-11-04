import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'

const page = () => {
  return (
    <div>
      <div className='flex-[1_1_0%]'>
        <div className=''>
          <FontAwesomeIcon icon={faXTwitter} size='2xl'/>
        </div>
        <div className='sidebar-menu'>

        </div>
        ABC
      </div>
      <div className='flex-[2_1_0%] border-x-[0.8px] border-primary'></div>
      <div className='flex-[1_1_0%]'></div>
    </div>
  )
}

export default page
