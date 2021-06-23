import { useColorMode } from '@chakra-ui/color-mode'
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Stack, Container, Flex, Box, Text, Heading, Grid } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React, { useState, useEffect } from "react";



const Portfolio = () => (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Container maxW={["960px"]}>
        <Stack spacing={12}>
          <Heading textAlign="center" as="h2" size="2xl">
            PORTFOLIO
          </Heading>
          <Grid
            templateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
            width="100%"
            gridGap={4}
          >
            <Box overflow="hidden" borderRadius={5}>
              <Image
                src="https://picsum.photos/id/1001/300/200"
                transform="scale(1)"
                transition=".3s ease-in-out"
                w="full"
                _hover={{
                  transform: "scale(1.3)"
                }}
              />
            </Box>
            <Box overflow="hidden" borderRadius={5}>
              <Image
                transform="scale(1)"
                transition=".3s ease-in-out"
                w="full"
                _hover={{
                  transform: "scale(1.3)"
                }}
                src="https://picsum.photos/id/1002/300/200"
              />
            </Box>
            <Box overflow="hidden" borderRadius={5}>
              <Image
                transform="scale(1)"
                transition=".3s ease-in-out"
                w="full"
                _hover={{
                  transform: "scale(1.3)"
                }}
                src="https://picsum.photos/id/1003/300/200"
              />
            </Box>
            <Box overflow="hidden" borderRadius={5}>
              <Image
                transform="scale(1)"
                transition=".3s ease-in-out"
                w="full"
                _hover={{
                  transform: "scale(1.3)"
                }}
                src="https://picsum.photos/id/1004/300/200"
              />
            </Box>
            <Box overflow="hidden" borderRadius={5}>
              <Image
                transform="scale(1)"
                transition=".3s ease-in-out"
                w="full"
                _hover={{
                  transform: "scale(1.3)"
                }}
                src="https://picsum.photos/id/1005/300/200"
              />
            </Box>
            <Box overflow="hidden" borderRadius={5}>
              <Image
                transform="scale(1)"
                transition=".3s ease-in-out"
                w="full"
                _hover={{
                  transform: "scale(1.3)"
                }}
                src="https://picsum.photos/id/1006/300/200"
              />
            </Box>
          </Grid>
        </Stack>
      </Container>
    </Flex>
  );

export default Portfolio
