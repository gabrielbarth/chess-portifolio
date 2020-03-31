import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import indexStyles from './index.module.scss'

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

  return (
      <Layout>
        <Head title="Home" />

      <div className={indexStyles.selectorContainer}>
          <select id="category" 
            className={indexStyles.selector}
            value={selectedItem} 
            onChange={e => setselectedItem(e.target.value)}>
              <option className={indexStyles.selectorOption} value=""> Todos </option>
              <option className={indexStyles.selectorOption} value="finais"> Finais </option>
              <option className={indexStyles.selectorOption} value="aberturas"> Aberturas </option>
              <option className={indexStyles.selectorOption} value="meio-jogo"> Meio Jogo </option>
              <option className={indexStyles.selectorOption} value="taticas"> Táticas e Estratégias </option>
              <option className={indexStyles.selectorOption} value="didatica"> Didática </option>
          </select>
        </div>
    
        {   
        data.allContentfulVideo.nodes.filter(video => video.category.includes(selectedItem)).map(video => {
          return (
            <div className={indexStyles.videoContainer} key={video.title}>
                <h2 className={indexStyles.videoTitle}> {video.title} </h2>
                <div className={indexStyles.youtubeVideo}>
                  <div dangerouslySetInnerHTML={{ __html: video.url.childMarkdownRemark.html }} />
                </div>
                <p className={indexStyles.videoDescription}> {video.description.description}  </p>
            </div>
            )
        })
        }
      </Layout>
  )
}

export default IndexPage
