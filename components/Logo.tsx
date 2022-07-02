import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import style from './logo.module.scss'

export interface LogoProps {
  clickable?: boolean
}

export const Logo: FC<LogoProps> = props => {
  const { clickable = true } = props

  const _Logo = (
    <div className={clickable ? style.clickable : ''}>Next event</div>
  )

  if (clickable) {
    return <Link href={'/'}>{_Logo}</Link>
  }
  return _Logo
}
