import React, { Fragment } from 'react'
import { NextComponentType } from 'next'

export const Button: React.FC<React.PropsWithChildren<
  React.ButtonHTMLAttributes<any>
>> = (props) => {
  return (
    <Fragment>
      <button className={'vt-btn vt-btn-primary'} {...props}>
        {props.children}
      </button>
    </Fragment>
  )
}
