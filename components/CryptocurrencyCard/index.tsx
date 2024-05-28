import React, { FC } from 'react'

interface IProps {
  currency: string
  value: string
}

const CryptocurrencyCard: FC<IProps> = ({ currency, value }) => {
  return (
    <div className='w-[346px] h-[220px] sm:h-[280px] rounded-[20px] bg-card p-6 relative currency-card'>
      <div className='flex items-center'>
        <div className='w-9 h-9 rounded-md border border-white'></div>
        <p className='text-[18px] text-white ml-[10px]'>{currency}</p>
      </div>
      <p className='text-4xl text-white font-bold absolute top-1/2 left-6 -translate-y-1/2'>
        {value}
      </p>
    </div>
  )
}

export default CryptocurrencyCard
