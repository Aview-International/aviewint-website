import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({});
    if (process.env.NODE_ENV === 'development') middleware.push(logger);
    return middleware;
  },
});

export default store;
