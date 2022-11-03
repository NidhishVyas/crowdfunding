import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  InputRightAddon,
  InputGroup,
  FormControl,
  FormLabel,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Tooltip,
  Alert,
  AlertIcon,
  AlertDescription,
  Progress,
  CloseButton,
  FormHelperText,
  Link,
} from "@chakra-ui/react";

import { InfoIcon } from "@chakra-ui/icons";
import Confetti from "react-confetti";

function StatsCard(props) {
  const { title, stat, info } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"sm"}
      border={"1px solid"}
      borderColor={"gray.500"}
      rounded={"lg"}
      transition={"transform 0.3s ease"}
      _hover={{
        transform: "translateY(-5px)",
      }}
    >
      <Tooltip
        label={info}
        bg={useColorModeValue("white", "gray.700")}
        placement={"top"}
        color={useColorModeValue("gray.800", "white")}
        fontSize={"1em"}
      >
        <Flex justifyContent={"space-between"}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={"medium"} isTruncated>
              {title}
            </StatLabel>
            <StatNumber
              fontSize={"base"}
              fontWeight={"bold"}
              isTruncated
              maxW={{ base: "	10rem", sm: "sm" }}
            >
              {stat}
            </StatNumber>
          </Box>
        </Flex>
      </Tooltip>
    </Stat>
  );
}

