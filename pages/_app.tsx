import '../styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { isFunction } from 'lodash'
import { DefaultLayout } from '@/layouts/DefaultLayout'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout
  if (isFunction(getLayout)) {
    return getLayout(<Component {...pageProps} />)
  }

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
