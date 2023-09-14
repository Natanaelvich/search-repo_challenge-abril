import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container =
  Animated.createAnimatedComponent(styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
  })`
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
  `);

export const Image = styled.Image`
  border-radius: 26px;
  width: 52px;
  height: 52px;
  background: #e1e4e8;
`;

export const WrapperDesc = styled.View`
  gap: 1px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.38px;
  max-width: 90%;
`;

export const Owner = styled.Text`
  color: #48484a;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

export const NumberStars = styled.Text`
  color: #48484a;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.078px;
  margin-left: auto;
  align-self: flex-start;
`;
