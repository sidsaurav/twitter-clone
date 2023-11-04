import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBell, faEllipsis, faEnvelope, faHouse, faSearch, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import SidebarItems from '@/components/SidebarItems'

const page = () => {
  return (
    <>
      <div className='flex-[1_1_0%] pr-8'>
        <div className='mb-8'>
          <FontAwesomeIcon icon={faXTwitter} size='2xl' />
        </div>
        <div className='sidebar-menu'>
          <SidebarItems icon={faHouse} content='Home'></SidebarItems>
          <SidebarItems icon={faSearch} content='Explore'></SidebarItems>
          <SidebarItems icon={faBell} content='Notifications'></SidebarItems>
          <SidebarItems icon={faEnvelope} content='Messages'></SidebarItems>
          <SidebarItems icon={faUserGroup} content='Communities'></SidebarItems>
          <SidebarItems icon={faXTwitter} content='Premium'></SidebarItems>
          <SidebarItems icon={faUser} content='Profile'></SidebarItems>
          <SidebarItems icon={faEllipsis} content='More'></SidebarItems>
        </div>
        <div className="h-12 p-1 bg-[var(--twitter-primary)] flex justify-center items-center rounded-3xl w-3/4 font-medium">Post</div>
      </div>
      <div className='flex-[2_1_0%] border-x-[0.8px] border-primary'></div>
      <div className='flex-[1_1_0%]'></div>
    </>
  )
}

export default page
