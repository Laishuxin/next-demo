import { FC, PropsWithChildren } from 'react'
import style from './main.module.scss'

export const Main: FC<PropsWithChildren<{}>> = props => {
  return <main className={style.container}>{props.children}</main>
}
