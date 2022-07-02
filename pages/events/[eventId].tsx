import { EventDetail } from '@/components/Events/EventDetail'
import { findEventById } from '@/data'
import { useRouter } from 'next/router'

const EventDetailPage = () => {
  const { query } = useRouter()
  const eventId = query.eventId as string
  const eventItem = findEventById(eventId)
  if (!eventItem) {
    return <div>Event not found</div>
  }

  return <EventDetail {...eventItem}></EventDetail>
}
export default EventDetailPage
