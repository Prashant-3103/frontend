import React from 'react'
import AsyncSelect from 'react-select/async';

const MultiSelectTagDropDown = ({defaultValue =[], loadOptions, onChange}) => {
  return (
<AsyncSelect defaultValue={defaultValue} defaultOptions isMulti loadOptions={loadOptions}
className='relative z-20' onChange={onChange}/>
  )
}

export default MultiSelectTagDropDown
