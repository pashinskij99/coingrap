import Image from 'next/image'
import cn from 'classnames'

import ArrowDownIcon from '../../public/images/icons/ArrowDownTableIcon.svg'
import HelpIcon from '../../public/images/icons/HelpIcon.svg'
import { MockDataObjectType, mockData } from './mockData'
import { useState } from 'react'
import Pagination from '../Pagination'

const mainNetWorthFormat = (num: string) => {
  const formattedString = num.toString().split('.')[0].split('')
  for (let i = formattedString.length; i > 0; i -= 3) {
    formattedString.splice(i, 0, ',')
  }
  formattedString.splice(formattedString.length - 1, 1)
  return formattedString.join('') + (num.split('.')[1] ? '.' + num.split('.')[1] : '')
}

const sortData = (data: MockDataObjectType[], sortByField: string) => {
  switch (sortByField) {
    case 'name':
      return [...data].sort((a, b) => a.name.full.localeCompare(b.name.full))
    case 'price':
      return [...data].sort((a, b) => +b.price - +a.price)
    default:
      return [...data]
  }
}

const Table = () => {
  const [sortField, setSortField] = useState('')
  const [page, setPage] = useState(1)

  const header = [
    {
      id: 'number',
      width: 3,
      sorting: false,
      render: () => <div>#</div>,
      renderCell: (rowData: MockDataObjectType) => <div>{rowData.id}</div>,
    },

    {
      id: 'name',
      width: 7,
      render: (id: string) => (
        <div className='flex justify-center'>
          Name
          <Image
            src={ArrowDownIcon}
            alt='Arrow down icon'
            className={cn('ml-1', {
              ['rotate-180']: id === sortField,
            })}
          />
        </div>
      ),
      renderCell: (rowData: MockDataObjectType) => (
        <div className='flex '>
          <Image
            src={rowData.icon}
            alt={rowData.name.full + ' icon'}
            width={34}
            height={32}
            className='mr-5'
          />
          <div>
            <p>{rowData.name.full}</p>
            <p className='text-table text-left'>@{rowData.name.abbr}</p>
          </div>
        </div>
      ),
      cellStyle: 'sticky left-0 px-2',
    },

    {
      id: 'price',
      width: 10,
      render: (id: string) => (
        <div className='flex justify-center'>
          Price
          <Image
            src={ArrowDownIcon}
            alt='Arrow down icon'
            className={cn('ml-1', {
              ['rotate-180']: id === sortField,
            })}
          />
        </div>
      ),

      renderCell: ({ price }: MockDataObjectType) => <div>${mainNetWorthFormat(price)}</div>,
    },

    {
      id: 'dayChange',
      width: 4,
      render: (id: string) => (
        <div className='flex justify-center'>
          24%
          <Image
            src={ArrowDownIcon}
            alt='Arrow down icon'
            className={cn('ml-1', {
              ['rotate-180']: id === sortField,
            })}
          />
          <Image src={HelpIcon} alt='Help icon' className='ml-1' />
        </div>
      ),
      renderCell: ({ dayChange }: MockDataObjectType) => (
        <div className={Number(dayChange.split('%')[0]) < 0 ? 'text-red' : 'text-green'}>
          {dayChange.includes('-') ? dayChange.split('-')[1] : dayChange}
        </div>
      ),
    },

    {
      id: 'marketcap',
      width: 12,
      render: (id: string) => (
        <div className='flex justify-center'>
          Marketcap
          <Image
            src={ArrowDownIcon}
            alt='Arrow down icon'
            className={cn('ml-1', {
              ['rotate-180']: id === sortField,
            })}
          />
        </div>
      ),
      renderCell: ({ marketcap }: MockDataObjectType) => (
        <div>${mainNetWorthFormat(marketcap)}</div>
      ),
    },

    {
      id: 'volume',
      width: 12,
      render: (id: string) => (
        <div className='flex justify-start'>
          Volume (24h)
          <Image
            src={ArrowDownIcon}
            alt='Arrow down icon'
            className={cn('ml-1', {
              ['rotate-180']: id === sortField,
            })}
          />
        </div>
      ),
      renderCell: ({ volume, name }: MockDataObjectType) => (
        <div>
          <p className='text-left'>${mainNetWorthFormat(volume.inDollars)}</p>
          <p className='text-table text-left'>
            {volume.inCurrency} {name.abbr}
          </p>
        </div>
      ),
    },

    {
      id: 'circulatingSupply',
      width: 10,
      render: (id: string) => (
        <div className='flex justify-start'>
          Circulating Supply
          <Image
            src={ArrowDownIcon}
            alt='Arrow down icon'
            className={cn('ml-1', {
              ['rotate-180']: id === sortField,
            })}
          />
        </div>
      ),
      renderCell: ({ circulatingSupply, name }: MockDataObjectType) => (
        <div className='text-left'>
          {mainNetWorthFormat(circulatingSupply)} {name.abbr}
        </div>
      ),
    },
  ]

  const onClickTableHead = (isSorting: boolean, field: string) => {
    if (isSorting && field !== sortField) setSortField(field)
    if (field === sortField) setSortField('')
  }

  return (
    <>
      <div className='overflow-x-auto'>
        <table className='min-w-[900px] w-full border-separate border-spacing-0'>
          <thead>
            <tr className='bg-light border-b border-border'>
              {header.map(({ id, width, render, cellStyle, sorting = true }) => (
                <th
                  key={id}
                  onClick={() => onClickTableHead(sorting, id)}
                  style={{ width: width ? `${width}%` : 'auto' }}
                  className={cn(
                    'py-[13px] text-xs text-table font-medium bg-light leading-[18px]',
                    {
                      ['cursor-pointer']: sorting,
                      [cellStyle]: cellStyle,
                    },
                  )}>
                  {render(id)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortData(mockData, sortField).map((item) => (
              <tr key={item.id}>
                {header.map((field) => (
                  <td
                    key={field.id}
                    className={cn('text-center py-4 text-sm bg-white border-b border-border', {
                      [field.cellStyle]: field.cellStyle,
                    })}>
                    {field.renderCell(item)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination page={page} handlePage={(p: number) => setPage(p)} total={100} pageSize={10} />
    </>
  )
}

export default Table
