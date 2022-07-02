import { ComponentProps, FC, PropsWithChildren } from 'react'
import { Animate } from 'react-simple-animate'

interface BaseProps extends ComponentProps<typeof Animate> {
  play?: boolean
}

export interface FadeProps extends BaseProps {}

export const Fade: FC<PropsWithChildren<FadeProps>> = props => {
  const { children, play, ...rest } = props
  return (
    <Animate play={play} start={{ opacity: 0 }} end={{ opacity: 1 }} {...rest}>
      {children}
    </Animate>
  )
}
