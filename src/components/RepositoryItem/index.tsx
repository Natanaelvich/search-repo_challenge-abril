import * as S from './styles';

type Props = {
  title: string;
  owner: string;
  stars: number;
  image: string;
  onPress: () => void;
};

export const RepositoryItem = ({title, owner, stars, image, onPress}: Props) => {
  return (
    <S.Container onPress={onPress}>
      <S.Image source={{uri: image}} />

      <S.WrapperDesc>
        <S.Title>{title}</S.Title>
        <S.Owner>{owner}</S.Owner>
      </S.WrapperDesc>

      <S.NumberStars>{stars} stars</S.NumberStars>
    </S.Container>
  );
};
