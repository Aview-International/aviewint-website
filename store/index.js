import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './reducers/user.reducer';
import instagramReducer from './reducers/instagram.reducer';
import youtubeReducer from './reducers/youtube.reducer';
import messagesReducer from './reducers/messages.reducer';
import aviewReducer from './reducers/aview.reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    instagram: instagramReducer,
    youtube: youtubeReducer,
    messages: messagesReducer,
    aview: aviewReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({});
    if (process.env.NODE_ENV === 'development') middleware.push(logger);
    return middleware;
  },
});

export default store;
