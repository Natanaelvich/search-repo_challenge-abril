import {render, screen} from '@testing-library/react-native';
import {RepositoryItem} from '../../../src/components';

// jest.mock('react-native-static-safe-area-insets');

describe('Component: RepositoryItem', () => {
  it('should be render RepositoryItem', () => {
    render(
      <RepositoryItem
        image="https://avatars.githubusercontent.com/u/69631?v=4"
        title="react"
        owner="facebook"
        stars={158000}
        onPress={() => {}}
      />,
    );

    expect(screen.getByText('react')).toBeTruthy();
    expect(screen.getByText('facebook')).toBeTruthy();
    expect(screen.getByText('158000 stars')).toBeTruthy();
  });
});
