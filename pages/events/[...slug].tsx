import { Title } from '@/components/Typography'
import { Fade } from '@/components/UI/Transition'
import { Button } from 'antd'
import { useState } from 'react'
import { Animate } from 'react-simple-animate'

const FilteredEvents = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Title level={1}></Title>
      <Fade play={visible}>
        <h1>hello</h1>
      </Fade>
      <Button onClick={() => setVisible(v => !v)}>toggle</Button>
    </div>
  )
}

export default FilteredEvents
