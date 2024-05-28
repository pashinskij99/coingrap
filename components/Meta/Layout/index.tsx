import { FC } from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

const Layout: FC = ({ children }) => {
  return (
    <main className='flex flex-col min-h-[100vh]'>
      <Header />
      <div className='grow'>{children}</div>
      <Footer />
    </main>
  )
}

export default Layout
