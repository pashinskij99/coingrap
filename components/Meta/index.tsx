import Head from 'next/head'
import { FC } from 'react'

interface IProps {
  title: string
}

const Meta: FC<IProps> = ({ title = 'Home - Coingraph' }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default Meta
