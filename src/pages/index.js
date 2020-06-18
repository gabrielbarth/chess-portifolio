import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Head from '../components/Layout/head'
import Button from '../components/Button'

import {Container, VideosContainer, Video, VideoTexts } from '../styles/index.styles'

export const query = graphql`
      query {
        allContentfulVideo {
          nodes {
            title
            category
            description {
              description
            }
            url {
              childMarkdownRemark {
                html
              }
              
            }
          }
        }
      }
`

const IndexPage = ({ data }) => {
  const [selectedItem, setselectedItem] = useState('');
  const [activeButton, setActiveButton] = useState('');

  function handleSelect(op){
    setActiveButton(op);
    setselectedItem(op);
  }

  return (
      <Layout>
        <Head title="Home" />
        <Container>

        <Button active={activeButton === ''} onClick={()=> handleSelect('')} >Todos</Button>
        <Button active={activeButton === 'iniciantes'} onClick={()=> handleSelect('iniciantes')} >Iniciante</Button>
        <Button active={activeButton === 'finais'} onClick={()=> handleSelect('finais')} >Finais</Button>
        <Button active={activeButton === 'partidas'} onClick={()=> handleSelect('partidas')} >Partidas Analisadas</Button>
          
          <VideosContainer>
           {data.allContentfulVideo.nodes.filter(video => 
           video.category.includes(selectedItem)).map(video => (
                <Video  key={video.title}>
                  <div dangerouslySetInnerHTML={{ __html: video.url.childMarkdownRemark.html }} />
                  <VideoTexts>
                    <h2>{video.title}</h2>
                    <p>{video.description.description}</p>
                  </VideoTexts>
                </Video>
                )
            )
            }
          </VideosContainer>
        </Container>
      </Layout>
  )
}

export default IndexPage
