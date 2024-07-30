import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Container, Row } from 'reactstrap';
import Product from './../product/Product';

export default function Products() {
  const dispatch=useDispatch()
  const prodcuts=useSelector(state=>state.products.products)
  return (
    <div>
        {
          <Container>
          <Row>
           {
              prodcuts.map((item,index)=>(
                <Product key={index} product={item} />
              ))
           }
            </Row>
            </Container>
        }
    </div>
  )
}
