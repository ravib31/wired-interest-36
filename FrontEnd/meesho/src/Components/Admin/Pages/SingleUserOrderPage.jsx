import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tbody,
    Th,
    Tr
} from '@chakra-ui/react';
import { useEffect } from 'react'
import axios from "axios"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { get_singleuserdetails } from '../Redux/AdminRedux/action';
import { store } from '../Redux/store';
import { OrderTable } from './OrderTable';


interface IBlogTags {
    tags: Array<string>;
    marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

interface BlogAuthorProps {
    date: Date;
    name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const SingleUserOrderPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_singleuserdetails)
    }, [])
    const { SingleUser, isLoading, isError } = useSelector((store) => { return { SingleUser: store.SingleUser, isLoading: store.isLoading, isError: store.isError } })
    console.log("Singleuser", SingleUser)
    console.log("order cart",SingleUser.order.OrderedItems)
    if (isLoading) {
        return <h1>Loading... </h1>
    }
    if (isError) {
        return <h1>Error ...</h1>
    }
    return (
 //        <h1>Wokring</h1> )}
        
<Container maxW={'7xl'} p="12">
    <Heading as="h1">Single User Details Page</Heading>
    <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
                width={{ base: '100%', sm: '85%' }}
                zIndex="2"
                marginLeft={{ base: '0', sm: '5%' }}
                marginTop="5%">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image
                        borderRadius="lg"
                        src={
                            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                        }
                        alt="some good alt text"
                        objectFit="contain"
                    />
                </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                    // bgGradient={useColorModeValue(
                    //     'radial(orange.600 1px, transparent 1px)',
                    //     'radial(orange.300 1px, transparent 1px)'
                    // )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                />
            </Box>
        </Box>
        <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <BlogTags tags={['Orders', 'User Details']} />
            <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    User Credentials
                </Link>
            </Heading>
            <VStack>
                <HStack>
                    <Text
                        as="p"
                        marginTop="2"
                       // color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                        as='b'
                    >
                        ID:
                    </Text>
                    <Text as="p"
                        marginTop="2"
                       // color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg" as='b'>
                        {SingleUser._id}
                    </Text>
                </HStack>
                <HStack>
                    <Text
                        as="p"
                        marginTop="2"
                       // color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                        as='b'
                    >
                        Username:
                    </Text>
                    <Text as="p"
                        marginTop="2"
                      //  color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg" as='b'>
                        {SingleUser.username}
                    </Text>
                </HStack>
                <HStack>
                    <Text
                        as="p"
                        marginTop="2"
                      //  color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                        as='b'
                    >
                        Email:
                    </Text>
                    <Text as="p"
                        marginTop="2"
                      //  color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg" as='b'>
                        {SingleUser.email}
                    </Text>
                </HStack>
                <HStack>
                    <Text
                        as="p"
                        marginTop="2"
                      //  color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                        as='b'
                    >
                        Age:
                    </Text>
                    <Text as="p"
                        marginTop="2"
                       // color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg" as='b'>
                        {SingleUser.age}
                    </Text>
                </HStack>
                <HStack>
                    <Text
                        as="p"
                        marginTop="2"
                       // color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                        as='b'
                    >
                        Location:
                    </Text>
                    <Text as="p"
                        marginTop="2"
                      //  color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg" as='b'>
                        {SingleUser.location}
                    </Text>
                </HStack>
                <HStack>
                    <Text
                        as="p"
                        marginTop="2"
                      //  color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                        as='b'
                    >
                        Account Type:
                    </Text>
                    <Text as="p"
                        marginTop="2"
                     //   color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg" as='b'>
                        {SingleUser.type}
                    </Text>
                </HStack>
            </VStack>
            <Text
                as="p"
                marginTop="2"
            //    color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg">
            </Text>

        </Box>
    </Box>
    <Heading as="h2" marginTop="5">
        User Order List
    </Heading>
    <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                    <Tr>
                        <Th>Image</Th>
                        <Th>Item Name</Th>
                        <Th>Category</Th>
                        <Th>Price</Th>
                       <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {SingleUser.order.OrderedItems.map((el)=><OrderTable key={el.imageURL} {...el} />)}
                </Tbody>
            </Table>
        </TableContainer>
</Container>
 )
}

export default SingleUserOrderPage;
