import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import Head from '../components/Layout/head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="Sobre" />
      <h1>Sobre</h1>
      <p> Olá! Sejá bem vindo ao meu portifólio. Eu sou Glaucio Cella, apaixonado pelo xadrez.  </p>
      <p> Eu diria que o xadrez mudou minha vida, e acredito que também pode mudar a....... </p>
      <p> 
        O projeto Xadrez para Todos......... 
      </p>
      <p> 
        **[este texto é apenas um exemplo! Glaucio irá fazer depois]**
      </p>
      <p>
       Acompanhe-me, veja onde publico conteúdos clicando <Link to="/contact"> aqui. </Link> 
      </p>
    </Layout>
  )
}

export default AboutPage