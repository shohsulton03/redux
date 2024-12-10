import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: JSON.parse(localStorage.getItem("users")) || [],
  },
  reducers: {
    addUser(state, action) {
      localStorage.setItem(
        "users",
        JSON.stringify([...state.value, action.payload])
      );
      state.value.push(action.payload);
    },
    deleteUser(state, action) {
      if (confirm("Are you sure?")) {
        const updatedUsers = state.value.filter(
          (user) => user.id !== action.payload.id
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        state.value = updatedUsers;
      }
    },
    editUser(state, action) {
      
    },
  },
});

export const { addUser, deleteUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
