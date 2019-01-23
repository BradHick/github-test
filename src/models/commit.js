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

  },
  effects: (dispatch) =>{
    
  }
};

export default commit;