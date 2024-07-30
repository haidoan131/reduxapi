import React from 'react'
import { Table } from 'reactstrap';

import { Button } from 'reactstrap';
import {removeItem,clearCart} from "../../redux/cartSlice"
import {useSelector,useDispatch} from "react-redux"
export default function Cart() {
    const dispatch=useDispatch()
    const {items}=useSelector(state=>state.carts)
  return (
    <div>
    <h2>cart</h2>
    {items.length===0&&<p>your cart is emty</p>}
      <Table
>

 
  <thead>

  {items.map(item=>(
    <tr>
    <th>
     {item.id}
    </th>
    <th>
     {item.name}
    </th>
    <th>
      {item.age}
    </th>
    <th>
      <button onClick={()=>dispatch(removeItem(item.id))}>delete</button>
    </th>
  </tr>

  ))}
    
  </thead>
  <tbody> 

    {

    
    }
   
   
   
  </tbody>
</Table>
    {items.length>0&&(
       <button onClick={()=>dispatch(clearCart())}>clear</button>
    )}

    </div>
  )
}
