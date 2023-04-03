import React from "react";
import logo from "../assest/messoMart.png";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img,
  Image,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"

export default function Navbar1() {
  const { isOpen, onToggle } = useDisclosure();
  const iconImg = useBreakpointValue({ base: "none", md: "block" });
  // const userLogin = useSelector(state => state.userLogin)
  // const {data} = userLogin;
  // const dispatch = useDispatch();

  // const logoutHandler = () =>{
  //   console.log("Logout")
  // }
  const username = localStorage.getItem("name") || null

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        alignItems="center"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}

        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Box w={"50px"}>
            <Image display={iconImg} objectFit={"cover"} src={logo} />
          </Box>

          <Box
            display={"flex"}
            alignItems="center"
            class="searchIcon"
            paddingLeft={{ base: "20px", md: "5rem" }}
            paddingRight={"20px"}
          >
            <Search2Icon />
          </Box>
          <Box display={"flex"} alignItems="center" className="searchbox">
            <Input
              placeholder="Try Saree, Kurti or Search by Product Code"
              width="400px"
            />
          </Box>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} mr={10}>
          <DesktopNav />
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={10}
          alignItems="center"
        >
          <Box
            as={"a"}
            fontSize={"2xl"}
            fontWeight={400}
            variant={"link"}
            href={"/signup"}
          >
            {/* Sign In */}
            {username ? username : <CgProfile />}
          </Box>



          {/* {data ?(
  <NavDropdown title={data.username}>
    <LinkContainer to="/profile">
      <NavDropdown.Item>
        Profile
      </NavDropdown.Item>
    </LinkContainer>
      <NavDropdown.Item onClick={logoutHandler}>
        Logout
      </NavDropdown.Item>
  </NavDropdown>):(<LinkContainer to="login">
    
      <i className="CgProfile"></i>
      signin
  </LinkContainer>
)} */}





          {/* <Box>
          <p>Admin</p>
          </Box> */}
          <Box
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"2xl"}
            fontWeight={600}
            color={"black"}
            // bg={"pink.400"}
            href={"/signup"}
            _hover={{
              bg: "pink.300",
            }}
          >
            {/* Sign Up */}
            {/* <Link to='/signup' ></Link> */}
              <AiOutlineShoppingCart />
              
          </Box>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={10}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"end"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

//   interface NavItem {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }

const NAV_ITEMS = [
  {
    label: "Download App",
    children: [
      {
        label: "Download From a",
      },
      {
        //   label: 'Download From a',
        subLabel: "Get it on GOOGLE PLAY",

        href: "#",
      },
      {
        subLabel: "Available on the APP STORE",
        href: "#",
      },
    ],
  },
  {
    label: "Become a Supplier",
  },
];

// export default Navbar1
