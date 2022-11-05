import { useState } from "react";
import styles from "../styles/Home.module.css";

import {
  Heading,
  useBreakpointValue,
  useColorModeValue,
  Text,
  Button,
  Flex,
  Container,
  SimpleGrid,
  Box,
  Divider,
  Skeleton,
  Img,
  Icon,
  chakra,
  Tooltip,
  Link,
  SkeletonCircle,
  HStack,
  Stack,
  Progress,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaHandshake } from "react-icons/fa";
import { FcShare, FcDonate, FcMoneyTransfer } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={useColorModeValue("gray.100", "gray.700")}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue("gray.500", "gray.200")}>{text}</Text>
    </Stack>
  );
};

function CampaignCard({
  name,
  description,
  creatorId,
  imageURL,
  id,
  balance,
  target,
  ethPrice,
}) {
  return (
    <a href={`/campaign/CampaignSingle`}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW={{ md: "sm" }}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        transition={"transform 0.3s ease"}
        _hover={{
          transform: "translateY(-8px)",
        }}
      >
        <Box height="18em">
          <Img
            src={imageURL}
            alt={`Picture of ${name}`}
            roundedTop="lg"
            objectFit="cover"
            w="full"
            h="full"
            display="block"
          />
        </Box>
        <Box p="6">
          <Flex
            mt="1"
            justifyContent="space-between"
            alignContent="center"
            py={2}
          >
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>

            <Tooltip
              label="Contribute"
              bg={useColorModeValue("white", "gray.700")}
              placement={"top"}
              color={useColorModeValue("gray.800", "white")}
              fontSize={"1.2em"}
            >
              <chakra.a display={"flex"}>
                <Icon
                  as={FaHandshake}
                  h={7}
                  w={7}
                  alignSelf={"center"}
                  color={"red.400"}
                />{" "}
              </chakra.a>
            </Tooltip>
          </Flex>
          <Flex alignContent="center" py={2}>
            {" "}
            <Text color={"gray.500"} pr={2}>
              by
            </Text>{" "}
            <Heading size="base" isTruncated>
              {creatorId}
            </Heading>
          </Flex>
          <Flex direction="row" py={2}>
            <Box w="full">
              <Box
                fontSize={"2xl"}
                isTruncated
                maxW={{ base: "	15rem", sm: "sm" }}
                pt="2"
              >
                <Text as="span" fontWeight={"bold"}>
                  {balance > 0 ? target - balance : "0, Become a Donor 😄"}
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
                target of {target} ETH
              </Text>
              <Progress
                colorScheme="red"
                size="sm"
                value={balance}
                max={target}
                mt="2"
              />
            </Box>{" "}
          </Flex>
        </Box>
      </Box>
    </a>
  );
}

export default function Home() {
  const [campaignList /*setCampaignList*/] = useState([]);

  return (
    <div>
      <title>CrowdFund</title>
      <meta
        name="description"
        content="Transparent Crowdfunding in Blockchain"
      />
      <link rel="icon" href="/logo.svg" />
      <main className={styles.main}>
        <Container py={{ base: "4", md: "12" }} maxW={"7xl"} align={"left"}>
          {" "}
          <Heading
            textAlign={useBreakpointValue({ base: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            as="h1"
            py={4}
          >
            Crowdfunding using the powers of <br /> Crypto & Blockchain 😄
          </Heading>
          <a href="/campaign/new">
            <Button
              display={{ sm: "inline-flex" }}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={"red.400"}
              _hover={{
                bg: "red.300",
              }}
            >
              Create Campaign
            </Button>
          </a>
        </Container>
        <Container py={{ base: "4", md: "12" }} maxW={"7xl"}>
          <HStack spacing={2}>
            <SkeletonCircle size="4" />
            <Heading as="h2" size="lg">
              Open Campaigns
            </Heading>
          </HStack>

          <Divider marginTop="4" />

          {campaignList.length >= 0 ? (
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={8}>
              <div>
                <CampaignCard
                  name="Covid Releif Fund"
                  description="lorem ipsum"
                  creatorId="C01"
                  imageURL="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  id="1"
                  target="125"
                  balance="0"
                  ethPrice="1"
                />
              </div>
              <div>
                <CampaignCard
                  name="Payal Foundation"
                  description="hello hello hello hello hello hello hello hello hello hello"
                  creatorId="C02"
                  imageURL="https://images.unsplash.com/photo-1498712681408-fdcfb0eca86e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
                  id="1"
                  target="250"
                  balance="45"
                  ethPrice="1"
                />
              </div>
              <div>
                <CampaignCard
                  name="Oswald Trust"
                  description="hello hello hello hello hello hello hello hello hello hello"
                  creatorId="C03"
                  imageURL="https://images.unsplash.com/photo-1602007503586-5df8cdb2c692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  id="1"
                  target="180"
                  balance="84"
                  ethPrice="1"
                />
              </div>
            </SimpleGrid>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={8}>
              <Skeleton height="25rem" />
              <Skeleton height="25rem" />
              <Skeleton height="25rem" />
            </SimpleGrid>
          )}
        </Container>
        <Container py={{ base: "4", md: "12" }} maxW={"7xl"} id="howitworks">
          <HStack spacing={2}>
            <SkeletonCircle size="4" />
            <Heading as="h2" size="lg">
              How CrowdFund Works
            </Heading>
          </HStack>
          <Divider marginTop="4" />
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={8}>
            <Feature
              icon={<Icon as={FcDonate} w={10} h={10} />}
              title={"Create a Campaign for Fundraising"}
              text={
                "It’ll take only 2 minutes. Just enter a few details about the funds you are raising for."
              }
            />
            <Feature
              icon={<Icon as={FcShare} w={10} h={10} />}
              title={"Share your Campaign"}
              text={
                "All you need to do is share the Campaign with your friends, family and others. In no time, support will start pouring in."
              }
            />
            <Feature
              icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
              title={"Request and Withdraw Funds"}
              text={
                "The funds raised can be withdrawn directly to the recipient when 50% of the contributors approve of the Withdrawal Request."
              }
            />
          </SimpleGrid>
          <Heading as="h2" size="lg" mt="8">
            For any queries raise an issue on{" "}
            <Link color="red.500" href="" isExternal>
              our Email Address <ExternalLinkIcon mx="2px" />
            </Link>{" "}
          </Heading>
          <Divider marginTop="4" />
        </Container>
      </main>
    </div>
  );
}
