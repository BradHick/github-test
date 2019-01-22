import { client } from '../client/client';
import Immutable from 'seamless-immutable';


const url = '/repos';

const state = new Immutable({
  repos: [],
  errors: {},
  loading: false
});

const repo = {
  state,
  reducers: {
    fetchReposFulfiled: (state, payload) => {
      return state.merge({ repos: payload.data, loading: false });
    },
    fetchReposPending: (state) => {
      return state.merge({ loading: true });
    },
    fetchReposRejected: (state, payload) => {
      return state.merge({ errors: payload.errors, loading: false });
    },
    resetRepos: (state) => {
      return state.merge({ 
        repos: [],
        errors: {},
        loading: false 
      });
    }
  },
};

export default repo;