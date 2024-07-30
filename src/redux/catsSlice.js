import{createSlice,createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios"
const initialState={
    item:[],
    status:"start",
    error:null
}
const url="https://66a07b887053166bcabb8cd6.mockapi.io/cats"

export const fetchCats=createAsyncThunk("cats/fetchCats",async()=>{
    //return ở đây là hàm số ở dưới
    // const res=await axios.get(url)
    // return res.data
})
// export const deleteCat=createAsyncThunk("cats/deleteCat",async(id)=>{
   
//     await axios.delete(url+"/"+id)
//     return id
// })

// export const addNewCat=createAsyncThunk("cats/addNewCat",async(cat)=>{
   
//     const res=await axios.post(url,cat)
//     return res.data
// })

// export const reCheckCat=createAsyncThunk("cats/reCheckCat",async(cat)=>{
   
//     const res=await axios.put(url+"/"+cat.id,{...cat,checked:!cat.checked})
//     return res.data
// })







export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (userId, { extra }) => {
      //const { apiClient } = extra;
      const response = await axios.get(url);
      return response.data;
    }
  );
  
// const catsSlice=createSlice({
    // name:"cats",
    // initialState
    // redducers:{}
    
   
        
        // .addCase(deleteCat.fulfiled,(state,action)=>{
        //    state.cats=state.cats.filter(item=>item.id!==action.payload)
        // })
        // .addCase(addNewCat.fulfiled,(state,action)=>{
        //     state.cats=[...state.cats,action.payload]
        //  })
        //  .addCase(reCheckCat.fulfiled,(state,action)=>{
        //     state.cats=state.cats.map(item=>item.id===action.payload.id?{...item,checked:!item.checked}:item)
        //  })
    // }
// })

const catsSlice = createSlice({
    name: "cats",
    initialState: {
      data: null,
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
          state.data = action.payload;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
  });
  
export default catsSlice.reducer