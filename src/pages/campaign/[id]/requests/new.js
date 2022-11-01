import { ArrowBackIcon } from "@chakra-ui/icons";
import { useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputRightAddon,
  InputGroup,
  Alert,
  AlertIcon,
  AlertDescription,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";

export default function NewRequest() {

  return (
    <div>
      <title>Create a Withdrawal Request</title>
      <meta name="description" content="Create a Withdrawal Request" />
      <link rel="icon" href="/logo.svg" />
      <main>
        <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6}>
          <Text fontSize={"lg"} color={"teal.400"} justifyContent="center">
            <ArrowBackIcon mr={2} />
            <a href={`/campaign/7/requests`}>Back to Requests</a>
          </Text>
          <Stack>
            <Heading fontSize={"4xl"}>Create a Withdrawal Request 💸</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form>
              <Stack spacing={4}>
                <FormControl id="description">
                  <FormLabel>Request Description</FormLabel>
                  <Textarea />
                </FormControl>
                <FormControl id="value">
                  <FormLabel>Amount in Ether</FormLabel>
                  <InputGroup>
                    {" "}
                    <Input type="number" onChange={(e) => {}} step="any" />{" "}
                    <InputRightAddon children="ETH" />
                  </InputGroup>
                </FormControl>

                <FormControl id="recipient">
                  <FormLabel htmlFor="recipient">
                    Recipient Ethereum Wallet Address
                  </FormLabel>
                  <Input name="recipient" />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg={"teal.400"}
                    color={"white"}
                    _hover={{
                      bg: "teal.500",
                    }}
                    type="submit"
                  >
                    Create Withdrawal Request
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </main>
    </div>
  );
}
