import React from 'react'

interface Props {
}
interface State {
}

export class Template extends React.PureComponent<Props, State> {
  public static defaultProps: any = {
  }

  constructor(props: any) {
    super(props)
  }

  public componentDidMount(): void {
  }

  public render(): JSX.Element {
    return (
      <div>Template test</div>
    )
  }
}
