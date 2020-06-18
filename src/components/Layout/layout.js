import React from 'react';
import {ThemeProvider} from 'styled-components'

import Header from './Header/header';
import Footer from './Footer/footer';

import GlobalStyle from '../../styles/global';
import theme from '../../styles/theme';


import { Container, Content } from './layout.styles';

const Layout = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Content>
          <GlobalStyle />
          <Header pageTitle={props.title} />
          {props.children}
        </Content>
        <Footer />
      </Container>
      </ThemeProvider>
  );
};
export default Layout;
