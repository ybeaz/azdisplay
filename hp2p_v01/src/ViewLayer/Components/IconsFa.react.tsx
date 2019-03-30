import React from 'react'

interface Props {
  readonly iconFa: string,
  readonly num: number,
}

const defaultProps: any = {
}

export const IconsFa: React.SFC<Props> = (props: Props): JSX.Element => {
  const propsPrivate: Props = { ...defaultProps, ...props }
  const {iconFa, num} = propsPrivate

  let listArr = []
  for (let i = 0; i < num; i += 1) {
    listArr.push(iconFa)
  }
  const iconFaItems = listArr.map(item => <i className={item} />)
  // console.info('IconsFa [5]', { listArr, iconFa, num })

  return (
    <div className='IconsFa'>
      {iconFaItems}
    </div>
  )
}
