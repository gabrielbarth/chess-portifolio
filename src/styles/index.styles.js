import  styled from 'styled-components'


export const Container = styled.div`
  font-family: 'Open Sans';
  max-width: 1000px;
  margin: 0 auto;
`;

export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: auto;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Video = styled.div`
  width: 500px;
  padding: 20px 0;
  justify-content: center;
  align-items: center;

  iframe {
    border-radius: 4px;
    width: 480px;
    height: 300px;
  }
`
export const VideoTexts = styled.div`
  padding: 5px 10px;

  h2 {
    color: ${props => props.theme.textColor};
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: ${props => props.theme.textColor};
    padding-right: 20px;
    text-align: justify;
  }

`