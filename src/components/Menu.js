import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Spacer } from '@chakra-ui/layout';
import { Link, Box, Text, Button, Stack } from "@chakra-ui/react"
import { FaSun,FaMoon,FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react"



function Menu() {

     const { colorMode } = useColorMode();
     const isDark = colorMode === "dark";

   
     const NavBar = (props) => {
          const [isOpen, setIsOpen] = React.useState(false);
          const toggle = () => setIsOpen(!isOpen);
          const { colorMode, toggleColorMode } = useColorMode(); 
          const isDark = colorMode === "dark";

        
          return (
            <NavBarContainer {...props}>
              <MenuToggle toggle={toggle} isOpen={isOpen} />
              <MenuLinks isOpen={isOpen} />
              <ColorToggle toggleColorMode={toggleColorMode} isDark={isDark} />
            </NavBarContainer>
          );
        };
        
        const CloseIcon = () => (
          <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <title>Close</title>
            <path fill={isDark ? "white" : "gray.700"}
              
              d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
            />
          </svg>
        );
        
        const MenuIcon = () => (
          <svg
            width="24px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill= {isDark ? "white" : "gray.200"}
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        );
        
        const MenuToggle = ({ toggle, isOpen }) => {
          return (
            <Box display={{ base: "block", md: "2", isRound: "true" }} onClick={toggle}>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </Box>
          );
        };

        const ColorToggle = ({ toggleColorMode, isDark }) => {
          return (
            <Box display={{ base: "block", md: "2", isRound: 'true' }} color={isDark ? "gray.200" : "gray.500"}
             onClick={toggleColorMode}> {isDark ? <FaSun /> : <FaMoon />}
            </Box>
          );
        };
        
        const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
          return (
            <Link href={to}
            style={{
              fontWeight: 600,
              padding: "4px 6px",
              borderRadius: "6px",
              display: "inline-block"
            }}
            _hover={{
              backgroundColor: "gray.300"
            }}
            >
              <Text color={isDark ? "gray.200" : "gray.700"} display="block" {...rest}>
                {children}
              </Text>
            </Link>
          );
        };
        
        const MenuLinks = ({ isOpen }) => {
          return (
            <Box
              display={{ base: isOpen ? "block" : "none", md: "block" }}
              flexBasis={{ base: "100%", md: "auto" }}
            >
              <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
              >
                <MenuItem as="Link" to="/">Home</MenuItem>
                <MenuItem as="Link" to="/portfolio">Portfolio </MenuItem>
                <MenuItem as="Link" to="/background">Background </MenuItem>
                <MenuItem as="Link" to="/contact" isLast>Contact</MenuItem>
              </Stack>
            </Box>
          );
        };
        
        const NavBarContainer = ({ children, ...props }) => {
          return (
            <Flex
              as="nav"
              align="center"
              justify="space-between"
              wrap="wrap"
              w="100%"
              mb={8}
              p={8}
              bg={["primary.500", "primary.500", "transparent", "transparent"]}
              color={["white", "white", "primary.700", "primary.700"]}
              {...props}
            >
              {children}
            </Flex>
          );
        };


     return (
<Flex as="nav"  align="center" w="100%"> 
<NavBar></NavBar>
</Flex>
)
}


export default Menu