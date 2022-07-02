import { Button, Form, Input, Radio, Row, Select } from 'antd'
import React, { FC, useState } from 'react'
import style from './event-search.module.scss'

type LayoutType = Parameters<typeof Form>[0]['layout']

const { Option } = Select

export interface EventSearchProps {
  onSubmit?(formData: { year: string; month: string }): any
}

export const EventSearch: FC<EventSearchProps> = props => {
  const [formLayout, setFormLayout] = useState<LayoutType>('inline')
  const [form] = Form.useForm()
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  }

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const handleFinish = values => {
    props.onSubmit(values)
  }

  return (
    <Row className={style.container} justify={'end'}>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        onFinish={handleFinish}
        initialValues={{ layout: formLayout }}
      >
        <Form.Item initialValue={2021} label='Year' name={'year'}>
          <Select style={{ width: '120px' }}>
            <Option value={2021}>2021</Option>
            <Option value={2022}>2022</Option>
          </Select>
        </Form.Item>

        <Form.Item initialValue={1} label='Month' name={'month'}>
          <Select style={{ width: '120px' }}>
            {months.map(m => (
              <Option key={m} value={m}>
                {m}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button htmlType={'submit'} type='primary'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Row>
  )
}
