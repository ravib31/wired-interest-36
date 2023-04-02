import { useState } from 'react';
import axios from "axios"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    InputGroup,
    InputRightElement,
    useToast
} from '@chakra-ui/react';

import { FiEye, FiEyeOff } from "react-icons/fi"

export default function SignIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const toast = useToast()

    const handleLogin = () => {
        const payload = {
            username, password
        }
        axios.post(`http://localhost:4500/user/login`, payload)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("name", username);
                toast({
                    title: 'Login Successful.',
                    description: "We are redirecting you to the product page.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            })
            .catch((error) => {
                toast({
                    title: 'Login UnSuccessful.',
                    description: error.response.data,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            })
            console.log("username")
    }

    return (
        <Flex minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={
                useColorModeValue('gray.50', 'gray.800')
            }>
            <Stack spacing={8}
                mx={'auto'}
                maxW={'lg'}
                py={12}
                px={6}>
                <Box rounded={'lg'}
                    bg={
                        useColorModeValue('white', 'gray.700')
                    }
                    boxShadow={'lg'}
                    p={8}>
                    <Stack align={'center'}>
                        <Image src='https://images.meesho.com/images/marketing/1661417516766.webp' alt='Meesho_Login' />
                        <Heading fontSize={'2xl'}>Sign In to view your Profile</Heading>
                        <Text fontSize={'lg'}
                            color={'gray.600'}>
                            & to enjoy all of our
                            <Link color={'#F43397'}> Great Quality products </Link>at
                            <Link color={'#F43397'}> Lowest prices</Link>
                            ✌️
                        </Text>
                    </Stack>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>User Name</FormLabel>
                            <Input type="text" value={username} placeholder="Pls Enter Your Username" onChange={(e) => setUsername(e.target.value)} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={show ? "text" : "password"} value={password} placeholder="Pls Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
                                <InputRightElement>
                                    <Button h='1.75rem' size='sm' onClick={() => setShow(!show)} >
                                        {show ? <FiEyeOff /> : <FiEye />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack direction={
                                {
                                    base: 'column',
                                    sm: 'row'
                                }
                            }
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox colorScheme='red' color={'#F43397'}>Remember me</Checkbox>
                                <Link color={'#F43397'}>Forgot password?</Link>
                            </Stack>
                            <Button bg={'#F43397'}
                                onClick={handleLogin}
                                color={'white'}
                                _hover={
                                    { bg: '#D864A9' }
                                }>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>);
}
