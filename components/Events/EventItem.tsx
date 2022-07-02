import { EventItem as _EventItem } from '@/typings/event'
import { Card, Col, Row } from 'antd'
import Image from 'next/image'
import style from './event.module.scss'
import commonStyle from '../../styles/common.module.scss'

import { FC } from 'react'
import { Paragraph, Text, Title } from '../Typography'
import Link from 'next/link'
import { logger } from '@/shared'
import { Link as ALink } from '@/components/Typography'

// console.log(commonStyle)

export const EventItem: FC<_EventItem> = props => {
  // logger.log('logger...')
  const { id, title, description, image, date, location } = props
  return (
    <Link
      href={{
        pathname: '/events/[eventId]',
        query: {
          eventId: id,
        },
      }}
    >
      <Card
        hoverable
        cover={
          <Image
            src={image}
            alt={title}
            layout={'responsive'}
            width={'100%'}
            height={'40px'}
          />
        }
      >
        <Title level={1}>{title}</Title>
        <Paragraph title={description} className={style.text}>
          {description}
        </Paragraph>

        <Row align={'middle'} justify={'space-between'}>
          <time>DATE</time>
          <Text>{date}</Text>
        </Row>

        <Row align={'middle'} justify={'space-between'}>
          <address className={commonStyle['vt-m-0']}>ADDRESS</address>
          <Text>{location}</Text>
        </Row>
        <Row align={'middle'} justify={'end'}>
          <ALink>Explore more</ALink>
        </Row>
      </Card>
    </Link>
  )
}
