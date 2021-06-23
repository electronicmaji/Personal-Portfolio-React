import { IconButton } from '@chakra-ui/button'
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Spacer } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { VStack } from '@chakra-ui/layout';
import { motion } from "framer-motion"
import { FaSun,FaMoon, FaInstagram,FaGithub,FaLinkedin } from 'react-icons/fa'
import Menu from "./components/Menu";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Portfolio from "./components/Portfolio";
import Background from "./components/Background";
import Contact from "./components/Contact";
import { CSSReset, extendTheme,ThemeProvider, theme, ITheme, } from "@chakra-ui/react"
import { Route, Switch } from 'react-router';



function App() {

  
  return (
   <VStack p={5}> 
     <Menu></Menu>
     <Switch>
       <Route path="/" component={Body} exact />
       <Route path="/portfolio" component={Portfolio} />
       <Route path="/background" component={Background} />
       <Route path="/contact" component={Contact} />
     </Switch>
   </VStack>
  )
}

export default App
