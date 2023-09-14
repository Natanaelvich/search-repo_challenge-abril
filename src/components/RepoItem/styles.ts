import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
`;

export const Image = styled.Image`
  border-radius: 26px;
  width: 52px;
  height: 52px;
  background: #e1e4e8;
`;

export const WrapperDesc = styled.View`
  gap: 1px;
`;

export const Title = styled.Text`
  color: #000;
  /* font-family: SF Pro Text; */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.38px;
`;

export const Owner = styled.Text`
  /* color: var(--default-system-gray-03-dark, #48484a); */
  font-family: SF Pro Text;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
`;

export const NumberStars = styled.Text`
  /* color: var(--default-system-gray-03-dark, #48484A); */
  font-family: SF Pro Text;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.078px;
  margin-left: auto;
  align-self: flex-start;
`;
