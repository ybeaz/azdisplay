import React from 'react'

interface Props {
  readonly classStyle: string,
  readonly children?: any,
}

const defaultProps: any = {
}

export const CombineWrapper: React.SFC<Props> = (props: Props): JSX.Element => {
  const propsPrivate: Props = { ...defaultProps, ...props }
  const { classStyle, children } = propsPrivate

  return (
    <div className={`${classStyle}`}>
      {children}
    </div>
  )
}
