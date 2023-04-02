import React from 'react';
import "../cart/cart.css"
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { InfoIcon,CloseIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react'
import { CartSide } from './CartSide';
import { useNavigate } from 'react-router';




const CartPage = () => {
    
    const navigate = useNavigate()

    const HandleEdit = () => {
       <CartSide />
    }

    const handlecheckout = () => {
       navigate("/checkout")
    }

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
             <Text style={{marginTop:'20px', textAlign:'left', marginLeft:'20px', fontSize:'20px'}}>Cart | <span>1 items</span></Text>

             <Box id='itemContainer'>
               <Box><Image src= "https://images.meesho.com/images/products/181165201/zro6h_512.jpg" alt="item"  maxW={20} height={20} /></Box>
               <Box>
               <Box style={{display:'flex',justifyContent:'space-between', alignItems:'center',fontSize:'18px', marginLeft:'20px', fontWeight:'500' }}><Text>Kids School Bags, Boys, Girls Multicolor Kids Bags</Text> <Button style={{marginLeft:"100px", marginTop:"10px", color:'#f43397'}} onClick={HandleEdit}>Edit</Button> </Box>
               <Box style={{display:'flex' ,textAlign:'left',gap:'50px', fontSize:'18px', marginLeft:'20px'}}><Text>Size: Free Size</Text> <Text>Qty: 1</Text> </Box>
               <Text style={{textAlign:'left',fontSize:'18px', marginLeft:'20px'}}>₹445</Text>
                
                <Button style={{fontSize:'16px',marginTop:"10px", marginBottom:"10px", width:"120px", display:'flex', justifyContent:'flex-start', marginLeft:'20px'}}> <CloseIcon /> REMOVE</Button>
               </Box>
             </Box>
           </Box> 





           <Box id='divider'></Box> 


           <Box id='cartsumm'>
              <Text style={{textAlign:'left', marginTop:'30px', fontSize:'20px', fontWeight:'500'}}>Price Details</Text>
             <Box style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}> <Text style={{textAlign:'left',fontSize:'16px', fontWeight:'500',color:'#f02397'}}>Total Product Price</Text> <Text style={{fontSize:'16px', fontWeight:'500',color:'#f02397'}}>₹625</Text></Box>
             <Box style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}> <Text style={{textAlign:'left',fontSize:'16px', fontWeight:'500',color:'#f02397'}}>Total Discounts</Text> <Text style={{fontSize:'16px', fontWeight:'500',color:'#f02397'}}>-₹66</Text></Box>
             <Divider orientation='horizontal' size='10px' />
             <Box style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}> <Text style={{textAlign:'left',fontSize:'18px', fontWeight:'500'}}>Order Total</Text> <Text style={{fontSize:'18px', fontWeight:'500'}}>₹581</Text></Box>

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
