import React from 'react';

import { FiCalendar } from 'react-icons/fi';
import { Container, Title } from './styles';
import Button from '../../components/Button';

export default function Main() {
  return (
    <Container>
      <FiCalendar color="#fff" size={100} />

      <Title>Selecione uma opção</Title>

      <Button to="/time/1/entre 15 de fevereiro a 15 de outubro do ano 2000">
        Dias entre 15 de fevereiro a 15 de outubro do ano 2000
      </Button>

      <Button to="/time/2/entre 15 de fevereiro a 15 de outubro do ano 2001">
        Dias entre 15 de fevereiro a 15 de outubro do ano 2001
      </Button>

      <Button to="/time/3/entre 15 de fevereiro a 15 de outubro do ano 1900">
        Dias entre 15 de fevereiro a 15 de outubro do ano 1900
      </Button>

      <Button to="/time/4/entre 15 de fevereiro a 15 de outubro do ano 1582">
        Dias entre 15 de fevereiro a 15 de outubro do ano 1582
      </Button>
    </Container>
  );
}
