import {useNavigation} from '@react-navigation/native';
import {InputSearch, RepoItem} from '../../components';
import * as S from './styles';
import {useAppDispatch, useAppSelector} from '../../store';
import {getRepositoriesAction} from '../../store/slices/modules/repository/repositorySlice';
import {useEffect, useState} from 'react';

export const Repositories = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {repositories} = useAppSelector(state => state.repository);

  const [query, setQuery] = useState('');

  const handleRepoDetails = () => {
    navigation.navigate('RepoDetails');
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(getRepositoriesAction('react'));
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, query]);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>

      <InputSearch onChangeText={setQuery} value={query} />

      <S.ListRepositories
        data={repositories}
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
