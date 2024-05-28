import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/images/coingrap.svg';

const Maintenance = () => {
  return (
    <>
      <Head>
        <meta http-equiv='Content-type' content='text/html;charset=UTF-8' />
        <title>CoinGrap</title>
      </Head>
      <div className='flex justify-center items-start min-h-screen bg-gradient pt-4 md:pt-8 lg:pt-16'>
        <div className='text-center max-w-lg pt-8 sm:pt-12 md:pt-16'>
          <Image src={Logo} alt='CoinGrap' width={300} height={300} className='mx-auto mb-6 w-40 sm:w-60 md:w-80' />
          <h1 className='text-2xl sm:text-3xl md:text-4xl mb-6 readable-text'>
            {' '}
            website is currently down for maintenance.
          </h1>
          <div>
            <p className='text-lg sm:text-xl md:text-2xl mb-4 readable-text'>
              We apologize for the inconvenience, but we&apos;re performing some maintenance.
              <a className='text-white font-medium'> We&apos;ll be back up soon!</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
