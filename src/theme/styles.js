import { mode } from '@chakra-ui/theme-tools'

<ChakraProvider theme={extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.400', 'black')(props),
        color: mode('black', 'white')(props),
      },
    }),
  },
})}>
  ...
</ChakraProvider>