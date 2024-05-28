import Image from 'next/image'
import Button from '../components/Button'
import Meta from '../components/Meta'
import Layout from '../components/Meta/Layout'
import CryptocurrencyCard from '../components/CryptocurrencyCard'
import Table from '../components/Table'

import PlusIcon from '../public/images/icons/PlusIcon.svg'
import ArrowDownIcon from '../public/images/icons/ArrowDownIcon.svg'
import FilterIcon from '../public/images/icons/FilterIcon.svg'

export default function Home() {
  return (
    <>
      <Meta title='Home - Coingraph' />
      <Layout>
        <div className='bg-grey-50 relative -z-0 overflow-hidden'>
          <div className='bg-hero-gradient-1'></div>
          <div className='bg-hero-gradient-2'></div>

          <div className='md:px-[90px] sm:px-[56px] px-8 xl:pl-[190px] xl:pr-[157px]'>
            <div className='max-w-[1535px] mx-auto pt-[36px] pb-[55px]'>
              <div className='flex items-center'>
                <h1 className='text-[28px] sm:text-[40px] text-gunmetal font-bold leading-[60px] flex'>
                  Overview
                </h1>
                <Button className='ml-6 mt-[8px] sm:mt-[11px]'>
                  <Image
                    src={PlusIcon}
                    alt='Plus Icon'
                    className='mr-3 group-hover:scale-[1.3] transition-all duration-100'
                  />
                  <p className='text-[14px] sm:text-[16px] leading-[18px] font-semibold sm:font-bold text-iris'>
                    Hide
                  </p>
                </Button>
              </div>

              <div className='flex flex-col items-center'>
                <div className='flex justify-center flex-wrap gap-6 mt-6 cards-container w-full'>
                  <CryptocurrencyCard currency='Bitcoin' value='38,864' />
                  <CryptocurrencyCard currency='ETH' value='38,864' />
                  <CryptocurrencyCard currency='LTC' value='38,864' />
                </div>

                <div className='mt-[40px] sm:pl-6 md:pl-0 w-full flex justify-between flex-wrap gap-4 md:gap-0 currency-info'>
                  <div className='md:w-auto w-[45%] flex flex-col items-center md:items-start'>
                    <p className='mb-2 font-bold leading-4 text-grey-600'>Dominance</p>
                    <p className='text-base sm:text-lg md:text-[22px] leading-[35px] font-bold text-grey-600 text-center md:text-left'>
                      BTC: 47.2% ETH: 18.8%
                    </p>
                  </div>

                  <div className='md:w-auto w-[45%] flex flex-col items-center md:items-start'>
                    <p className='mb-2 font-bold leading-4 text-grey-600'>ETH Gas</p>
                    <p className='text-base sm:text-lg md:text-[22px] leading-[35px] font-bold text-grey-600 text-center md:text-left'>
                      34 Gwei
                      <span className='text-sm sm:text-base text-alizarin leading-7 ml-[10px]'>
                        ↓2.5%
                      </span>
                    </p>
                  </div>

                  <div className='md:w-auto w-[45%] flex flex-col items-center md:items-start'>
                    <p className='mb-2 font-bold leading-4 text-grey-600'>Cryptos</p>
                    <p className='text-base sm:text-lg md:text-[22px] leading-[35px] font-bold text-grey-600 text-center md:text-left'>
                      23 345
                    </p>
                  </div>

                  <div className='md:w-auto w-[45%] flex flex-col items-center md:items-start'>
                    <p className='mb-2 font-bold leading-4 text-grey-600'>Exchanges</p>
                    <p className='text-base sm:text-lg md:text-[22px] leading-[35px] font-bold text-grey-600 text-center md:text-left'>
                      611
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='md:px-[106px] sm:px-[66px] px-8 xl:pl-[224px] xl:pr-[157px] pb-[18px] border-b border-grey-100'>
            <div className='max-w-[1535px] mx-auto'>
              <div className='flex items-end'>
                <h2 className='text-[40px] leading-[40px] text-gunmetal font-bold'>Watchlist</h2>
                <div className='text-xs leading-[18px] text-iris px-2 py-[2px] rounded-2xl bg-light-purple font-medium mb-1 ml-[10px] cursor-pointer hover:bg-iris hover:text-light-purple transition duration-150'>
                  Edit
                </div>
              </div>
            </div>
          </div>

          <div className='md:px-[106px] sm:px-[66px] px-8 xl:pl-[224px] xl:pr-[157px]'>
            <div className='max-w-[1535px] mx-auto py-[30px]'>
              <div className='flex  md:items-center flex-col-reverse md:flex-row justify-between'>
                <div className='flex flex-col xl:flex-row md:items-center'>
                  <h3 className='text-base md:text-[20px] leading-[18px] xl:mb-0 font-semibold text-gunmetal'>
                    Categories
                  </h3>

                  <div className='flex gap-[10px] xl:ml-[15px] flex-wrap categories-hide'>
                    <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                      <span className='w-[6px] h-[6px] rounded-full bg-azure mr-2'></span>
                      <p className='text-sm leading-4 text-gunmetal'>Cryptocurrencies</p>
                    </div>

                    <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                      <span className='w-[6px] h-[6px] rounded-full bg-aqua mr-2'></span>
                      <p className='text-sm leading-4 text-gunmetal'>DEFI</p>
                    </div>

                    <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                      <span className='w-[6px] h-[6px] rounded-full bg-verdepom mr-2'></span>
                      <p className='text-sm leading-4 text-gunmetal'>NTF</p>
                    </div>

                    <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                      <span className='w-[6px] h-[6px] rounded-full bg-orange mr-2'></span>
                      <p className='text-sm leading-4 text-gunmetal'>Metaverse</p>
                    </div>

                    <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                      <span className='w-[6px] h-[6px] rounded-full bg-verdepom mr-2'></span>
                      <p className='text-sm leading-4 text-gunmetal'>Polkadot</p>
                    </div>

                    <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                      <span className='w-[6px] h-[6px] rounded-full bg-iris mr-2'></span>
                      <p className='text-sm leading-4 text-gunmetal'>Solana</p>
                    </div>
                  </div>
                </div>

                <div className='md:flex hidden'>
                  <div className='flex items-center min-w-[143px] py-[9px] pr-[15px] pl-[35px] text-base leading-4 font-bold bg-white rounded-xl hover:shadow-xl transition duration-150 cursor-pointer'>
                    Popular
                    <Image src={ArrowDownIcon} alt='Arrow Down Icon' className='ml-4' />
                  </div>

                  <div className='ml-2 p-[9px] min min-w-[36px] min-h-[36px] rounded-md bg-white hover:shadow-xl transition duration-150 cursor-pointer'>
                    <Image src={FilterIcon} alt='Filter Icon' />
                  </div>
                </div>
              </div>

              <div className='gap-[10px] mt-3 flex-wrap categories-visible hidden'>
                <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                  <span className='w-[6px] h-[6px] rounded-full bg-azure mr-2'></span>
                  <p className='text-sm leading-4 text-gunmetal'>Cryptocurrencies</p>
                </div>

                <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                  <span className='w-[6px] h-[6px] rounded-full bg-aqua mr-2'></span>
                  <p className='text-sm leading-4 text-gunmetal'>DEFI</p>
                </div>

                <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                  <span className='w-[6px] h-[6px] rounded-full bg-verdepom mr-2'></span>
                  <p className='text-sm leading-4 text-gunmetal'>NTF</p>
                </div>

                <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                  <span className='w-[6px] h-[6px] rounded-full bg-orange mr-2'></span>
                  <p className='text-sm leading-4 text-gunmetal'>Metaverse</p>
                </div>

                <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                  <span className='w-[6px] h-[6px] rounded-full bg-verdepom mr-2'></span>
                  <p className='text-sm leading-4 text-gunmetal'>Polkadot</p>
                </div>

                <div className='py-[10px] px-4 flex justify-center items-center bg-white rounded-full cursor-pointer hover:shadow-xl transition duration-150'>
                  <span className='w-[6px] h-[6px] rounded-full bg-iris mr-2'></span>
                  <p className='text-sm leading-4 text-gunmetal'>Solana</p>
                </div>
              </div>

              <div className='md:hidden flex mt-5'>
                <div className='flex items-center min-w-[143px] py-[9px] pr-[15px] pl-[35px] text-base leading-4 font-bold bg-white rounded-xl hover:shadow-xl transition duration-150 cursor-pointer'>
                  Popular
                  <Image src={ArrowDownIcon} alt='Arrow Down Icon' className='ml-4' />
                </div>

                <div className='ml-2 p-[9px] min min-w-[36px] min-h-[36px] rounded-md bg-white hover:shadow-xl transition duration-150 cursor-pointer'>
                  <Image src={FilterIcon} alt='Filter Icon' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='md:px-[106px] sm:px-[66px] xl:pl-[224px] xl:pr-[157px]'>
          <div className='max-w-[1535px] mx-auto'>
            <Table />
          </div>
        </div>
      </Layout>
    </>
  )
}
