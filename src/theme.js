import { mode, GlobalStyleProps, Styles } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react";



const styles = {
  global: (props) => ({
    "body": {
      color: mode('black', 'white')(props),
      background: mode('linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)', '#CBD5E0')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
};

const theme = extendTheme({
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
  components,
  styles
    },
  },
})


export default theme;