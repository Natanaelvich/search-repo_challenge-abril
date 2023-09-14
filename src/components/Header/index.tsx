import {useNavigation} from '@react-navigation/native';
import IconArrowBack from '../Icons/IconArrowBack';
import * as S from './styles';

type Props = {
  title: string;
};

export const Header = ({title}: Props) => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.WrapperIcon onPress={() => navigation.goBack()}>
        <IconArrowBack />
      </S.WrapperIcon>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
