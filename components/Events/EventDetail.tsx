import { EventItem } from '@/typings/event'
import { Row } from 'antd'
import { FC, Fragment } from 'react'
import { Paragraph, Title, Text } from '../Typography'
import { commonStyle } from '@/styles'

export const EventDetail: FC<EventItem> = props => {
  const { title, description, date, location, image } = props
  return (
    <Fragment>
      <Title level={1}>{title}</Title>
      <Paragraph>{description}</Paragraph>

      <Row align={'middle'} justify={'space-between'}>
        <time>DATE</time>
        <Text>{date}</Text>
      </Row>

      <Row align={'middle'} justify={'space-between'}>
        <address className={commonStyle['vt-mb-0']}>ADDRESS</address>
        <Text>{location}</Text>
      </Row>
    </Fragment>
  )
}
