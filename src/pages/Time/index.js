import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FiCalendar, FiChevronLeft } from 'react-icons/fi';
import { Container, Label, LabelCode, Bold, Back } from './styles';

import api from '../../services/api';

export default function Time({ match }) {
  const [days, setDays] = useState('');

  const { id, date } = match.params;

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/time/${id}`);
      setDays(response.data);
    }
    getData();
  }, [id]);

  return (
    <Container>
      <FiCalendar color="#fff" size={100} />

      <LabelCode>Há {date}</LabelCode>

      <Bold>{days}</Bold>

      <Back to="/">
        <FiChevronLeft color="#fff" size={32} />
        <Label>Voltar</Label>
      </Back>
    </Container>
  );
}

Time.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

Time.defaultProps = {
  match: 1,
};
