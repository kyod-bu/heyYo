import React from 'react'
import HTTP from './unit/http'

export interface IConfig {
  codeSuccess: number,
  codeUnauthorized: number,
  codeValidated: number,
  codeNotConf: number,
  apiFormat: {
    code: string,
    msg: string,
    data: string,
    page: string,
    pageSize: string,
    currentPage: string,
    count: string,
    totalPages: string
  },
  hosts?: { [key: string]: string },
  remoteJsUrl?: string,
  svgUrl?: string,
  svgMapLength?: number,
  topAccountMenu?: Array<{ key: string, name: string }>
  footerText?: string,

  [key: string]: any
}

const Config: IConfig = {
  codeSuccess: 0,
  codeUnauthorized: 401001,
  codeValidated: 403001,
  codeNotConf: 402001,
  apiFormat: {
    code: 'code',
    msg: 'msg',
    data: 'data',
    page: 'page',
    pageSize: 'pageSize',
    currentPage: 'currentPage',
    count: 'count',
    totalPages: 'totalPages'
  },
  remoteJsUrl: '',
  svgUrl: '',
  topAccountMenu: [{ key: '/my/reset-password', name: '重置密码' }],
  footerText: ''
}

export default Config
export const ConfigContext = React.createContext({ config: Config, Http: HTTP() });
