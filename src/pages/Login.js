import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function NewCampaign() {
  return (
    <div>
      <title>New Campaign</title>
      <meta name="description" content="Create New Campaign" />
      <link rel="icon" href="/logo.svg" />
      <main>
        <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6}>
          <Stack>
            <Heading fontSize={"4xl"}>Login Into Your Account</Heading>
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
                  <FormLabel>E-mail</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="imageUrl">
                  <FormLabel>Password</FormLabel>
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
                    href="/campaign"
                  >
                    Login
                  </Link>
                </Stack>
              </Stack>
              <Text color={"gray.500"} mt={3}>
                Not a member?
                <Link
                  color={"red.400"}
                  ml={1.5}
                  href="/register"
                  textDecoration={"underline"}
                >
                  Sign Up Now
                </Link>
              </Text>
            </form>
          </Box>
        </Stack>
      </main>
    </div>
  );
}
