// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
   bookingtype:'',
   from:'',
   to:''
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setbookingtype: (state, action) => {
        state.bookingtype = action.payload;
      },
      setfrom: (state, action) => {
          state.from = action.payload;
        },
        setto:(state, action) => {
          state.to = action.payload;
        },
     }
});



export const {setbookingtype,setfrom,setto} = userSlice.actions;


export default configureStore({
  reducer: {
    user: userSlice.reducer,

  },
});
