import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// 2. createAsyncThunk is an helper function or #### action #### that can open a connection to an API and return a data.
// 5. export the thunk function and get it in the our component.
export const getUsers = createAsyncThunk('user/getUsers',
  async (_, thunkAPI) => {
    // 8. handle the error if the request is not successful and return the error to the thunk.
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch(`http://localhost:3005/users`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  });

// inser new user
export const insertUser = createAsyncThunk(`user/insertUser`,
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(`http://localhost:3005/users`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
// delete user
export const deleteUser = createAsyncThunk(`user/deleteUser`,
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
// update user
export const updateUser = createAsyncThunk(`user/updateUser`,
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
// 1. Create a slice for users
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  // 3. the extraReducers used here cuz we have an action that crated outside the createSlice function.
  extraReducers: {
    // 4. get users
    [getUsers.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      // console.log(action);
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // insert new user
    [insertUser.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    },
    [insertUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // delete user
    [deleteUser.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    [deleteUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // update user
    [updateUser.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = state.users.map(user => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
    },
    [updateUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});
export default userSlice.reducer;