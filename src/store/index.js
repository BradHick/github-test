import { init } from '@rematch/core';
import models from '../models';

const store = init( {
  models
} );
window.store = store;

export default store;
