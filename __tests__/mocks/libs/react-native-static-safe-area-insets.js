jest.mock('react-native-static-safe-area-insets', () => ({
  StaticSafeAreaInsets: {
    safeAreaInsetsBottom: 0,
    safeAreaInsetsTop: 0,
  },
}));
