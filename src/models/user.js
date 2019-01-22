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
} );

const user = {

  state,

  reducers: {
    fetchUserFulfiled: ( state, payload ) => {
      return state.merge({ user: payload, loading: false });
    },

    fetchUserPending: (state) => {
      return state.merge({ loading: true });
    },

    fetchUserRejected: (state, payload) => {
      return state.merge({ errors: payload.errors, loading: false });
    },

    resetUser: (state) => {
      return state.merge({
        user: {},
        loading: false,
        errors: {}
      });
    },

    effcts: (dispatch) => ({
      fetchUser(name){
        dispatch.contact.fetchUserPending();
        return client.get(`${url}/${name}`)
          .then(res => {
            dispatch.contact.fetchUserFulfiled(res.data);
          });
      },
    })




  }


};


export default user;