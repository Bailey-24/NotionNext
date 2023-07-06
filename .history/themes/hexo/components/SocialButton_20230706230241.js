import BLOG from '@/blog.config'
import React from 'react'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-full justify-center flex-wrap flex'>
    <div className='space-x-3 text-xl text-gray-600 dark:text-gray-300 '>
      {BLOG.CONTACT_EMAIL && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${BLOG.CONTACT_EMAIL}`} >
        <i className='transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_GITHUB && <a target='_blank' rel='noreferrer' title={'github'} href={BLOG.CONTACT_GITHUB} >
        <i className='transform hover:scale-125 duration-150 fab fa-github dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_WEIBO && <a target='_blank' rel='noreferrer' title={'Zhihu'} href={BLOG.CONTACT_WEIBO} >
        <i className='transform hover:scale-125 duration-150 fab fa-zhihu dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_TWITTER && <a target='_blank' rel='noreferrer' title={'csdn'} href={BLOG.CONTACT_TWITTER} >
        <i className='transform hover:scale-125 duration-150 fab fa-copyright dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_TELEGRAM && <a target='_blank' rel='noreferrer' href={BLOG.CONTACT_TELEGRAM} title={'XiaoHongShu'} >
        <i className='transform hover:scale-125 duration-150 fab fa-book dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_LINKEDIN && <a target='_blank' rel='noreferrer' href={BLOG.CONTACT_LINKEDIN} title={'Bilibili'} >
        <i className='transform hover:scale-125 duration-150 fab fa-bilibili dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.CONTACT_INSTAGRAM && <a target='_blank' rel='noreferrer' title={'Tiktok'} href={BLOG.CONTACT_INSTAGRAM} >
        <i className='transform hover:scale-125 duration-150 fab fa-tiktok dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
      {BLOG.ENABLE_RSS && <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} >
        <i className='transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-indigo-400 hover:text-indigo-600'/>
      </a>}
    </div>
  </div>
}
export default SocialButton
