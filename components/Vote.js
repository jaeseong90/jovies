import React from 'react';
import styled from 'styled-components/native';

const Container = styled.Text`
  color: rgb(220, 220, 220);
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 12px;
`;

const Vote = ({ vote }) => <Container>⭐️ {vote} / 10</Container>;

export default Vote;
