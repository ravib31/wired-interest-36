import React from 'react'
import {Box, Button, Text, Image} from '@chakra-ui/react';
import {InfoIcon, CloseIcon} from '@chakra-ui/icons';

import "../cart/cart.css"
//id='itemContainer'
const CartItem = ({imageURL,itemName,price,deliveryStatus}) => {
    return (
        <Box id= 'itemContainer' >
            <Box><Image src={imageURL} alt="item"
                    maxW={20}
                    height={20}/></Box>
            <Box>
                <Box style={
                    {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '18px',
                        marginLeft: '20px',
                        fontWeight: '500'
                    }
                }>
                    <Text>{itemName}</Text>
                    <Button style={
                        {
                            marginLeft: "100px",
                            marginTop: "10px",
                            color: '#f43397'
                        }
                    }>Edit</Button>
                </Box>
                <Box style={
                    {
                        display: 'flex',
                        textAlign: 'left',
                        gap: '50px',
                        fontSize: '18px',
                        marginLeft: '20px'
                    }
                }>
                    <Text>Delivery: {deliveryStatus}</Text>
                    <Text>Qty: 1</Text>
                </Box>
                <Text style={
                    {
                        textAlign: 'left',
                        fontSize: '18px',
                        marginLeft: '20px'
                    }
                }>₹{price}</Text>

                <Button style={
                    {
                        fontSize: '16px',
                        marginTop: "10px",
                        marginBottom: "10px",
                        width: "120px",
                        display: 'flex',
                        justifyContent: 'flex-start',
                        marginLeft: '20px'
                    }
                }>
                    <CloseIcon/>
                    REMOVE</Button>
            </Box>
        </Box>
   )
}

export default CartItem
