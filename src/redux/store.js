import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./productSlice"
import cartSlice from "./cartSlice"
import productsapiSlice1 from './productapiSlice';
import catsSlice from './catsSlice';
const store=configureStore({
    reducer:{
        products:productSlice,
    
        cats:productsapiSlice1,
        carts:cartSlice,
        // cats:catsSlice
    }
})

export default store
