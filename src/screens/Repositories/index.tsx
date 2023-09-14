import {useNavigation} from '@react-navigation/native';
import {InputSearch, RepoItem} from '../../components';
import * as S from './styles';

export const Repositories = () => {
  const navigation = useNavigation();

  const handleRepoDetails = () => {
    navigation.navigate('RepoDetails');
  };

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>

      <InputSearch />

      <S.ListRepositories
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={item => String(item)}
        renderItem={() => (
          <RepoItem
            image="https://avatars.githubusercontent.com/u/69631?v=4"
            title="react"
            owner="facebook"
            stars={158000}
            onPress={handleRepoDetails}
          />
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />
    </S.Container>
  );
};
