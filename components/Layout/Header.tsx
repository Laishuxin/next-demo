import { Col, Menu, Row } from 'antd'
import Link from 'next/link'
import { Logo } from '../Logo'
import { Text } from '../Typography'
import style from './header.module.scss'
import { commonStyle } from '@/styles'

const items = [
  { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
  { label: '菜单项二', key: 'item-2' },
  {
    label: '子菜单',
    key: 'submenu',
    children: [{ label: '子菜单项', key: 'submenu-item-1' }],
  },
]

export const Header = () => {
  return (
    <header className={style.header}>
      <Row className={style.row} justify={'space-between'}>
        <Logo />
        <Link href={'/events'}>
          <Text className={commonStyle['vt-clickable']}>
            Browser all events
          </Text>
        </Link>
      </Row>
    </header>
  )
}
