import React, { useContext } from 'react'
import { toJS } from 'mobx'
import { Cascader } from 'antd'
import LangContent from "../../lang";

interface IProps {
  value?: string | string[],
  valIsArr?: boolean,
  data?: Array<any>,
  split?: string,
  changeOnSelect?: boolean,
  onChange?: Function
}

export default function (props: IProps) {
  const lang = useContext(LangContent)
  const { onChange, value = '', valIsArr = false, data = [], split = '/', changeOnSelect = true, ...args } = props
  const change: any = (e: string[]) => {
    if (onChange) {
      onChange(valIsArr ? e : (e || []).join(split))
    }
  }
  const newValue: any[] = toJS(valIsArr ? (typeof value === "object" ? value : []) : (typeof value === 'string' ? (value ? value.split(split) : []) : value))
  if (typeof value === 'string' && valIsArr === false) {
    for (let i = 0; i < newValue.length; i += 1) {
      const val = newValue[i]
      if (/^\d+$/.test(val)) {
        newValue[i] = parseInt(val, 10)
      }
    }
  }
  const newData = toJS(data)
  return (
    <Cascader
      placeholder={lang.please_choose}
      allowClear={true}
      {...args}
      value={newValue}
      options={newData}
      onChange={change}
      changeOnSelect={changeOnSelect}
    />
  )
}

// class Ccccc extends Component<IProps> {
//   change = (e: string[]) => {
//     const { onChange, split, valIsArr } = this.props
//     if (onChange) {
//       onChange(valIsArr ? e : (e || []).join(split))
//     }
//   }
//
//   render() {
//     const { value = '', valIsArr = false, data = [], split = '/', changeOnSelect = true, ...args } = this.props
//     // @ts-ignore
//     const newValue: any[] = toJS(valIsArr ? (typeof value === "object" ? value : []) : (typeof value === 'string' ? (value ? value.split(split) : []) : value))
//     if (typeof value === "string" && valIsArr === false) {
//       for (let i = 0; i < newValue.length; i += 1) {
//         const val = newValue[i]
//         if (/^\d+$/.test(val)) {
//           newValue[i] = parseInt(val, 10)
//         }
//       }
//     }
//     const newData = toJS(data)
//     return (
//       <Cascader
//         {...args}
//         placeholder="请选择"
//         value={newValue}
//         options={newData}
//         allowClear={true}
//         onChange={this.change}
//         changeOnSelect={changeOnSelect}
//       />
//     )
//   }
// }
