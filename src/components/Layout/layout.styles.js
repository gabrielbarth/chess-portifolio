import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  /* max-width: 900px; */

  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex-grow: 1;
`;
