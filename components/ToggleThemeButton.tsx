import React, { useEffect, useLayoutEffect, useState } from 'react'
import cn from 'classnames'
import SwitchIcon from '../public/images/switches/switch.png'
import SwitchDarkDecoration from '../public/images/switches/switch-dark-decoration.png'
import Image from 'next/image'

const ToggleThemeButton: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useLayoutEffect(() => {
    const storedIsDarkMode = localStorage.getItem('isDarkmode')
    if (storedIsDarkMode) {
      setIsDarkMode(JSON.parse(storedIsDarkMode))
    }

    if (typeof window !== 'undefined') {
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isDarkmode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      {isLoaded ? (
        <button
          className={cn(
            'w-14 h-6 mt-[5px] rounded-full bg-switch-gradient-light flex items-center transition duration-300 focus:outline-none shadow',
            {
              ['bg-switch-gradient-dark']: isDarkMode,
            },
          )}
          onClick={toggleTheme}>
          <div
            className={`w-5 h-5 rounded-full p-1 transition relative overflow-hidden duration-500 transform ${
              !isDarkMode
                ? 'switch-color-light -translate-x-[-2px]'
                : 'switch-color-dark translate-x-[34px]'
            }`}>
            {!isDarkMode ? (
              <Image src={SwitchIcon} alt='Light switch decoration' className='switch-decoration' />
            ) : (
              <div className='switch-decoration-dark'>
                <Image src={SwitchDarkDecoration} alt='Dark switch decoration' />
              </div>
            )}
          </div>
        </button>
      ) : null}
    </>
  )
}

export default ToggleThemeButton
