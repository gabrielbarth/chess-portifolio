import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contato" />
      <h1>Contato</h1>
      <p> Para entrar em contato comigo, você pdoe enviar um e-mail para: glaucio...@gmail.com. </p>
      <p> Eu também estou no youtube
       <a href="https://www.youtube.com/user/MrBocalf" target="_blank" > 
           xadrez para todos
       </a> 
      
      </p>
    </Layout>

  )
}

export default ContactPage