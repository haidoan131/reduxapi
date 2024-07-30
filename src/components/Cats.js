import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"

import {fetchUserData,deleteCat,addNewCat} from "./../redux/productapiSlice"

import { Table, Button } from 'reactstrap';




export default function Cats() {
    const dispatch=useDispatch()
    const{cats,status,error}=useSelector(state=>state.cats)
  useEffect(()=>{
    if(status=="start")
     dispatch(fetchUserData())
  },[])

  if(status=="loading") return <div>loading..</div>
  if(status=="failed") return <div>{error}</div>
  const handle_delete=(id)=>{
    dispatch(deleteCat(id))
  }
  const handle_add=(cat)=>{
    dispatch(addNewCat(cat))
  }
  return (
    <div>
        
      <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Username
      </th>
    </tr>
  </thead>
  <tbody>
   {
   cats&& cats.map((item,index)=>
        <tr>
    <th scope="row">
     {item.id}
    </th>
    <td>
      {item.name}
    </td>
    <td>
     {item.checked?"true":"false"}
    </td>
    <td>
     <Button onClick={()=>handle_delete(item.id)}>delete</Button>
    </td>
  </tr>
        
     )
   }
   
    
  </tbody>
</Table>


    </div>
  )
}
