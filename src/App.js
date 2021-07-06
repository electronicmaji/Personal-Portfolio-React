import { IconButton } from '@chakra-ui/button'
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Spacer } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { VStack, Box } from '@chakra-ui/layout';
import { motion } from "framer-motion"
import { FaSun,FaMoon, FaInstagram,FaGithub,FaLinkedin } from 'react-icons/fa'
import Menu from "./components/Menu";
import Section from "./components/Section";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Portfolio from "./components/Portfolio";
import Background from "./components/Background";
import Contact from "./components/Contact";
import { CSSReset, extendTheme,ThemeProvider, theme, ITheme, } from "@chakra-ui/react"
import { Route, Switch } from 'react-router';



function App() {

  
  return (
  <Box borderWidth=".5rem" borderColor="White"  borderRadius="50px" bg="Gray.800">
   <VStack p={5}> 
     <Menu></Menu>
     <Switch>
       <Route path="/" component={Section} exact />
       <Route path="/portfolio" component={Portfolio} />
       <Route path="/background" component={Background} />
       <Route path="/contact" component={Contact} />
     </Switch>
   </VStack>
  </Box>
  )
}

export default App
