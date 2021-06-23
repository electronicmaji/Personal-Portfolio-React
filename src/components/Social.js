import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaLinkedin, FaGithub, FaBehance, FaGit } from 'react-icons/fa'

function Social() {
    return (
        <HStack alignItems="center"
        justifyContent="center" spacing="28" marginRight="0">
            <a href="https://www.linkedin.com/in/wesley-useche-b62184168/">
                <Icon as={FaLinkedin} boxSize="50" />
            </a>
            <a href="https://github.com/electronicmaji">
                <Icon as={FaGithub} boxSize="50" />
            </a>
            <a href="https://www.behance.net/usewes">
                <Icon as={FaBehance} boxSize="50" />
            </a>
            <a href="https://gitconnected.com/electronicmaji">
                <Icon link="" as={FaGit} boxSize="50" />
            </a>
        </HStack>
    )
}

export default Social