export default function CampaignSingle({
  id,
  minimumContribution,
  balance,
  requestsCount,
  approversCount,
  manager,
  name,
  description,
  image,
  target,
  ETHPrice,
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [amountInUSD, setAmountInUSD] = useState();
  const { width, height } = useWindowSize();

  return (
    <div>
      <title>Campaign Details</title>
      <meta name="description" content="Create a Withdrawal Request" />
      <link rel="icon" href="/logo.svg" />
      {isSubmitted ? <Confetti width={width} height={height} /> : null}
      <main>
        {" "}
        <Box position={"relative"}>
          {isSubmitted ? (
            <Container
              maxW={"7xl"}
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 10, lg: 32 }}
              py={{ base: 6 }}
            >
              <Alert status="success" mt="2">
                <AlertIcon />
                <AlertDescription mr={2}>
                  {" "}
                  Thank You for your Contribution 🙏
                </AlertDescription>
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => setIsSubmitted(false)}
                />
              </Alert>
            </Container>
          ) : null}
          <Container
            as={SimpleGrid}
            maxW={"7xl"}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 6 }}
          >
            <Stack spacing={{ base: 6 }}>
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
              >
                Covid Relief Fund
              </Heading>
              <Text
                color={useColorModeValue("gray.500", "gray.200")}
                fontSize={{ base: "lg" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ultrices felis lacus, eget volutpat sapien tristique
                nec. Mauris laoreet faucibus varius. Pellentesque id risus
                condimentum, eleifend magna id, aliquam orci. Praesent egestas
                volutpat cursus. Aenean eu dolor quis ante pharetra commodo non
                placerat sem. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Nullam at euismod
                orci. Nulla cursus, nisi quis facilisis tempus, mi ipsum
                molestie leo, nec tincidunt diam arcu vel tellus. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </Text>
              <Box mx={"auto"} w={"full"}>
                <SimpleGrid columns={{ base: 1 }} spacing={{ base: 5 }}>
                  <StatsCard
                    title={"Minimum Contribution"}
                    stat={"0.0001 ETH"}
                    info={
                      "You must contribute at least this much in Wei ( 1 ETH = 10 ^ 18 Wei) to become an approver"
                    }
                  />
                  <StatsCard
                    title={"Wallet Address of Campaign Creator"}
                    stat={"0X85375"}
                    info={
                      "The Campaign Creator created the campaign and can create requests to withdraw money."
                    }
                  />
                  <StatsCard
                    title={"Number of Requests"}
                    stat={20}
                    info={
                      "A request tries to withdraw money from the contract. Requests must be approved by approvers"
                    }
                  />
                  <StatsCard
                    title={"Number of Approvers"}
                    stat={10}
                    info={
                      "Number of people who have already donated to this campaign"
                    }
                  />
                </SimpleGrid>
              </Box>
            </Stack>
            <Stack spacing={{ base: 4 }}>
              <Box>
                <Stat
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  rounded={"xl"}
                  p={{ base: 4, sm: 6, md: 8 }}
                  spacing={{ base: 8 }}
                >
                  <StatLabel fontWeight={"medium"}>
                    <Text as="span" isTruncated mr={2}>
                      {" "}
                      Campaign Balance
                    </Text>
                    <Tooltip
                      label="The balance is how much money this campaign has left to
                  spend."
                      bg={useColorModeValue("white", "gray.700")}
                      placement={"top"}
                      color={useColorModeValue("gray.800", "white")}
                      fontSize={"1em"}
                      px="4"
                    >
                      <InfoIcon
                        color={useColorModeValue("teal.800", "white")}
                      />
                    </Tooltip>
                  </StatLabel>
                  <StatNumber>
                    <Box
                      fontSize={"2xl"}
                      isTruncated
                      maxW={{ base: "	15rem", sm: "sm" }}
                      pt="2"
                    >
                      <Text as="span" fontWeight={"bold"}>
                        {balance > 0 ? 10 : "0, Become a Donor 😄"}
                      </Text>
                      <Text
                        as="span"
                        display={balance > 0 ? "inline" : "none"}
                        pr={2}
                        fontWeight={"bold"}
                      >
                        {" "}
                        ETH
                      </Text>
                      <Text
                        as="span"
                        fontSize="lg"
                        display={balance > 0 ? "inline" : "none"}
                        fontWeight={"normal"}
                        color={useColorModeValue("gray.500", "gray.200")}
                      ></Text>
                    </Box>

                    <Text fontSize={"md"} fontWeight="normal">
                      target of ETH
                    </Text>
                    <Progress colorScheme="teal" size="sm" mt={4} />
                  </StatNumber>
                </Stat>
              </Box>
              <Stack
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                rounded={"xl"}
                p={{ base: 4, sm: 6, md: 8 }}
                spacing={{ base: 6 }}
              >
                <Heading
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl" }}
                  color={useColorModeValue("teal.600", "teal.200")}
                >
                  Contribute Now!
                </Heading>

                <Box mt={10}>
                  <form>
                    <FormControl id="value">
                      <FormLabel>
                        Amount in Ether you want to contribute
                      </FormLabel>
                      <InputGroup>
                        {" "}
                        <Input
                          type="number"
                          onChange={(e) => {}}
                          step="any"
                          min="0"
                        />{" "}
                        <InputRightAddon children="ETH" />
                      </InputGroup>
                    </FormControl>

                    <Stack spacing={10}>
                      <Button
                        fontFamily={"heading"}
                        mt={4}
                        w={"full"}
                        bgGradient="linear(to-r, teal.400,green.400)"
                        color={"white"}
                        _hover={{
                          bgGradient: "linear(to-r, teal.400,blue.400)",
                          boxShadow: "xl",
                        }}
                        isDisabled={amountInUSD ? false : true}
                        type="submit"
                      >
                        Contribute
                      </Button>
                    </Stack>
                  </form>
                </Box>
              </Stack>

              <Stack
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                rounded={"xl"}
                p={{ base: 4, sm: 6, md: 8 }}
                spacing={4}
              >
                <a href={`/campaign/withdrawal/requests`}>
                  <Button
                    fontFamily={"heading"}
                    w={"full"}
                    bgGradient="linear(to-r, teal.400,green.400)"
                    color={"white"}
                    _hover={{
                      bgGradient: "linear(to-r, teal.400,blue.400)",
                      boxShadow: "xl",
                    }}
                  >
                    View Withdrawal Requests
                  </Button>
                </a>
                <Text fontSize={"sm"}>
                  * You can see where these funds are being used & if you have
                  contributed you can also approve those Withdrawal Requests :)
                </Text>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </main>
    </div>
  );
}
