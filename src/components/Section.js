import { useColorMode } from '@chakra-ui/color-mode'
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React, { useState, useEffect } from "react";
import { render } from '@testing-library/react';
import { SiGmail } from 'react-icons/si'
import Social from "./Social";
import FetchWorkplace from "./Work";



function Section() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    
    
render(); {
    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} 
            spacing="200px" p={isNotSmallerScreen ? "16" : "0"} alignSelf="Flex">
                  
                  <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="orange.50" boxShadow="lg" zIndex="10" p={.5}
                    boxSize="300px" src='https://avatars.githubusercontent.com/u/2168822?v=4' />
                
                
                <Box mt={isNotSmallerScreen ? "0" : "16"} align='left' p={8} alignSelf='center'>
                    <Text fontSize="3.2rem" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="4rem" fontWeight="bold" bgGradient="linear-gradient( 180deg,  rgba(253,185,83,1) 11.4%, rgba(255,138,0,1) 70.2% )" bgClip='text'>Wesley Useche</Text>
                    <FetchWorkplace></FetchWorkplace>
                    <Text color={isDark ? "gray.200" : "gray.500"}> </Text>
                <Button leftIcon={<SiGmail />} size="lg" mt={8} boxShadow="0 6px 30px -10px #fbd38d" colorScheme="orange" onClick={() => window.open("https://www.google.com")}>Contact Me</Button>
                </Box>
                

              
            </Flex> 
            <Social alignItems="center"
      justifyContent="center"></Social>
        </Stack>
        
    )

}
}

export default Section