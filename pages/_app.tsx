import  './globals.css';
import * as React from 'react'
import Head from 'next/head'
import { Navbar } from '@/components/navbar';
import { AppProps } from 'next/app';

interface CustomPageProps {}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
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
