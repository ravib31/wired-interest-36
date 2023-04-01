import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

export const OrderTable = ({ imageURL, itemName, category, price, deliveryStatus }) => {
    return (
        <Tr>
            <Td><img width={"30px"} src={imageURL} alt="" /></Td>
            <Td>{itemName}</Td>
            <Td>{category}</Td>
            <Td isNumeric>₹{price}</Td>
            <Td>{deliveryStatus}</Td>
        </Tr>
    )
}