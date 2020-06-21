import styled from 'styled-components'

import { FaTwitch, FaYoutube } from "react-icons/fa";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  div {
    
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      a {
        text-align: center;
      }
    }

    p {
      font-size: 20px;
      text-align: center;
    }

    a {
      margin: 20px 60px;
      color: ${props => props.theme.textColor};

      &:hover {
        color: ${props => props.theme.textColor};
      }
    }
  }

  h1 {
    font-size: 28px;
    text-align: center;
    margin: 20px;
  }

`;

export const TwitchIcon = styled(FaTwitch)`
color:  #6441a5;
transition: color 0.4s;

&:hover {
  color: ${props => props.theme.textColor};
}
`

export const YoutubeIcon = styled(FaYoutube)`
color:  #c4302b;
transition: color 0.4s;

&:hover {
  color: ${props => props.theme.textColor};
}
`