import styled from 'styled-components';
import { darken, transparentize } from 'polished';

import { FaChessKing, FaChessQueen } from "react-icons/fa";

export const Container = styled.div`  
  background: ${props => props.theme.headerBgColor};
  padding: 0 15px;
  font-family: 'Lora', serif;
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
    color: ${props =>  props.theme.white};
    font-size: 42px;
    text-align: center;
  }

  h3 {
    color: ${props => darken(0.2, props.theme.white)};
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    margin-left: 60px;

  }
`;

export const kingIcon = styled(FaChessKing)``

export const QueenIcon = styled(FaChessQueen)``