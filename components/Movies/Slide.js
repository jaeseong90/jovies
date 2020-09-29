import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { imageApi } from '../../api';
import { Dimensions, TouchableOpacity } from 'react-native';
import Poster from '../Poster';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  height: 100%;
  width: 100%;
`;
const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 10px;
`;

const Votes = styled.Text`
  color: white;
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 500;
`;

const Overview = styled.Text`
  color: white;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 7px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, overview, poster, backgroundImage, vote }) => {
  const navigation = useNavigation();

  const goDetail = () => {
    navigation.navigate('Detail', {
      isTv: false,
      id,
      title,
      poster,
      overview,
      backgroundImage,
    });
  };

  return (
    <Container>
      <BG source={{ uri: imageApi(backgroundImage) }} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>
            {title.length > 10 ? `${title.slice(0, 10)}...` : title}
          </Title>
          <Votes>⭐️ {vote} / 10</Votes>
          <Overview>
            {overview.length > 50 ? `${overview.slice(0, 50)}...` : overview}
          </Overview>
          <TouchableOpacity onPress={goDetail}>
            <Button>
              <ButtonText>View details</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};
Slide.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default Slide;
