import{createSlice,createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios"



//define the initial state for products
const initialState={
    item:[],
    status:"start",
    error:null
}
//name/action_creator
// export const fetchProducts=createAsyncThunk("products/fetchProducts",async()=>{
//     const respone=await axios.get("https://66a07b887053166bcabb8cd6.mockapi.io/student")
//     return respone.data
// })

const url="https://66a07b887053166bcabb8cd6.mockapi.io/cats"
export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (userId, { extra }) => {
      //const { apiClient } = extra;
      const response = await axios.get(url);
      return response.data;
    }
  );
  
export const deleteCat=createAsyncThunk("user/deleteCat",async(id)=>{
   
    await axios.delete(url+"/"+id)
    return id
})
export const addNewCat=createAsyncThunk("cats/addNewCat",async(cat)=>{
   
    const res=await axios.post(url,cat)
    return res.data
})


//create the products slice
// const productsapiSlice=createSlice({
//     name:"productsapi",
//     initialState,
//     reducers:{},
//     extraReducers:(builder)=>{
//         builder
//             .addCase(fetchProducts.pending,(state)=>{
//                 state.status="loading"
//             })
//             .addCase(fetchProducts.fulfiled,(state,action)=>{
//                 state.status="succeeded"
//                 state.items=action.payload
//             })
//             .addCase(fetchProducts.rejected,(state,action)=>{
//                 state.status="failed"
//                 state.error=action.error.message
//             })
//     }
// })
//export the async thunk and the slice reducer
// export default productsapiSlice.reducer

const userSlice = createSlice({
    name: "cats",
    initialState: {
      cats: null,
      status: "start",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserData.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.cats = action.payload;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
          .addCase(deleteCat.fulfilled,(state,action)=>{
           state.cats=state.cats.filter(item=>item.id!==action.payload)
        })
               .addCase(addNewCat.fulfilled,(state,action)=>{
            state.cats=[...state.cats,action.payload]
         })
    },
  });
  
  export default userSlice.reducer;