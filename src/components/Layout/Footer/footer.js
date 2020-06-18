import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Container } from './footer.styles';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <Container>
      <footer>
        <p>Tudo de xadrez. Todos os direitos reservados. </p>
        <p>Desenvolvido por <a  href="https://www.gabrielbarth.com"
            target="_blank">{data.site.siteMetadata.author}</a>, © 2020.</p>
      </footer>
    </Container>
  );
};

export default Footer;
