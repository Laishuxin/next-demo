import { Button } from 'antd'
import { dummyEvents } from '@/data/index'
import { useState } from 'react'
import { Title, Paragraph, Text } from '@/components/Typography'
import { Image } from 'antd'

const AllEventPage = () => {
  const [showData, setShowData] = useState(false)

  // console.log('dummyEvents: ', dummyEvents)
  const onClick = () => {
    setShowData(true)
  }
  return (
    <div>
      <h1>All events</h1>
      <Button onClick={onClick}>button</Button>

      {showData
        ? dummyEvents.map((event) => (
            <li key={event.id}>
              <Title level={1}>{event.title}</Title>
              <Paragraph>{event.description}</Paragraph>
              <Image preview={false} alt={event.title} src={event.image} />
            </li>
          ))
        : null}
    </div>
  )
}

export default AllEventPage
