import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Poster from './Poster';
import Vote from './Vote';

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({ isTv = false, id, poster, title, vote }) => {
  const navigation = useNavigation();
  const goToDetai = () => {
    navigation.navigate('Detail', {
      isTv,
      id,
      title,
      poster,
      vote,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetai}>
      <Container>
        <Poster url={poster} />
        <Title>{title}</Title>
        {vote > 0 && <Vote vote={vote} />}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default Vertical;
