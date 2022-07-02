import { EventList } from '@/components/Events/EventList'
import { filterEvents } from '@/data'
import { useRouter } from 'next/router'

const FilteredEvents = () => {
  const { query } = useRouter()
  const [year, month] = query.slug as string[]
  const events = filterEvents({ year, month })

  return (
    <div>
      <EventList items={events}></EventList>
    </div>
  )
}

export default FilteredEvents
