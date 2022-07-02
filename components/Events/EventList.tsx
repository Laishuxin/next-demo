import { List, Card, Row } from 'antd'
import { EventItem as _EventItem } from '@/typings/event'
import { FC } from 'react'
import { EventItem } from './EventItem'

interface Props {
  items: _EventItem[]
}

export const EventList: FC<Props> = props => {
  // console.log('items: ', props.items)
  return (
    <div
      style={{
        padding: '0 48px',
      }}
    >
      <List
        grid={{ gutter: 48, column: 4 }}
        dataSource={props.items}
        rowKey={item => item.id}
        renderItem={item => (
          <List.Item>
            <EventItem {...item} />
          </List.Item>
        )}
      />
    </div>
  )
}
