import { mode, GlobalStyleProps, Styles } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react";



const styles = {
  global: props => ({
    body: {
      color: mode('black', 'white')(props),
      background: mode('linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)', 'linear-gradient(to right, #141e30, #243b55)')(props),
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
  components,
  styles
})

export default theme;