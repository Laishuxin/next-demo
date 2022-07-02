import classNames from 'classnames'
import { NextPage } from 'next'
import Link from 'next/link'
import style from '../styles/404.module.scss'

const NotFoundPage: NextPage = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>404 Not found</h1>
        <Link href={'/'}>
          <button className={style.button}>Back home</button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
