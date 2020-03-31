import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

import bottomImage from '../assets/images/footer.svg'

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return(
    <div className={layoutStyles.topImageContainer}>
      <div className={layoutStyles.bottomImageContainer}>

      
      <div className={layoutStyles.container} >
        <div className={layoutStyles.content}>
          <Header />
          {props.children}  
        </div>
        <Footer />
      </div>
      {/* <img src={bottomImage} /> */}
      </div>
    </div>
  )
}
export default Layout