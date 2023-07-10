import Navbar from '@/components/navbar/Navbar'
import { setTheme } from '@/redux/slices/themeSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MainLayout = ({ children }) => {
  const theme = useSelector(state => state.theme.value)
  const dispatch = useDispatch()
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      if (theme) {
        dispatch(setTheme('dark'))
        document.documentElement.classList.add('dark')
      }
    } else {
      if (theme) {
        dispatch(setTheme('light'))
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout