import {render, screen} from '@testing-library/react-native';
import {RepositoryItem} from '../../../src/components';

// jest.mock('react-native-static-safe-area-insets');

describe('Component: RepositoryItem', () => {
  it('should be render RepositoryItem', () => {
    render(
      <RepositoryItem
        repository={{
          id: 10270250,
          html_url:
            'https://github.com/Natanaelvich/devmetrics_show-case-expo-router',
          name: 'devmetrics_show-case-expo-router',
          owner: {
            login: 'Natanaelvich',
            avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
          },
          stargazers_count: 158000,
        }}
        onPress={() => {}}
      />,
    );

    expect(screen.getByText('react')).toBeTruthy();
    expect(screen.getByText('facebook')).toBeTruthy();
    expect(screen.getByText('158000 stars')).toBeTruthy();
  });
});
