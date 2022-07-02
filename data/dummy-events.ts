import { EventItem } from '@/typings/event'
import Mock from 'mockjs'

// eslint-disable-next-line no-unused-vars
const arrayGen = <Fn extends (...args: any[]) => any>(
  template: Fn,
  count: number = 1,
): ReturnType<Fn>[] => {
  const res: ReturnType<Fn>[] = Array(count)
  for (let i = 0; i < count; i++) res.push(template())

  return res
}

const { Random } = Mock

export const dummyEvents: EventItem[] = arrayGen(
  () => ({
    id: Random.guid(),
    date: Random.date('YYYY-MM-DD'),
    description: Random.cparagraph(20, 50),
    image: Random.image('200x100', Random.color(), Random.color(), 'Mock.js'),
    location: Random.city(),
    title: Random.ctitle(4),
  }),
  10,
)
