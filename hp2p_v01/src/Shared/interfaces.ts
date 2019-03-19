

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
}

export interface ModalWindowStateItem {
  component?: string,
  display?: boolean,
}

export type ModalWindowState = [ModalWindowStateItem]
