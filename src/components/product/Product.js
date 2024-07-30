import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Col } from 'reactstrap';
import {addItem} from "./../../redux/cartSlice"
export default function Product(props) {
    const {product}=props
    const dispatch=useDispatch()
  return (
  
          <Col lg={3} md={4} sm={6} xs={6} className='' >
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {product.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {product.age}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button onClick={()=>dispatch(addItem(product))}>
      Add To Cart
    </Button>
  </CardBody>
</Card>
</Col>

  )
}
