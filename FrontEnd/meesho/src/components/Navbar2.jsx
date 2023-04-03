import {
  Box,
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function Navbar2() {
  const { isOpen, onToggle } = useDisclosure();

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
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          {/* <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            /> */}
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          {/* <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Women Ethnic
            </Text> */}

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
          </Stack> */}
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
    <Stack direction={"row"} spacing={12} alignContent={"center"}>
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
      display={"block"}
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
    <Stack spacing={1} onClick={children && onToggle}>
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

const NAV_ITEMS = [
  {
    label: "Women Ethnic",
    children: [
      {
        label: "Saree",
        subLabel: "All Saree",
        href: "/womenpage",
      },
      {
        label: "Kurtis",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Kurta Sets",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Suits & Dress material",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Other Ethnic",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Women Western",
    children: [
      {
        label: "Topwear",
        subLabel: "Tops",
        href: "#",
      },
      {
        label: "Bottomwear",
        subLabel: "Jeans",
        href: "#",
      },
      {
        label: "Innerwear",
        subLabel: "Bra",
        href: "#",
      },
      {
        label: "Sleepwear",
        subLabel: "Babydolls",
        href: "#",
      },
    ],
  },
  {
    label: "Men",
    children: [
      {
        label: "Topwear",
        subLabel: "All Top Wear",
        href: "#",
      },
      {
        label: "Bottom Wear",
        subLabel: "All Bottom Wear",
        href: "#",
      },
      {
        label: "Men Accessories",
        subLabel: "All Men Accessories",
        href: "#",
      },
      {
        label: "Men Footwear",
        subLabel: "All Footwear",
        href: "#",
      },
      {
        label: "Ethnic Wear",
        subLabel: "All Bottom Wear",
        href: "#",
      },
    ],
  },
  {
    label: "Kids",
    children: [
      {
        label: "Boys & Girls 2+ Years",
        subLabel: "Dresses",
        href: "#",
      },
      {
        label: "Infant 0-2 Years",
        subLabel: "Rompers",
        href: "#",
      },
      {
        label: "Toys & Accessories",
        subLabel: "Soft Toys",
        href: "#",
      },
      {
        label: "Baby Care",
        subLabel: "All Baby Care",
        href: "#",
      },
    ],
  },
  {
    label: "Home & Kitchen",
    children: [
      {
        label: "Home Furnishing",
        subLabel: "Bedsheets",
        href: "#",
      },
      {
        label: "Home Decor",
        subLabel: "All Home Decor",
        href: "#",
      },
      {
        label: "Kitchen & Dining",
        subLabel: "Kitchen Storage",
        href: "#",
      },
    ],
  },
  {
    label: "Beauty & Health",
    children: [
      {
        label: "Make up",
        subLabel: "Face",
        href: "#",
      },
      {
        label: "Wellness",
        subLabel: "Sanitizers",
        href: "#",
      },
      {
        label: "Skincare",
        subLabel: "Deodorants",
        href: "#",
      },
    ],
  },
  {
    label: "Jewellery & Accessories",
    children: [
      {
        label: "Jewellery",
        subLabel: "Jewellery Set",
        href: "#",
      },
      {
        label: "Women Accessories",
        subLabel: "Bags",
        href: "#",
      },
    ],
  },
  {
    label: "Bags & Footwear",
    children: [
      {
        label: "Women Bags",
        subLabel: "All Women Bags",
        href: "#",
      },
      {
        label: "Men Bags",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
      {
        label: "Men Footwear",
        subLabel: "Shoes",
        href: "#",
      },
      {
        label: "Women Footwear",
        subLabel: "Shoes",
        href: "#",
        href: "#",
      },
    ],
  },
  {
    label: "Electronics",
    children: [
      {
        label: "Mobile & Accessories",
        subLabel: "All Mobile & Accessories",
        href: "#",
      },
      {
        label: "Appliance",
        subLabel: "Appliance",
        href: "#",
      },
    ],
  },
];
