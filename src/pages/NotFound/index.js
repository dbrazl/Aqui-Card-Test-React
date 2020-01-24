import React from 'react';

import { FiChevronLeft } from 'react-icons/fi';
import { Container, Code, Label, Back } from './styles';

export default function() {
  return (
    <Container>
      <Code>404</Code>

      <Label>A página não foi encontrada!</Label>

      <Back to="/">
        <FiChevronLeft color="#fff" size={32} />
        <Label>Voltar</Label>
      </Back>
    </Container>
  );
}
