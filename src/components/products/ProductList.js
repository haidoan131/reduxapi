import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Container, Row } from 'reactstrap';
import Product from './../product/Product';
import {fetchUserData} from "./../../redux/productapiSlice"
import { useEffect } from 'react';

export default function ProductList() {
  const dispatch=useDispatch()
  const{data,status,error}=useSelector(state=>state.user)
  useEffect(()=>{
    if(status=="start")
     dispatch(fetchUserData())
  },[])

  if(status=="loading") return <div>loading..</div>
  if(status=="failed") return <div>{error}</div>
  return (
    <div>
        {
          <Container>
          <Row>
           {
             data&& data.map((item,index)=>(
                <Product key={index} product={item} />
              ))
           }
            </Row>
            </Container>
        }
    </div>
  )
}
