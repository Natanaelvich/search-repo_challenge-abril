import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type Repository = {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  html_url: string;
};

export type RepositoryState = {
  repositories: Repository[];
  loading: boolean;
  error: boolean;
};

const initialState: RepositoryState = {
  repositories: [],
  loading: false,
  error: false,
};

export const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRepositoriesAction: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = false;
    },
    getRepositoriesSuccessAction: (
      state,
      action: PayloadAction<Repository[]>,
    ) => {
      state.repositories = action.payload;
      state.loading = false;
      state.error = false;
    },
    getRepositoriesFailureAction: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getRepositoriesAction,
  getRepositoriesFailureAction,
  getRepositoriesSuccessAction,
} = repositorySlice.actions;

export const repositoryReducer = repositorySlice.reducer;
