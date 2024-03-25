import React from 'react'


interface CheckBoxProps {
  id: string;
  text: string;
  name: string
}

export default function Checkbox({ id, text, name }: CheckBoxProps) {
  return (
    <div className='flex items-center gap-1.5 mb-2 mr-2'>
      <input id={id}  name={name} type="radio" className='size-5'/>
      <label htmlFor={id}>{text}</label>
    </div>
  )
}
