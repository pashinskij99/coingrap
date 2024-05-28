import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className='md:px-[90px] sm:px-[56px] px-8 xl:pl-[190px] xl:pr-[157px] py-5 flex flex-col-reverse lg:gap-0 gap-4 lg:flex-row justify-between items-center bg-grey-50'>
      <div className='flex gap-5 sm:gap-[10px] flex-col sm:flex-row items-center'>
        <p className='text-sm hover:text-iris cursor-pointer'>About Coingraph</p>
        <p className='text-sm text-grey-200'>© 2023 Coingraph. All rights reserved.</p>
      </div>

      <ul className='flex text-sm gap-5 flex-wrap sm:flex-nowrap items-center'>
        <li className='hover:text-iris cursor-pointer w-[44%] sm:w-auto text-center sm:text-left'>
          Privacy Policy
        </li>
        <li className='hover:text-iris cursor-pointer w-[44%] sm:w-auto text-center sm:text-left'>
          Terms of use
        </li>
        <li className='hover:text-iris cursor-pointer w-[44%] sm:w-auto text-center sm:text-left'>
          Cookies
        </li>
        <li className='hover:text-iris cursor-pointer w-[44%] sm:w-auto text-center sm:text-left'>
          Contact Us
        </li>
      </ul>
    </footer>
  )
}

export default Footer
