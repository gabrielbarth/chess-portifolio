import styled from 'styled-components';

import { transparentize } from 'polished'

export default styled.button`
  height: 50px;
  padding: 0 20px;
  margin: 5px 10px;
  background:  ${(props) => props.active ? props.theme.footerBgColor : transparentize(0.4, props.theme.footerBgColor)};
  font-weight: bold;
  color: #f8f9fa;
  border: 0;
  border-radius: 4px;
  font-size: 18px;
  font-family: 'Lora', serif;
  transition: background 0.4s;

  &:hover {
    background: ${(props) => props.theme.footerBgColor};
    color: #e0e5eb;
  }

  span {
    color: #e0e5eb;
    font-size: 13px;
  }
`;
