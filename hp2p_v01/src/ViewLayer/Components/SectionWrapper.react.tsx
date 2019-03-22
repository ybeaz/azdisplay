import React from 'react'

interface Props {
  classStyle: string,
  children: any,
  

}
interface State {
}

const SectionWrapper: React.SFC<Props> = (props: Props) => {
  const { classStyle, children } = props
  return (
    <div className={`SectionWrapper ${classStyle}`}>

      <div className='SectionWrapper__colLeft' />
      <div className='SectionWrapper__colMain'>
        {children}
      </div>
      <div className='SectionWrapper__colRight' />

    </div>
  )
}


export default SectionWrapper
