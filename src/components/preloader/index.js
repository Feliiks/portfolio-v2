import React, { useEffect } from 'react'
import Logo from '../../assets/logo_allongé.png'

const Index = () => {
  useEffect(() => {
    const timer1 = setTimeout(() => {
      document.getElementById(
        'preloader').style.transform = 'translate(0%, 0%)'
      document.getElementById('inner').style.width = '100%'

    }, 1)
    const timer2 = setTimeout(() => {
      document.getElementById(
        'preloader').style.transform = 'translate(100%, 0%)'
      document.getElementById('inner').style.width = '0%'
    }, 1500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="preloader" id="preloader">
      <img src={Logo} alt="img" />
      <div className="pbar">
        <div className="inner" id="inner"/>
      </div>
    </div>
  )
}

export default Index