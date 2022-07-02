import { Header, Main, Footer } from '@/components/Layout'
import { FC, PropsWithChildren } from 'react'
import style from './default-layout.module.scss'

export const DefaultLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={style.container}>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </div>
  )
}
