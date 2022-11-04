import { useState } from "react";
import styles from "../../styles/Home.module.css";

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
  SkeletonCircle,
  HStack,
  // Stack,
  Progress,
} from "@chakra-ui/react";

import {  FaEdit, FaTrash } from "react-icons/fa";

// const Feature = ({ title, text, icon }) => {
//   return (
//     <Stack>
//       <Flex
//         w={16}
//         h={16}
//         align={"center"}
//         justify={"center"}
//         color={"white"}
//         rounded={"full"}
//         bg={useColorModeValue("gray.100", "gray.700")}
//         mb={1}
//       >
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{title}</Text>
//       <Text color={useColorModeValue("gray.500", "gray.200")}>{text}</Text>
//     </Stack>
//   );
// };

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
                  as={FaEdit}
                  h={5}
                  w={5}
                  alignSelf={"center"}
                  color={"teal.400"}
                />
                <Icon
                  as={FaTrash}
                  h={4}
                  w={4}
                  ml={2}
                  alignSelf={"center"}
                  color={"teal.400"}
                />
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
                  {balance > 0 ? "aaaa" : "0, Become a Donor 😄"}
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
              <Progress
                colorScheme="teal"
                size="sm"
                value={10}
                max={100}
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
  const [campaignList, /*setCampaignList*/] = useState([]);

  return (
    <div>
      <title>BetterFund</title>
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
            My Campaign
          </Heading>
          <a href="/campaign/new">
            <Button
              display={{ sm: "inline-flex" }}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={"teal.400"}
              _hover={{
                bg: "teal.300",
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
                  name="hello hello"
                  description="hello hello hello hello hello hello hello hello hello hello"
                  creatorId="1"
                  imageURL="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-Scorpio-N-300620221053.jpg&w=872&h=578&q=75&c=1"
                  id="1"
                  target="1"
                  balance="1"
                  ethPrice="1"
                />
              </div>
              <div>
                <CampaignCard
                  name="hello hello"
                  description="hello hello hello hello hello hello hello hello hello hello"
                  creatorId="1"
                  imageURL="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-Scorpio-N-300620221053.jpg&w=872&h=578&q=75&c=1"
                  id="1"
                  target="1"
                  balance="1"
                  ethPrice="1"
                />
              </div>
              <div>
                <CampaignCard
                  name="hello hello"
                  description="hello hello hello hello hello hello hello hello hello hello"
                  creatorId="1"
                  imageURL="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-Scorpio-N-300620221053.jpg&w=872&h=578&q=75&c=1"
                  id="1"
                  target="1"
                  balance="1"
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
      </main>
    </div>
  );
}