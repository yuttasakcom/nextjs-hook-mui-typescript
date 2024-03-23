import type { AppProps } from "next/app";
import CssBaseline from '@mui/material/CssBaseline'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'


export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <AppCacheProvider {...props}>
      <Head>
        <title>NextJS</title>
      </Head>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{ showSpinner: false }}
      />
      <CssBaseline />
      <Component {...pageProps} />
    </AppCacheProvider >
  )
}
