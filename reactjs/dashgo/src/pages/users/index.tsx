import React from "react";
import { 
  Box, 
  Flex, 
  Heading, 
  Button, 
  Icon, 
  Table,
  Thead,
  Th, 
  Tr,
  Td,
  Checkbox,
  Tbody,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Link from "next/link";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Pagination } from "../../components/Pagination";

export default function UsersList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
       <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuarios</Heading>

            <Link href="/users/create" passHref>
              <Button 
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar nova
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.600" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuarios</Th>
                { isWideVersion && <Th>Data de cadstro</Th> }
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas coronel</Text>
                    <Text fontSize="small" color="gray.300">lccoronel7@icloud.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de abril de 2021</Td> }
                <Td>
                  <Button 
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    { isWideVersion && 'Editar' }
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}