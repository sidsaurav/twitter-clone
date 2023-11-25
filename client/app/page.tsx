'use client';

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faBell,
  faEllipsis,
  faEnvelope,
  faHouse,
  faSearch,
  faUser,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import SidebarItems from '@/components/SidebarItems'
import PrimaryButton from '@/components/PrimaryButton'
import PostCard from '@/components/PostCard'
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { graphqlClient } from '@/graphql/graphqlClient';
import { verifyGoogleToken } from '@/graphql/user/query';
import toast from 'react-hot-toast';
import * as types from '@/gql/graphql';

async function handleGoogleOAuth(cred: { credential: string }) {
  console.log("cred", cred);
  const token: (string) = cred.credential
  if (!token) {
    toast.error("Google token not found!")
  }
  // const data = await graphqlClient.request(verifyGoogleToken, { token: token })
  const data = await graphqlClient.request<types.QueryVerifyGoogleTokenArgs>(verifyGoogleToken, { token: token })
  toast.success("Verification sucess!")

  console.log("data", data);
  window.localStorage.setItem("token", data.token)
}

const page = () => {
  return (
    <>
      {/* left sidebar */}
      <div className='flex-[1_1_0%]'>
        {/* twitter logo */}
        <div className='mb-8'>
          <FontAwesomeIcon icon={faXTwitter} size='2xl' />
        </div>

        {/* sidebar menu */}
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

        {/* post button */}
        <PrimaryButton content='Post' />
      </div>

      {/* middle section*/}
      <div className='flex-[2_1_0%] border-x-[0.8px] border-primary h-screen overflow-scroll'>
        <PostCard
          name='Siddharth'
          username='woke_up_sid__'
          isPremium={true}
          time='3h'
          commentCnt={5}
          retweetCnt={1}
          likeCnt={11}
        />
        <PostCard
          name='Shivani'
          username='itzz_shivvu'
          isPremium={false}
          time='5d'
          commentCnt={1}
          retweetCnt={2}
          likeCnt={2}
        />
        <PostCard
          name='Shivani'
          username='itzz_shivvu'
          isPremium={true}
          time='5d'
          commentCnt={1}
          retweetCnt={2}
          likeCnt={2}
        />
        <PostCard
          name='Shivani'
          username='itzz_shivvu'
          isPremium={true}
          time='5d'
          commentCnt={1}
          retweetCnt={2}
          likeCnt={2}
        />
        <PostCard
          name='Shivani'
          username='itzz_shivvu'
          isPremium={false}
          time='5d'
          commentCnt={1}
          retweetCnt={2}
          likeCnt={2}
        />
        <PostCard
          name='Shivani'
          username='itzz_shivvu'
          isPremium={false}
          time='5d'
          commentCnt={1}
          retweetCnt={2}
          likeCnt={2}
        />
        <PostCard
          name='Shivani'
          username='itzz_shivvu'
          isPremium={true}
          time='5d'
          commentCnt={1}
          retweetCnt={2}
          likeCnt={2}
        />
        <PostCard
          name='Shivani'
          username='itzz_shivvu'
          isPremium={false}
          time='5d'
          commentCnt={1}
          retweetCnt={2}
          likeCnt={2}
        />
      </div>

      {/* right sidebar */}
      <div className='flex-[1_1_0%] pl-8'>
        <div className='p-8 bg-slate-700 rounded-xl'>
          <h1 className='mb-4 text-xl'>New to Twitter Clone?</h1>
          <GoogleLogin onSuccess={(cred:{credential:string}) => handleGoogleOAuth(cred)} />
        </div>
      </div>
    </>
  )
}

export default page
