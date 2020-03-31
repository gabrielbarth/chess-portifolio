import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`)
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.footerText}>
        Xadrez para todos. Todos os direitos reservados. <br/>Created by 
        <a className={footerStyles.footerAuthor} href="https://gabrielbarth.com" target="_blank" >
          {data.site.siteMetadata.author}
        </a> © 2020.
      </p>
    </footer>
  )
}

export default Footer