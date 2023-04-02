import React from "react";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import {StarIcon} from '@chakra-ui/icons'

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
  Stack,
  Button,
  Tab,
} from "@chakra-ui/react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      {/* <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      /> */}
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const getData = (id) => {
    axios

      .get(`http://localhost:8080/product/${id}`)
      .then((res) => {
        setData(res.data);
        
      })
      .catch((err) => {
       
      });
  };

  // console.log(data);
  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <Container maxW={"6xl"} p="12" border="1px solid gray">
      {/* <Heading as="h1">Stories by Chakra Templates</Heading> */}
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          color="#FFFFFF"
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", xl: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
            boxShadow="Base"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                // border="1px solid red"
                width="60%"
                borderRadius="lg"
                src={data?.productImg}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
        </Box>
        <Box
          ml="-200px"
          textAlign="start"
          // border="2px solid red"
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["new"]} />
          <Heading as="h1" size="lg">
            {/* <Link textDecoration="none" _hover={{ textDecoration: 'none' }}> */}
            {data?.title}
            {/* </Link> */}
          </Heading>
          <Text
            bgColor="green"
            width="60px"
            borderRadius="10px"
            color="white"
            textAlign="center"
            fontSize="20px"
            marginTop="5px"
            
          >
            {data?.rating}<span style={{width:"70px"}}><StarIcon/></span>
          </Text>
          <Text color="gray">{data?.reviews}</Text>
          <Heading as="h1" size="md">
            {data?.offerprice}
          </Heading>
          <Text>{data?.mainprice}</Text>
          <Text>{data?.offer}</Text>
          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
          <br />
          <br />
          <br />

          <Stack direction="row" spacing={4}>
            <Button onClick={()=>{}}
              w="300px"
              colorScheme="gray"
              variant="solid"
              border="1px solid gray"
            >
              Add To Cart
            </Button>
            <Button onClick={()=>navigate("/checkout")} w="300px" colorScheme="pink" variant="solid">
              Buy Now
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default SinglePage;
