import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authentication/authSlice';
import cartReducer from './features/Orders/CartSlice';
import drawerReducer from './features/ShareSlice/drawerSlice';

// تنظیمات پیکربندی برای اسلایس cart که می‌خواهیم پرسیست شود
const cartPersistConfig = {
  key: 'cart',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer, // این اسلایس پرسیست نمی‌شود
  cart: persistReducer(cartPersistConfig, cartReducer), // این اسلایس پرسیست می‌شود
  drawer: drawerReducer,

});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




// // تایپ‌های سفارشی برای استفاده از TypeScript
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./features/authentication/authSlice";
// import cartReducer  from "./features/Orders/CartSlice";
// import drawerSlice from './features/ShareSlice/drawerSlice';

// const store = configureStore({
//     reducer :{
//         auth:authReducer,
//         cart:cartReducer ,
//     }
// })

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store