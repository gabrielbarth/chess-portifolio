import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaChess } from 'react-icons/fa';
import { darken } from 'polished';

import Burger from './Burguer';

export const LinkPage = styled(Link)`
  color: ${props => darken(0.2, props.theme.white)};
  font-weight: bold;
  display: flex;
  padding-left: 15px;
  padding-top: 15px;
  transition: color 0.5s;

  > span {
    font-size: 24px;
    padding-left: 5px;
    margin-top: 8px;
  }

  &:hover {
    color: ${(props) => props.theme.linkHoverTextColor};
  }
`;

const Nav = styled.nav`
  height: 65px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

const Navbar = () => {
  return (
    <Nav>
      <aside>
        <LinkPage to="/">
          <FaChess size={30} />
          <span>Tudo de xadrez</span>
        </LinkPage>
      </aside>
      <Burger />
    </Nav>
  );
};

export default Navbar;
