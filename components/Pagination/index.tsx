import cn from 'classnames'

import { DOTS, usePagination } from './usePagination'

import ArrowDownIcon from '../../public/images/icons/ArrowDownTableIcon.svg'
import Image from 'next/image'

const Pagination = ({ handlePage, page, total, pageSize }) => {
  const paginationRange = usePagination({
    currentPage: page,
    totalCount: total,
    siblingCount: 1,
    pageSize,
  })

  if (page === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    handlePage(page + 1)
  }

  const onPrevious = () => {
    handlePage(page - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className='flex justify-center items-center mt-3 mb-4 gap-1 md:px-8'>
      <li
        className={cn('mr-3', {
          ['pointer-events-none']: page === 1,
        })}
        onClick={onPrevious}>
        <button className='py-2 sm:px-[14px] px-2 flex justify-center items-center border border-grey-100 rounded-lg group hover:shadow-md hover:border-iris transition duration-200 text-gunmetal font-medium'>
          <Image
            src={ArrowDownIcon}
            alt='Arrow icon'
            className='rotate-90 md:mr-2 min-w-[16px] min-h-[16px]'
            width={16}
            height={16}
          />
          <span className='hidden md:block'>Previous</span>
        </button>
      </li>
      <li>
        <ul className='flex justify-center items-center gap-1'>
          {paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <li
                  key={Math.random()}
                  className='h-6 sm:h-10 w-6 sm:w-10 flex items-center justify-center cursor-pointer text-table font-medium text-sm'>
                  &#8230;
                </li>
              )
            }

            return (
              <li
                key={pageNumber}
                className={cn(
                  'h-6 sm:h-10 w-6 sm:w-10 flex items-center transition-all justify-center cursor-pointer text-table hover:text-iris hover:bg-lightiris font-medium text-sm rounded-lg',
                  {
                    ['text-iris bg-lightiris']: pageNumber === page,
                    ['border-transparent']: pageNumber !== page,
                  },
                )}
                onClick={() => handlePage(pageNumber)}>
                {pageNumber}
              </li>
            )
          })}
        </ul>
      </li>
      <li
        onClick={onNext}
        className={cn('ml-3', {
          ['pointer-events-none']: page === lastPage,
        })}>
        <button className='py-2 sm:px-[14px] px-2 flex justify-center items-center border border-grey-100 rounded-lg group hover:shadow-md hover:border-iris transition duration-200 text-gunmetal font-medium'>
          <span className='hidden md:block'>Next</span>
          <Image
            src={ArrowDownIcon}
            alt='Arrow icon'
            className='-rotate-90 md:ml-2 md:mr-2 min-w-[16px] min-h-[16px]'
            width={16}
            height={16}
          />
        </button>
      </li>
    </ul>
  )
}

export default Pagination
