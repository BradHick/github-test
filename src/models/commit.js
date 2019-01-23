import { client } from '../client/client';
import Immutable from 'seamless-immutable';
import { dispatch } from 'rxjs/internal/observable/pairs';


const url = '/repos';

const state = new Immutable({
  commits: [],
  errors: {},
  loading: false
});

const commit = {
  state,
  reducers:{
    fetchCommitsFulfiled: (state, payload) => {
      return state.merge({
        commits: payload.data,
        loading: false
      });
    },
    fetchCommitsPending: (state) => {
      return state.merge({
        loading: true
      });
    },
    fetchCommitsRejected: (state, payload) => {
      return state.merge({
        errors: payload.errors,
        loading: false
      });
    }
  },
  effects: (dispatch) => ({
    fetchCommits(username, repoName){
      dispatch.repo.fetchCommitsPending();
      return client.get(`${url}/${username}/${repoName}/commits`)
        .then(res => {
          dispatch.repo.fetchCommitsFulfiled(res.data);
        });
    }
  })

};

export default commit;