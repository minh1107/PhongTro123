import React from 'react'

const InputForm = ({textLabel, fontSizeTextLabel}) => {
  return (
    <div className='mb-[20px]'> 
      <label className={`text-[${fontSizeTextLabel}] flex mb-[5px]`}>{textLabel}</label>
      <input type='text' placeholder='' className='bg-inputColor outline-none text-[20px] font-bold h-[45px] w-full px-[10px] rounded-md'/>
    </div>
  )
}

export default InputForm