import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

//import React from 'react';
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
  const getData = (id) => {
    axios

      .get(`http://localhost:8085/product/${id}`)
      .then((res) => {
        setData(res.data[0]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(data);
  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <Container maxW={"6xl"} p="12" border="1px solid red">
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
                src={data.productImg}
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
            {data.title}
            {/* </Link> */}
          </Heading>
          <Text>{data.rating}</Text>
          <Text>{data.reviews}</Text>
          <Text>₹{data.price}</Text>
          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
          <br />
          <br />
          <br />

          <Stack direction="row" spacing={4}>
            <Button w="300px" colorScheme="orange" variant="solid">
              Add To Cart
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default SinglePage;
