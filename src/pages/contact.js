import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import youtubeeImg from '../assets/images/youtube.png'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contato" />
      <h1>Contato</h1>
      <p> Entre em contato comigo atráves do e-mail: <strong>xadrezbeltrao@gmail.com</strong> </p>
      <p> Clique no botão abaixo, inscreva-se no meu canal e acompanhe meus vídeos!  </p>
        <a href="https://www.youtube.com/user/MrBocalf/videos" target="_blank" > 
          <img src={youtubeeImg} width="200"/>
        </a> 
    </Layout>

  )
}

export default ContactPage