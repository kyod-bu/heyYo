import React, { Component } from 'react'
import { observer } from 'mobx-react-lite'
import Link from '../../display/link'
import { Button, Modal } from 'antd'

const confirm = Modal.confirm

export interface IProps {
  type?: 'row' | 'batch',
  status?: {}
  items: [],
  record?: any
}

const ListActions = ({ type = 'row', status, items, record }: IProps) => {
  let className = ''
  let btnSize = ''
  if (type === 'row') {
    className = 'm-list-operate'
    btnSize = 'small'
  }
  if (type === 'batch') {
    className = 'u-table-row-selection-btn'
    btnSize = 'middle'
  }
  return (
    <div className={className}>
      {items.map && items.map((item: any, itemIndex: number) => {
        const { show, action, actionName, whom, urlFn, isConfirm, props = {} } = item
        const isShow = typeof show === 'function' ? show(record) : (show !== false)
        if (!isShow) {
          return ''
        }
        const url = typeof urlFn === 'function' ? urlFn(record) : ''
        if (url) {
          return (
            <Link key={itemIndex} href={url}>
              <Button size={btnSize} {...props} >{actionName}</Button>
            </Link>
          )
        }
        if (typeof action !== 'function') {
          return `action 必须是一个到函数`
        }
        const opeProps: any = {
          store,
          btnProps: props,
          isConfirm,
          actionName,
          type,
          operateStatus: listOperateStatus
        }
        if (type === 'row') {
          opeProps.index = index
          opeProps.whom = record[whom]
          opeProps.fn = () => action.call(Store, { record, index, value })
        } else {
          opeProps.fn = () => action.call(Store)
        }
        return <Operate key={itemIndex}{...opeProps} />
      })}
    </div>
  )
}

export default observer(ListActions)

class listOperate extends Component<{ Store?: { [key: string]: any }, type?: 'row' | 'batch', record?: any, index?: number, name?: string, value?: any }> {
  render() {
    const { Store = {}, record, index = 0, name = 'list', value, type = 'row' } = this.props
    let items: any[] = []
    const listOperateStatus = Store[`${name}OperateStatus`]
    let className = ''
    let btnSize = ''
    if (type === 'row') {
      const conf = Store[`${name}OperateConf`] || {}
      items = conf.items
      className = 'm-list-operate'
      btnSize = 'small'
    }
    if (type === 'batch') {
      items = Store[`${name}TableActions`] || []
      className = 'u-table-row-selection-btn'
      btnSize = 'middle'
    }

    return (
      <div className={className}>
        {items.map && items.map((item: any, itemIndex: number) => {
          const { show, action, actionName, whom, urlFn, isConfirm, props = {} } = item
          const isShow = typeof show === 'function' ? show(record) : (show !== false)
          if (!isShow) {
            return ''
          }
          const url = typeof urlFn === 'function' ? urlFn(record) : ''
          if (url) {
            return (
              <Link key={itemIndex} href={url}>
                <Button size={btnSize} {...props} >{actionName}</Button>
              </Link>
            )
          }
          if (typeof action !== 'function') {
            return `action 必须是一个到函数`
          }
          const opeProps: any = {
            Store,
            name,
            btnProps: props,
            isConfirm,
            actionName,
            type,
            operateStatus: listOperateStatus
          }
          if (type === 'row') {
            opeProps.index = index
            opeProps.whom = record[whom]
            opeProps.fn = () => action.call(Store, { record, index, value })
          } else {
            opeProps.fn = () => action.call(Store)
          }
          return <Operate key={itemIndex}{...opeProps} />
        })}
      </div>
    )
  }
}

// @observer
class Operate extends Component<{ Store?: any, name: string, btnProps?: object, type: 'row' | 'batch', fn?: Function, isConfirm?: boolean, actionName?: string, whom?: string, index?: number, operateStatus: { [key: string]: any } }> {
  execute = async () => {
    const { fn = () => '', Store, name, index, actionName, type = 'row' } = this.props
    const setListOperateStatus = Store && Store.setListOperateStatus
    const statusObj: { [key: string]: any } = { actionName, loading: true }
    if (type === 'row') {
      statusObj.index = index
    }
    typeof setListOperateStatus === 'function' && setListOperateStatus({ name, type, status: statusObj })
    await fn()
    statusObj.loading = false
    typeof setListOperateStatus === 'function' && setListOperateStatus({ name, type, status: statusObj })
  }
  click = () => {
    const { isConfirm = true, actionName, whom, type = 'row' } = this.props
    if (isConfirm) {
      confirm({
        title: `${actionName}确认?`,
        content: type === 'row' ? `您确定要${actionName} ${whom}?` : `您确定要批量${actionName}?`,
        onOk: () => {
          this.execute()
        },
      });
    } else {
      this.execute()
    }
  }

  render() {
    const { operateStatus, index, actionName, btnProps = {}, type = 'row', name, Store } = this.props
    if (type === 'batch') {
      const listTable = Store[`${name}Table`] || {}
      const selectedRowKeys = listTable.rowSelection && listTable.rowSelection.selectedRowKeys || []
      if (!btnProps.hasOwnProperty('disabled')) {
        // @ts-ignore
        btnProps.disabled = !(selectedRowKeys.length > 0)
      }
    }
    return (
      <Button
        htmlType="button"
        size={type === 'row' ? 'small' : 'middle'}
        loading={operateStatus && operateStatus[`${actionName}-${type === 'row' ? index : type}`]}
        onClick={this.click}
        {...btnProps}
      >
        {actionName}
      </Button>
    )
  }
}
