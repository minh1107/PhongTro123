import React, { useCallback, useState } from 'react'
import { logo, defaultUser } from '../../assets/img'
import { Button } from '../../components'
import { icons } from '../../utils/icons'
import { path } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'

const {AiOutlineHeart} = icons
const Header = () => {
    const [isLogin, setIsLogin] = useState(false)
    const navigator = useNavigate()
    const handleLogin = useCallback(() => {
        navigator(path.LOGIN)
    })

    return (
        <div className='h-[70px] w-1100 m-auto flex items-center text-[14px] justify-between'>
            <img src={logo} alt='' className='w-[240px] h-[70px] object-contain' />
            {isLogin ?
                <div className='flex gap-2'>
                    <div className='mr-[50px] flex items-center'>
                        <img src={defaultUser} className='h-[40px] mr-[5px] rounded-full' alt='defaultUser' />
                        <div>
                            <p className='text-[17px]'>Xin chào, <b>Nguyễn Quang Minh</b></p>
                            <div className='text-[13px]'>
                                <span>Mã tài khoản: <b>9527</b>.</span>{" "}
                                <span>TK chính: <b>0 VND</b></span>
                            </div>
                        </div>
                    </div>
                    <Button text={'Yêu thích'} textColor={'text-black'} bgColor={''} heightBt={'h-[40px]'} />
                    <Button text={'Quản lý tài khoản'} textColor={'text-black'} bgColor={''} heightBt={'h-[40px]'} />
                    <Button text={'Đăng tin mới'} textColor={'text-white'} bgColor={'bg-[#F73859]'} heightBt={'h-[40px]'} />
                </div> : <div className='flex gap-2'>
                    <Button IconBefore={AiOutlineHeart} text={'Yêu thích'} textColor={'text-black'} bgColor={''} heightBt={'h-[40px]'} />
                    <Button onClick={handleLogin} text={'Đăng nhập'} textColor={'text-black'} bgColor={''} heightBt={'h-[40px]'} />
                    <Button text={'Đăng ký'} textColor={'text-black'} bgColor={''} heightBt={'h-[40px]'} />
                    <Button text={'Đăng tin mới'} textColor={'text-white'} bgColor={'bg-[#F73859]'} heightBt={'h-[40px]'} />
                </div>}
        </div>
    )
}

export default Header