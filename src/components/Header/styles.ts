import styled from 'styled-components/native';
import {safeTopArea} from '../../utils/safeArea';

export const Container = styled.View`
  background: rgba(249, 249, 249, 0.8);
  padding: ${safeTopArea}px 12px 12px;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

export const WrapperIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  hitSlop: 24,
})``;

export const Title = styled.Text`
  color: #000;
  /* font-family: SF Pro Text; */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.38px;
`;
