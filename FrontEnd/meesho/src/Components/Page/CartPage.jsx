import React, { useState } from 'react';
import "../cart/cart.css"
import { Box, Button, Text } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { InfoIcon, CloseIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react'
import { CartSide } from './CartSide';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { store } from '../Admin/Redux/store';
import CartItem from './CartItem';
import { useEffect } from 'react';




const CartPage = () => {

  const [total,setTotal] = useState(0)
  const discount = 10;


  const navigate = useNavigate()

  const HandleEdit = () => {
    <CartSide />
  }

  const handlecheckout = () => {
    navigate("/checkout")
  }


  const cart = useSelector((store) => (store.UserReducer.Cart))
  console.log("cart", cart);
useEffect(()=>{
  {cart.map((el)=>{setTotal((prev)=> prev + el.price)})}
},[])

  return (
    <>
      <Box id='cart-nav'>

        <Box id="breadcrum-container">
          <Breadcrumb>
            <BreadcrumbItem> <BreadcrumbLink href='/'>Cart</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbItem><BreadcrumbLink href='/address'>Address</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbItem isCurrentPage><BreadcrumbLink href='/payment'>Payment</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbItem isCurrentPage><BreadcrumbLink href='/summary'>Summary</BreadcrumbLink></BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Text id='comp-name'>Meesho</Text>
        <Text id='cart'>Cart</Text>

      </Box>

      <Box id='cartsummary'>
        <Box id='cartitems'>
          <Text style={{ marginTop: '20px', textAlign: 'left', marginLeft: '20px', fontSize: '20px' }}>Cart | <span>{cart.length} items</span></Text>

          
            
                {
                  cart.map((el) => (
                    <CartItem key={el._id} {...el} />
                  ))
                }
 
        </Box>






        <Box id='divider'></Box>


        <Box id='cartsumm'>
          <Text style={{ textAlign: 'left', marginTop: '30px', fontSize: '20px', fontWeight: '500' }}>Price Details</Text>
          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> <Text style={{ textAlign: 'left', fontSize: '16px', fontWeight: '500', color: '#f02397' }}>Total Product Price</Text> <Text style={{ fontSize: '16px', fontWeight: '500', color: '#f02397' }}>₹{total}</Text></Box>
          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> <Text style={{ textAlign: 'left', fontSize: '16px', fontWeight: '500', color: '#f02397' }}>Total Discounts</Text> <Text style={{ fontSize: '16px', fontWeight: '500', color: '#f02397' }}>{discount}%</Text></Box>
          <Divider orientation='horizontal' size='10px' />
          <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> <Text style={{ textAlign: 'left', fontSize: '18px', fontWeight: '500' }}>Order Total</Text> <Text style={{ fontSize: '18px', fontWeight: '500' }}>₹{total - discount}</Text></Box>

          <Box id='discountbox'><InfoIcon /> Yay! Your total discount is ₹66</Box>

          <Box id='continuebox'>Clicking on ‘Continue’ will not deduct any money</Box>

          <Button id='contBtn' onClick={handlecheckout}>Continue</Button>

          <Image src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="info image" />

        </Box>
      </Box>
    </>
  )
}

export { CartPage };
