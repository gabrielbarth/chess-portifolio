import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 26px 15px 0 15px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.footerBgColor};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export const LinkPage = styled(Link)`
  color: ${(props) => props.theme.linkTextColor};
  font-weight: bold;
  font-size: 20px;
  transition: color 0.5s;

  &:hover {
    color: ${(props) => props.theme.linkHoverTextColor};
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <LinkPage open={open} to="/">
          Videos
        </LinkPage>
      </li>
      <li>
        <LinkPage open={open} to="/content">
          Materiais
        </LinkPage>
      </li>
      <li>
        <LinkPage open={open} to="/social">
          Redes Sociais
        </LinkPage>
      </li>
    </Ul>
  );
};

export default RightNav;
