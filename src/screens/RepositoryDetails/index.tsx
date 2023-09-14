import {useRoute} from '@react-navigation/native';
import {Header} from '../../components';
import * as S from './styles';

type RouteParams = {
  html_url: string;
  name: string;
};

export const RepositoryDetails = () => {
  const route = useRoute();

  const {html_url, name} = route.params as RouteParams;

  return (
    <S.Container>
      <Header title={name} />

      <S.StyledWebView source={{uri: html_url}} />
    </S.Container>
  );
};
