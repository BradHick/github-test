import { client } from '../client/client';
import Immutable from 'seamless-immutable';


const url = '/repos';

const initialState = new Immutable({
  commits: [],
  errors: {},
  hasMoreCommits: true,
  commitPage: 1,
  loading: false
});

const commit = {
  state: initialState,
  reducers:{
    fetchCommitsFulfiled: (state, payload) => {
      if (payload.length > 0){
        return state.merge({
          commits: state.commits.concat(payload),
          commitPage: state.commitPage + 1,
          loading: false
        });
      }
      return state.merge({
        loading: false,
        hasMoreCommits: false
      });
    },
    fetchCommitsPending: (state) => {
      return state.merge({
        loading: true
      });
    },
    resetCommits: (state) => {
      return state.merge({
        commits: [],
        hasMoreCommits: true,
        commitPage: 1,
        errors: {},
        loading: false
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
    fetchCommits(params,state){
      const { commitPage, hasMoreCommits } = state.commit;
      if (hasMoreCommits){
        dispatch.commit.fetchCommitsPending();
        return client.get(`${url}/${params.username}/${params.repos}/commits?per_page=20&page=${commitPage}`)
          .then(res => {
            dispatch.commit.fetchCommitsFulfiled(res.data);
          })
          .catch(err =>{
            dispatch.commit.fetchCommitsRejected(err);
          });
      }
    }
  })

};

export default commit;