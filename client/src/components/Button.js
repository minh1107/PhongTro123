import React from 'react'

const Button = ({ IconBefore, fontsize, text, IconAfter, textColor, bgColor, heightBt, onClick, loginType }) => {
  return (
    <button onClick={onClick} type='button' className={`py-2 px-4 ${textColor} ${heightBt} ${loginType && 'w-full hover:underline font-bold'} ${fontsize} bg-${bgColor} outline-none rounded-md flex gap-1 items-center justify-center`}>
      <span className={`text-[20px] mt-1 text-center`}>{IconBefore && <IconBefore />}</span>
      {text}
      {IconAfter && <IconAfter />}
    </button>
  )
}

export default Button