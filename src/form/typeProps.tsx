const typeProps: { [key: string]: any } = {
  input: {
    icon: 'string',
    addonAfter: 'string',
    addonBefore: 'string',
    defaultValue: 'string',
    disabled: 'boolean',
    id: 'string',
    prefix: 'string',
    size: 'string',
    suffix: 'string',
    type: 'string',
    value: 'string',
    allowClear: 'boolean',
  },
  aCheckbox: {
    autoFocus: 'boolean',
    checked: 'boolean',
    defaultChecked: 'boolean',
    disabled: 'boolean',
    indeterminate: 'boolean',
  },
  checkbox: {
    value: 'string|array',
    labelKey: 'string',
    valKey: 'string',
    split: 'string',
  },
  radio: {
    value: 'string|number',
    isAll: 'boolean',
    type: 'string',
    valKey: 'string',
    labelKey: 'string',
  },
  rangeDate: {
    allowClear: 'boolean',
    autoFocus: 'boolean',
    disabled: 'boolean',
    dropdownClassName: 'string',
    mode: 'time|date|month|year|decade',
    open: 'boolean',
    placeholder: 'string',
    size: 'string',
  },
  cascader: {
    allowClear: 'boolean',
    autoFocus: 'boolean',
    disabled: 'boolean',
    expandTrigger: 'click|hover',
    notFoundContent: 'string',
    placeholder: 'string',
    popupClassName: 'string',
    popupPlacement: 'bottomLeft|bottomRight|topLeft|topRight',
    popupVisible: 'boolean',
    showSearch: 'boolean',
    size: 'large|default|small',
    value: 'string|array',
    valIsArr: 'boolean',
    split: 'string',
    changeOnSelect: 'boolean',
  },
  inputNumber: {
    autoFocus: 'boolean',
    defaultValue: 'number',
    disabled: 'boolean',
    max: 'number',
    min: 'number',
    precision: 'number',
    decimalSeparator: 'string',
    size: 'string',
    step: 'number',
    value: 'number',
  },
  select: {
    allowClear: 'boolean',
    autoClearSearchValue: 'boolean',
    autoFocus: 'boolean',
    defaultActiveFirstOption: 'boolean',
    disabled: 'boolean',
    dropdownMatchSelectWidth: 'boolean',
    firstActiveValue: 'string',
    labelInValue: 'boolean',
    maxTagCount: 'number',
    maxTagTextLength: 'number',
    mode: 'multiple|tags',
    notFoundContent: 'string',
    optionFilterProp: 'string',
    optionLabelProp: 'string',
    showArrow: 'boolean',
    size: 'large|small',
    tokenSeparators: 'string',
    defaultOpen: 'boolean',
    open: 'boolean',
    loading: 'boolean',
    value: 'string|array|number',
    isNull: 'boolean',
    vToString: 'boolean',
    splitKey: 'string',
    labelKey: 'string',
    valKey: 'string',
    showSearch: 'boolean',
    placeholder: 'string',
  },
  selectTree: {
    allowClear: 'boolean',
    autoClearSearchValue: 'boolean',
    disabled: 'boolean',
    dropdownMatchSelectWidth: 'boolean',
    labelInValue: 'boolean',
    maxTagCount: 'number',
    multiple: 'boolean',
    placeholder: 'string',
    searchPlaceholder: 'string',
    searchValue: 'string',
    treeIcon: 'boolean',
    showCheckedStrategy: 'TreeSelect.SHOW_ALL|TreeSelect.SHOW_PARENT|TreeSelect.SHOW_CHILD',
    showSearch: 'boolean',
    size: 'large|small',
    treeCheckable: 'boolean',
    treeCheckStrictly: 'boolean',
    treeDefaultExpandAll: 'boolean',
    treeNodeFilterProp: 'string',
    treeNodeLabelProp: 'string',
    value: 'number|string|array',
    multipleToStr: 'boolean',
    valKey: 'string',
    split: 'string',
    labelKey: 'string',
    childKey: 'string',
  },
  timestamp: {
    value: 'string|number',
    format: 'string',
  },
  selectRemote: {
    url: 'string',
    method: 'string',
    apiKey: 'string',
    dataKey: 'string',
    valInKey: 'string',
  },
  tree: {
    value: 'string|array',
    data: 'string',
    valKey: 'string',
    labelKey: 'string',
    childKey: 'string',
    isRemoveParentKey: 'boolean',
    checkable: 'boolean',
    autoExpandParent: 'boolean',
    blockNode: 'boolean',
    checkStrictly: 'boolean',
    defaultExpandAll: 'boolean',
    defaultExpandParent: 'bool',
    disabled: 'bool',
    draggable: 'boolean',
    multiple: 'boolean',
    showIcon: 'boolean',
    showLine: 'boolean',
    showOnlySelected: 'boolean',
  }
}
export default typeProps
