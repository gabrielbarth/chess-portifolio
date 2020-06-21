import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Head from '../components/Layout/head'
import Button from '../components/Button'

import { Container, VideosContainer, Video, VideoTexts } from '../styles/index.styles'

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
          pageInfo {
            currentPage
            hasNextPage
            hasPreviousPage
          }
        }
      }
`

const IndexPage = ({ data }) => {
  const [selectedItem, setselectedItem] = useState('');
  const [activeButton, setActiveButton] = useState('');
  const [videoList, setVideoList] = useState([]);

  function handleSelect(op) {
    setVideoList([]);
    setActiveButton(op);
    setselectedItem(op);
  }

  useEffect(() => {
    setVideoList(data.allContentfulVideo.nodes.filter(video =>
      video.category.includes(activeButton)))

  }, [activeButton])


  return (
    <Layout>
      <Head title="Vídeos" />
      <Container>

        <Button active={activeButton === ''} onClick={() => handleSelect('')} >Todos</Button>
        <Button active={activeButton === 'iniciantes'} onClick={() => handleSelect('iniciantes')} >Iniciantes</Button>
        <Button active={activeButton === 'finais'} onClick={() => handleSelect('finais')} >Finais</Button>
        <Button active={activeButton === 'partidas'} onClick={() => handleSelect('partidas')} >Partidas Analisadas</Button>
        {console.log(activeButton, selectedItem, videoList)}
        <VideosContainer>

          {videoList.map(video => (
            <Video key={video.title}>
              <div dangerouslySetInnerHTML={{ __html: video.url.childMarkdownRemark.html }} />
              <VideoTexts>
                <h2>{video.title}</h2>
                <p>{video.description.description}</p>
              </VideoTexts>
            </Video>
          ))
          }
        </VideosContainer>
      </Container>
    </Layout>
  )
}

export default IndexPage
