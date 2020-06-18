import React from 'react';
import NavBar from '../../Nav/NavBar';

import {
  Container,
  Content,
  NavigationBar,
  MiddleContent,
} from './header.styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <NavigationBar>
          <NavBar />
        </NavigationBar>

        <MiddleContent>
          <h1>Tudo de xadrez</h1>

          <h3>
             com MN Glaucio Cella.
          </h3>

        </MiddleContent>
      </Content>
    </Container>
  );
};

export default Header;
