import {useNavigation} from '@react-navigation/native';
import {InputSearch, RepositoryItem} from '../../components';
import * as S from './styles';
import {useAppDispatch, useAppSelector} from '../../store';
import {getRepositoriesAction} from '../../store/modules/repository/repositorySlice';
import {useEffect, useState} from 'react';

export const Repositories = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {repositories, error, loading} = useAppSelector(
    state => state.repository,
  );

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleRepositoryDetails = (html_url: string, name: string) => {
    navigation.navigate('RepositoryDetails', {html_url, name});
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        setPage(1);
        dispatch(getRepositoriesAction({q: query, page: 1}));
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, query]);

  const loadMore = () => {
    if (loading || repositories.length < 10) {
      return;
    }

    const nextPage = page + 1;

    setPage(nextPage);

    if (query) {
      dispatch(getRepositoriesAction({q: query, page: nextPage}));
    }
  };

  const renderEmpty = () => {
    if (loading) {
      return <S.Loading />;
    }

    if (error) {
      return <S.Error>{error}</S.Error>;
    }

    if (!loading && !error && !query) {
      return <S.Empty>Pesquise por repositórios</S.Empty>;
    }

    if (!loading && !error) {
      return <S.Empty>Nenhum repositório encontrado</S.Empty>;
    }

    return null;
  };

  const renderLoadMore = () => {
    if (loading && repositories.length > 0) {
      return <S.Loading />;
    }

    return null;
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Repositórios</S.Title>

        <InputSearch onChangeText={setQuery} value={query} />
      </S.Header>

      <S.ListRepositories
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <RepositoryItem
            repository={item}
            onPress={() => handleRepositoryDetails(item.html_url, item.name)}
          />
        )}
        ItemSeparatorComponent={() => <S.Separator />}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderLoadMore}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </S.Container>
  );
};
