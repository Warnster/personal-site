import  './globals.css';
import * as React from 'react'
import Head from 'next/head'
import { Navbar } from '@/components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
