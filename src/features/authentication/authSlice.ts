import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface AuthState {
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    isLoggedIn: !!Cookies.get('token'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state) => {
            const token = Cookies.get('token');
            if (token) {
                state.isLoggedIn = true;
            }
        },
        logoutSuccess: (state) => {
            state.isLoggedIn = false;
            // Cookies.remove('token'); // حذف توکن از کوکی
        },
    },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
