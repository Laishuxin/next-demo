import { dummyEvents } from '@/data/index'
import { EventList } from '@/components/Events/EventList'
import { Fragment } from 'react'
import { EventSearch, EventSearchProps } from '@/components/Events/EventSearch'
import { useRouter } from 'next/router'

const AllEventPage = () => {
  // console.log('dummyEvents: ', dummyEvents)

  const { push } = useRouter()

  const handleSubmit: EventSearchProps['onSubmit'] = ({ year, month }) => {
    push({
      pathname: `/events/${year}/${month}`,
    })
  }
  return (
    <Fragment>
      <EventSearch onSubmit={handleSubmit} />
      <EventList items={dummyEvents} />
    </Fragment>
  )
}

export default AllEventPage
