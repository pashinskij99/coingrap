import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import ToggleThemeButton from './ToggleThemeButton'

import Logo from '../public/images/coingraph-logo.png'
import NotificationImg from '../public/images/svgs/notification.svg'
import SettingsImg from '../public/images/svgs/settings.svg'
import PlusIcon from '../public/images/icons/PlusIcon.svg'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isVisibleMobile, setIsVisibleMobile] = useState(false)

  useEffect(() => {
    if (isVisibleMobile) {
      document.querySelector('body').classList.add('overflow-hidden')
    } else {
      document.querySelector('body').classList.remove('overflow-hidden')
    }
  }, [isVisibleMobile])

  return (
    <>
      <header className='flex flex-wrap items-center justify-center md:px-[90px] sm:px-[56px] px-8 xl:pl-[190px] xl:pr-[157px] pt-[10px] pb-2 bg-white text-gray-600 h-14 md:h-14 overflow-hidden'>
        <div className='container mx-auto' style={{ maxWidth: '1535px' }}>
          <div className='flex flex-wrap items-center md:items-start justify-between w-full'>
            {/* Left side */}
            <div className='flex items-center space-x-2'>
              <Image src={Logo} alt='Coingrap' className='w-[100px] sm:w-[135px] mt-[3px]' />
            </div>

            {/* Center */}
            <div className='flex items-center mt-[8px] xl:ml-[62px] text-gray-600 header-hide'>
              <a href='#' className='font-semibold link text-base'>
                Cryptocurrencies
              </a>
              <a href='#' className='font-semibold link text-base ml-[12px] lg:ml-[29px]'>
                Exchanges
              </a>
            </div>

            {/* Right side */}
            <div className='flex items-start space-x-3 lg:space-x-6'>
              <Image
                src={NotificationImg}
                alt='Notification'
                width={24}
                height={24}
                className='mt-[5px] header-hide'
              />

              <Image
                src={SettingsImg}
                alt='Settings'
                width={24}
                height={24}
                className='mt-[5px] header-hide'
              />

              <ToggleThemeButton />
              <div className='relative w-[144px] xl:w-[216px] hidden sm:block'>
                <input
                  type='search'
                  placeholder='Search'
                  className='search-input p-1 rounded-md w-full pl-10'
                />
                <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    fill='none'
                    viewBox='0 0 18 18'>
                    <g clipPath='url(#a)'>
                      <path
                        fill='#9A9AAF'
                        d='m13.523 12.463 3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 0 1 8.25 15 6.752 6.752 0 0 1 1.5 8.25 6.752 6.752 0 0 1 8.25 1.5 6.752 6.752 0 0 1 15 8.25a6.72 6.72 0 0 1-1.477 4.213Zm-1.504-.557A5.233 5.233 0 0 0 13.5 8.25C13.5 5.349 11.15 3 8.25 3A5.248 5.248 0 0 0 3 8.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 0 0 3.656-1.481l.113-.113Z'
                      />
                    </g>
                    <defs>
                      <clipPath id='a'>
                        <path fill='#fff' d='M0 0h18v18H0z' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div
                className='flex flex-col gap-[7px] mt-[3px] cursor-pointer p-2 rounded-md transition duration-100 hover:shadow-md mobile-menu-hide'
                onClick={() => setIsVisibleMobile(true)}>
                <span className='w-6 h-[3px] bg-iris'></span>
                <span className='w-6 h-[3px] bg-iris'></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed w-full h-[100vh] bg-white z-30 top-0 right-0 p-5 transition-all duration-150',
          {
            ['translate-x-full']: !isVisibleMobile,
          },
        )}>
        <div
          onClick={() => setIsVisibleMobile(false)}
          className='absolute top-4 right-4 flex flex-col gap-[7px] bg-white cursor-pointer p-[2px] rounded-md transition-all duration-100 hover:shadow-md'>
          <Image
            src={PlusIcon}
            alt='Plus Icon'
            width={32}
            height={32}
            className='group-hover:scale-[1.3] transition-all duration-100 rotate-45'
          />
        </div>

        <div className='flex flex-col'>
          <div className='flex space-x-3 mb-6'>
            <Image
              src={NotificationImg}
              alt='Notification'
              width={32}
              height={32}
              className='mt-[5px]'
            />

            <Image src={SettingsImg} alt='Settings' width={32} height={32} className='mt-[5px]' />
          </div>

          <div className='relative w-full'>
            <input
              type='search'
              placeholder='Search'
              className='search-input px-1 py-3 rounded-md w-full pl-10'
            />
            <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                fill='none'
                viewBox='0 0 18 18'>
                <g clipPath='url(#a)'>
                  <path
                    fill='#9A9AAF'
                    d='m13.523 12.463 3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 0 1 8.25 15 6.752 6.752 0 0 1 1.5 8.25 6.752 6.752 0 0 1 8.25 1.5 6.752 6.752 0 0 1 15 8.25a6.72 6.72 0 0 1-1.477 4.213Zm-1.504-.557A5.233 5.233 0 0 0 13.5 8.25C13.5 5.349 11.15 3 8.25 3A5.248 5.248 0 0 0 3 8.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 0 0 3.656-1.481l.113-.113Z'
                  />
                </g>
                <defs>
                  <clipPath id='a'>
                    <path fill='#fff' d='M0 0h18v18H0z' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-6 xl:ml-[62px] text-gray-600'>
          <a
            href='#'
            className='font-semibold link text-lg py-3 mb-2 border-b border-grey-100 hover:border-iris transition duration-150'>
            Cryptocurrencies
          </a>
          <a
            href='#'
            className='font-semibold link text-lg py-3 border-b border-grey-100 hover:border-iris transition duration-150'>
            Exchanges
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
