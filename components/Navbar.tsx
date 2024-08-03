import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  HStack,
  Collapse,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const Links = [
  { title: 'Trading', link: 'trade' },
  { title: 'Inversiones', link: 'investing' },
  { title: 'Acerca', link: 'about' },
  { title: 'Fondo', link: 'fund' }
]

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  )
}

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Link href={'/'}>
              <Image src="/icon.png" alt="Firm Logo" boxSize="100px" />
            </Link>

            {isMobile ? (
              <IconButton
                aria-label="Open Menu"
                icon={<HamburgerIcon />}
                variant="outline"
                onClick={onOpen}
                display={{ base: 'block', md: 'none' }}
                size="lg"  // Increase the size of the button
                position="absolute"
            right={4}  
              />
            ) : (
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <Link href={link.link} key={link.title}>
                    <NavLink>{link.title}</NavLink>
                  </Link>
                ))}
              </HStack>
            )}
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {Links.map((link) => (
                <Link href={link.link} key={link.title}>
                  <NavLink>{link.title}</NavLink>
                </Link>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={toggleColorMode} variant="outline" width="100%">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              {colorMode === 'light' ? ' Dark Mode' : ' Light Mode'}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
