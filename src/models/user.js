import { client } from '../client/client';
import Immutable from 'seamless-immutable';


const url = '/users';

//user schema
//     login: '',
//     id: '',
//     node_id: '',
//     avatar_url: '',
//     gravatar_id: '',
//     url: '',
//     html_url: '',
//     followers_url: '',
//     following_url: '',
//     gists_url: '',
//     starred_url: '',
//     subscriptions_url: '',
//     organizations_url: '',
//     repos_url: '',
//     events_url: '',
//     received_events_url: '',
//     type: '',
//     site_admin: '',
//     name: '',
//     company: '',
//     blog: '',
//     location: '',
//     email: '',
//     hireable: '',
//     bio: '',
//     public_repos: '',
//     public_gists: '',
//     followers: '',
//     following: '',
//     created_at: '',
//     updated_at: ''

const state = new Immutable( {
  user: {},
  loading: false,
  errors: {}
});

const user = {

  state,

  reducers: {
    fetchUserFulfiled: ( state, payload ) => {
      return state.merge({
        user: payload.data || payload,
        loading: false
      });
    },

    fetchUserPending: (state) => {
      return state.merge({
        loading: true
      });
    },

    fetchUserRejected: (state, payload) => {
      return state.merge({
        errors: payload.errors || payload,
        loading: false
      });
    },

    resetUser: (state) => {
      return state.merge({
        user: {},
        loading: false,
        errors: {}
      });
    },
  },

  effects: (dispatch) => ({
    fetchUser(username){
      dispatch.user.fetchUserPending();
      return client.get(`${url}/${username}`)
        .then(res => {
          dispatch.user.fetchUserFulfiled(res.data);
        })
        .catch(err =>{
          dispatch.user.fetchUserRejected(err);
        });
    },
  })
  
};


export default user;