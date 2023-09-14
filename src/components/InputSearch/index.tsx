import IconSearch from '../Icons/IconSearch';
import * as S from './styles';

export const InputSearch = () => {
  return (
    <S.Container>
      <IconSearch />
      <S.Input placeholder="Busca por repositórios" />
    </S.Container>
  );
};
