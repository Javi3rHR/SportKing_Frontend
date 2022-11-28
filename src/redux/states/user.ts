import { UserInfo } from '@/models';
import { clearLocalStorage, persistLocalStorage } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';

export const EmptyUserState: UserInfo = {
	user_id: 0,
	username: '',
	email: '',
	roles: [],
};

export const UserKey = 'user';

export const userSlice: any = createSlice({
	name: 'user',
	initialState:
		localStorage.getItem('user') != null
			? JSON.parse(localStorage.getItem('user') as string)
			: EmptyUserState,
	reducers: {
		createUser: (state, action) => {
			persistLocalStorage<UserInfo>(UserKey, action.payload);
			return action.payload;
		},
		updateUser: (state, action) => {
			const result = { ...state, ...action.payload };
			persistLocalStorage<UserInfo>(UserKey, result);
			return result;
		},
		resetUser: () => {
			clearLocalStorage(UserKey);
			return EmptyUserState;
		},
	},
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
