import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { setTheme } from '@/redux/slices/themeSlice'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MainLayout = ({ children }) => {
  const theme = useSelector(state => state.theme.value)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!theme) {
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
    }
    else {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      }
      else {
        document.documentElement.classList.remove('dark')
      }
    }
    setLoading(false)
  }, [])
  return (
    <div className=' relative'>
      {
        !loading && <>
          <Navbar />
          {children}
          <Footer />
        </>
      }
    </div>
  )
}

export default MainLayout