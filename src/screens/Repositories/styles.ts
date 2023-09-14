import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {safeBottomArea, safeTopArea} from '../../utils/safeArea';
import {Repository} from '../../store/modules/repository/repositorySlice';
import Animated, {FadeInUp} from 'react-native-reanimated';

export const Container = styled(Animated.View).attrs({
  entering: FadeInUp,
})`
  flex: 1;
  padding: ${safeTopArea + 19}px 16px 0;
  background: #fff;
`;

export const Title = styled.Text`
  color: #111;
  font-size: 34px;
  font-weight: 700;
  line-height: 41px;
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
  color: '#48484a',
})``;

export const Empty = styled.Text`
  color: #48484a;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  margin-top: 16px;
`;

export const Error = styled.Text`
  color: #48484a;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: center;
  margin-top: 16px;
`;

export const WrapperLoadMore = styled.View`
  padding: 16px 16px ${safeBottomArea + 16}px;
  align-items: center;
  justify-content: center;
`;
