import '../styles/globals.css'
import 'antd/dist/antd.css'
import '@fortawesome/fontawesome-free/css/all.css'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Layout from '@/components/Layout'
import Script from 'next/script';

let persistor = persistStore(store)

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <Script strategy="afterInteractive"   src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTIC_ID}`}/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GOOGLE_ANALYTIC_ID}');
        `,
        }}
    />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
    </>
  )
}

export default MyApp
