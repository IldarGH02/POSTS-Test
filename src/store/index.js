import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    persistStore,  
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from "redux-persist";

import postsReducer from "./posts/reducers"
import commentsReducer from "./comments/reducers";
import usersReducer from "./users/reducrs";
import userPostsReducer from "./userPosts/reducers";

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
    userPosts: userPostsReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
    
})

export const persistor = persistStore(store)