import SwitchTheme from './toggleMode';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  Container
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';



export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
  const routeChange = (path) =>{
    navigate(path);
  }

  return (
    <Box bg={useColorModeValue('#ffffff40', '#20202380')} px={4}>
      <Container maxW="container.md">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            marginLeft=""
          />
          <HStack spacing={8} alignItems={'center'}>
            <Button 
            variant='ghost' 
            onClick={ () => routeChange('/')}
            fontWeight={700}
            > ffrankings.ai </Button>

            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Button 
              variant='ghost' 
              onClick={ () => routeChange('./rankings')}
              fontWeight={500}
              > Rankings </Button>
            </HStack>
          </HStack>
          <SwitchTheme></SwitchTheme>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Button 
                variant='ghost' 
                onClick={ () => routeChange('./rankings')}
                fontWeight={500}
                > Rankings </Button>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}