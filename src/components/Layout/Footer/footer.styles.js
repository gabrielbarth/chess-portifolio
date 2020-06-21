import styled from 'styled-components';
import { transparentize } from 'polished'

export const Container = styled.div`

  height: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${props => props.theme.footerBgColor};

  footer {
    justify-content: center;
    align-items: center;
    font-family: 'Lora', serif;

    a{
      color: ${props => props.theme.white};
      transition: color 0.5s;

      &:hover {
        color: ${props => props.theme.linkHoverTextColor};
      }
    }

    p {
      
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      padding-top: 5px;
      color: ${props => transparentize(0.3, props.theme.white)};
    }
  }

  

`;