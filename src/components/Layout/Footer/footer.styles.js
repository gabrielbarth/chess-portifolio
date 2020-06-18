import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${props => props.theme.footerBgColor};

  footer {
    font-family: 'Open Sans';
    justify-content: center;
    align-items: center;

    a{
      color: ${props => props.theme.linkTextColor};
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
      color: ${props => props.theme.textColor}
    }
  }

  

`;