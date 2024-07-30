import{createSlice} from "@reduxjs/toolkit"









const initialState={
    products:[
        {
            id:1,
            name:"tho",
            price:12,
            quantity:0
        },
        {
            id:2,
            name:"meo",
            price:12,
            quantity:0
        },
        {
            id:3,
            name:"ga",
            price:12,
            quantity:0
        },
        {
            id:4,
            name:"vit",
            price:12,
            quantity:0
        }
    
        ,
        {
            id:5,
            name:"cho",
            price:12,
            quantity:0
        }
        ]
}

const productSlice=createSlice({
    //.user.user là name.user
    name:"products",
    initialState,
    reducers:{
       
    }
})

// export const{changeAVG,rechecked}=studentSlice.actions
export default productSlice.reducer