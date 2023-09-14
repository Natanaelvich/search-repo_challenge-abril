import {Header} from '../../components';
import * as S from './styles';

export const RepositoryDetails = () => {
  return (
    <S.Container>
      <Header title="React" />

      <S.StyledWebView
        source={{uri: 'https://github.com/Natanaelvich/chatpi-mobile'}}
      />
    </S.Container>
  );
};
