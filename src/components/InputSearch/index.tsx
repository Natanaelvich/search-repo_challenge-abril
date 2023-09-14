import {TextInputProps} from 'react-native';
import IconSearch from '../Icons/IconSearch';
import * as S from './styles';

type InputSearchProps = TextInputProps;

export const InputSearch = (props: InputSearchProps) => {
  return (
    <S.Container>
      <IconSearch />
      <S.Input placeholder="Busca por repositórios" {...props} />
    </S.Container>
  );
};
