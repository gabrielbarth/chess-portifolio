import  styled from 'styled-components';
import { Link } from 'gatsby';
import { darken } from 'polished';

import { FaFilePdf } from "react-icons/fa";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 80px;

  h2 {
    font-size: 18px;
  }
`

export const PdfLink = styled(Link)`
  color: ${props => darken(0.1, props.theme.primaryColor)};
  transition: color 0.5s;

  svg{
    color: ${props => darken(0.1, props.theme.primaryColor)};
    transition: color 0.5s;
  }

  &:hover {
    color: ${(props) => props.theme.linkHoverTextColor};
    svg{
      color: ${(props) => props.theme.linkHoverTextColor};
    }
  }
`

export const PdfIcon = styled(FaFilePdf)``

export const ContentScroll = styled.div`
  margin: 20px 0;
  padding: 0 60px;
  width: 100%;
  height: 500px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    display: none;
}
`