import { ProductApi } from '@/api'
import { useEffect, useState } from 'react'

const Demo = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data)
      })
  }, [])

  return (
    <div>
      <h1>data</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default Demo
