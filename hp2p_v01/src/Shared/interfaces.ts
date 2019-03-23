

export interface Payload {
  readonly optGet?: string,
  readonly optPost?: string,
  readonly target?: string,
  readonly email?: string,
  readonly msg?: string,
  readonly actionLog?: string,
  readonly width?: number,
  readonly height?: number,
}

export interface ModeProdDev {
  readonly checkEnterEmail?: boolean,
  readonly checkSelectRole?: boolean,
}

export interface Action {
  readonly getActionAsync?: Function,
  readonly type: string,
  readonly payload?: any,
  readonly lang?: string,
  readonly treeData?: any,
  readonly modalNext?: string,
  readonly data?: any,
}

export interface ModalWindowStateItem {
  component?: string,
  display?: boolean,
}

export type ModalWindowState = [ModalWindowStateItem]
