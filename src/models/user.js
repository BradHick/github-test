import { client } from '../client/client';
import Immutable from 'seamless-immutable';

const url = '/users';

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
        errors: {},
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
        user: {},
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