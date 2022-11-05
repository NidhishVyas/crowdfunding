import React from "react";
import {
  //   Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Heading,
  //   Text,
  useColorModeValue,
  //   InputRightAddon,
  //   InputGroup,
  //   Alert,
  //   AlertIcon,
  //   AlertDescription,
  //   FormHelperText,
  //   Textarea,
} from "@chakra-ui/react";
// import { ArrowBackIcon } from "@chakra-ui/icons";

export default function NewCampaign() {
  return (
    <div>
      <title>New Campaign</title>
      <meta name="description" content="Create New Campaign" />
      <link rel="icon" href="/logo.svg" />
      <main>
        <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6}>
          <Stack>
            <Heading fontSize={"4xl"}>Create a New Account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form>
              <Stack spacing={4}>
                <FormControl id="campaignName">
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="campaignName">
                  <FormLabel>E-mail</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="campaignName">
                  <FormLabel>Password</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="imageUrl">
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="url" />
                </FormControl>
                <Stack spacing={10}>
                  <Link
                    py={2}
                    rounded={"lg"}
                    bg={"red.400"}
                    textAlign={"center"}
                    color={"white"}
                    _hover={{
                      bg: "red.500",
                    }}
                    href="/"
                  >
                    Login
                  </Link>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </main>
    </div>
  );
}
