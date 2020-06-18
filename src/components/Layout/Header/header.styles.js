import styled from 'styled-components';
import { Link } from 'gatsby';
import { darken, transparentize } from 'polished';

export const Container = styled.div`
  font-family: 'Open Sans';
  background: ${props => props.theme.headerBgColor};
  padding: 0 15px;
`;

export const Content = styled.div`
  height: 220px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const NavigationBar = styled.div`
  margin-bottom: 35px;
  width: 100%;
  background: ${props => transparentize(0.8, props.theme.footerBgColor)};
  border-radius: 10px;
`;


export const MiddleContent = styled.div`
  h1 {
    font-weight: bolder;
    color: ${props => darken(0.2, props.theme.primaryColor)};
    font-size: 42px;
    text-align: center;
  }

  h3 {
    color: ${props => darken(0.1, props.theme.lightTextColor)};
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    margin-left: 60px;

  }

  
  
`;
