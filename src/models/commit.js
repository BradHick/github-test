import { client } from '../client/client';
import Immutable from 'seamless-immutable';


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
        commits: payload.data || payload,
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
        errors: payload.errors || payload,
        loading: false
      });
    }
  },
  effects: (dispatch) => ({
    fetchCommits(username, repoName){
      dispatch.commit.fetchCommitsPending();
      return client.get(`${url}/${username}/${repoName}/commits`)
        .then(res => {
          dispatch.commit.fetchCommitsFulfiled(res.data);
        })
        .catch(err =>{
          dispatch.commit.fetchCommitsRejected(err);
        });
    }
  })

};

export default commit;