import {Platform} from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export const safeBottomArea = Platform.select({
  ios: StaticSafeAreaInsets.safeAreaInsetsBottom,
  android: 0,
  default: 0,
});

export const safeTopArea = Platform.select({
  ios: StaticSafeAreaInsets.safeAreaInsetsTop,
  android: 0,
  default: 0,
});
