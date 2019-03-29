

export interface Payload {
  readonly optGet?: string,
  readonly optPost?: string,
  readonly target?: string[],
  readonly role?: string[],
  readonly msg?: string[],
  readonly actionLog?: string[],
  readonly inception?: string[],
  readonly searchPhrase?: string[],
  readonly searchCategory?: string[],
  readonly searchMedia?: string[],
  readonly catalogCategory?: string[],
  readonly userPrifile?: string[],
  readonly email?: string[],
  readonly width?: number,
  readonly height?: number,
  readonly search?: string,
  readonly pathname?: string,
  readonly hostname?: string,
  readonly href?: string,
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
  readonly capture?: string,
  readonly eid?: string,
  readonly general?: boolean,
  readonly data?: any,
}

export interface ModalWindowStateItem {
  component?: string,
  display?: boolean,
}

export type ModalWindowState = [ModalWindowStateItem]
