import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {safeTopArea} from '../../utils/safeArea';
import {Repository} from '../../store/modules/repository/repositorySlice';

export const Container = styled.View`
  flex: 1;
  padding: ${safeTopArea + 19}px 16px 0;
  background: #fff;
`;

export const Title = styled.Text`
  color: #000;
  /* font-family: SF Pro Display; */
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px; /* 120.588% */
  margin-bottom: 16px;
`;

export const ListRepositories = styled(FlatList<Repository>).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    gap: 16,
    paddingTop: 41,
  },
})``;

export const Separator = styled.View`
  height: 1px;
  background-color: #e1e4e8;
  margin: 0 16px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#000',
})`
  margin-top: 16px;
`;

export const Empty = styled.Text`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  margin-top: 16px;
`;

export const Error = styled.Text`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  margin-top: 16px;
`;
