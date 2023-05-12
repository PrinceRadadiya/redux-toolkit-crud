import React from 'react'

const TextFild = ({lable,inputprops,onChange,value}) => {
  return (
    <div className='flex flex-col'>
    <label className='mb-2 text-base text-gray-800'>{lable}</label>
      <input 
        className='bg-gray-200 py-2 px-3 border-3 outline-none'
        {...inputprops}
        onChange={onChange}
        value={value}
       />
    </div>
  )
}

export default TextFild
