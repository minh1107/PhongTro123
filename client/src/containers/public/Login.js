import React from 'react'
import InputForm from '../../components/InputForm'
import { Button } from '../../components'

const Login = () => {
  return (
    <div className='bg-white max-w-600 w-600 h-450 px-[30px] pt-[30px] pb-[100px] rounded-xl shadow-black border-[1px] border-borderColor'>
      <h3 className='font-bold text-[28px] mb-[15px] h-[32px] leading-[32px]' >Đăng nhập</h3>
      <div >
        <InputForm fontSizeTextLabel={'13px'} textLabel={'SỐ ĐIỆN THOẠI'}/> 
        <InputForm fontSizeTextLabel={'13px'} textLabel={'MẬT KHẨU'}/> 
        <Button text={'Đăng nhập'} bgColor={'buttonColor'} loginType={true} heightBt={'h-[45px]'} textColor={'text-white'} fontsize={'text-[14px]'}/>
        <div className='flex justify-between mb-[20px] mt-[30px]'>
          <small className='text-[14px] text-[#1266dd] hover:text-[#f60] cursor-pointer'>Bạn quên mật khẩu</small>
          <small className='text-[14px] text-[#1266dd] hover:text-[#f60] cursor-pointer'>Tạo tài khoản mới</small>
        </div>
      </div>
    </div>
  )
}

export default Login