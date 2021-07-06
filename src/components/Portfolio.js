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
          <Flex
            flex=".5"
            gridGap={4}
            transition="1.7s linear"
          >
            <Box overflow="hidden" borderRadius={50} transition="1.7s linear">
              <Image
                src="https://picsum.photos/id/1001/3000/2000"
                transform="scale(1)"
                transition="1.7s ease-in-out"
                h="30rem"
                objectFit="cover"
                _hover={{
                  width: "full",
                  transition: "width 1.7s ease-in",
                }}
              />
            </Box>
            <Box overflow="hidden" borderRadius={50}>
              <Image 
                transition="width 1.7s ease-in-out"
                h="30rem"
                objectFit="cover"
                _hover={{
                  width: "full",
                  transition: "width 1.7s ease-in"
                }}
                src="https://picsum.photos/id/1002/3000/2000"
              />
            </Box>
            <Box overflow="hidden" borderRadius={50}>
              <Image
                transform="scale(1)"
                transition=".3s ease-in-out"
                h="30rem"
                objectFit="cover"
                _hover={{
                  width: "full",
                  transition: "width 1.7s ease-in"
                }}
                src="https://picsum.photos/id/1003/3000/2000"
              />
            </Box>
            <Box overflow="hidden" borderRadius={50}>
              <Image
                transform="scale(1)"
                transition=".3s ease-in-out"
                h="30rem"
                objectFit="cover"
                _hover={{
                  width: "full",
                  transition: "width 1.7s ease-in"
                }}
                src="https://picsum.photos/id/1004/3000/2000"
              />
            </Box>
            <Box overflow="hidden" borderRadius={50}>
              <Image
                transform="scale(1)"
                transition=".3s ease-in-out"
                h="30rem"
                objectFit="cover"
                _hover={{
                  width: "full",
                  transition: "width 1.7s ease-in"
                }}
                src="https://picsum.photos/id/1005/3000/2000"
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Flex>
  );

export default Portfolio
