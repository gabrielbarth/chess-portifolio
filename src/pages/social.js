import React from 'react'

import Layout from '../components/Layout/layout'
import Head from '../components/Layout/head'

import {Container, TwitchIcon, YoutubeIcon} from '../styles/medias.styles'

const MediasPage = () => {
  return (
    <Layout>
      <Head title="Redes Sociais" />
      <Container>
      <h1>Acompenhe minhas redes sociais</h1>
      <div>
        <a href="https://www.twitch.tv/glauciocella" target="_blank">
        <TwitchIcon size={200}/>
        <p>Twitch - GlaucioCella</p>
        </a>
        <a href="https://www.youtube.com/user/MrBocalf/videos" target="_blank">
        <YoutubeIcon size={200}/>
        <p>Youtube - GlaucioCella</p>
        </a>
      </div>
        </Container>
    </Layout>

  )
}

export default MediasPage