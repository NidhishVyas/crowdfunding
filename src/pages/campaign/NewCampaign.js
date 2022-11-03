import React, { useState } from "react";
import {
  Flex,
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
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function NewCampaign() {

  return (
    <div>
      <title>New Campaign</title>
      <meta name="description" content="Create New Campaign" />
      <link rel="icon" href="/logo.svg" />
      <main>
        <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6}>
          <Text fontSize={"lg"} color={"teal.400"}>
            <ArrowBackIcon mr={2} />
            <a href="/"> Back to Home</a>
          </Text>
          <Stack>
            <Heading fontSize={"4xl"}>Create a New Campaign 📢</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form>
              <Stack spacing={4}>
                <FormControl id="minimumContribution">
                  <FormLabel>Minimum Contribution Amount</FormLabel>
                  <InputGroup>
                    <Input
                      type="number"
                      step="any"
                      onChange={(e) => {}}
                    />
                    <InputRightAddon children="ETH" />
                  </InputGroup>
                </FormControl>
                <FormControl id="campaignName">
                  <FormLabel>Campaign Name</FormLabel>
                  <Input
                  type="text"
                  />
                </FormControl>
                <FormControl id="description">
                  <FormLabel>Campaign Description</FormLabel>
                  <Textarea
                  />
                </FormControl>
                <FormControl id="imageUrl">
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    type="url"
                  />
                </FormControl>
                <FormControl id="target">
                  <FormLabel>Target Amount</FormLabel>
                  <InputGroup>
                    <Input
                      type="number"
                      step="any"
                      onChange={(e) => {}}
                    />
                    <InputRightAddon children="ETH" />
                  </InputGroup>
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
                    Create
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
