import {FadeInRight} from 'react-native-reanimated';
import {Repository} from '../../store/modules/repository/repositorySlice';
import * as S from './styles';

type Props = {
  repository: Repository;
  onPress: () => void;
};

export const RepositoryItem = ({repository, onPress}: Props) => {
  return (
    <S.Container onPress={onPress} entering={FadeInRight}>
      <S.Image source={{uri: repository.owner.avatar_url}} />

      <S.WrapperDesc>
        <S.Title>{repository.name}</S.Title>
        <S.Owner>{repository.owner.login}</S.Owner>
      </S.WrapperDesc>

      <S.NumberStars>{repository.stargazers_count} stars</S.NumberStars>
    </S.Container>
  );
};
