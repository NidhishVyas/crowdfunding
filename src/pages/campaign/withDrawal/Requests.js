import React, { useState } from "react";
import {
  Heading,
  useColorModeValue,
  Text,
  Button,
  Flex,
  Container,
  SimpleGrid,
  Box,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tooltip,
  Tr,
  Th,
  Td,
  TableCaption,
  Skeleton,
  Alert,
  AlertIcon,
  AlertDescription,
  HStack,
  Link,
} from "@chakra-ui/react";
import {
  ArrowBackIcon,
  InfoIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@chakra-ui/icons";

const RequestRow = ({ id, request, approversCount, disabled }) => {
  const readyToFinalize = request.approvalCount > approversCount / 2;
  const [errorMessageApprove, /*setErrorMessageApprove*/] = useState();
  const [loadingApprove, /*setLoadingApprove*/] = useState(false);
  const [errorMessageFinalize, /*setErrorMessageFinalize*/] = useState();
  const [loadingFinalize, /*setLoadingFinalize*/] = useState(false);

  return (
    <Tr
      // bg={
      //   readyToFinalize && !request.complete
      //     ? useColorModeValue("teal.100", "teal.700")
      //     : useColorModeValue("gray.100", "gray.700")
      // }
      opacity={request.complete ? "0.4" : "1"}
    >
      <Td>{id} </Td>
      <Td>Need for xyz</Td>
      <Td isNumeric>10 ETH</Td>
      <Td>
        <Link color="teal.500" isExternal>
          0X654647
        </Link>
      </Td>
      <Td>1/{approversCount}</Td>
      <Td>
        <HStack spacing={2}>
          <Tooltip
            label={errorMessageApprove}
            bg={useColorModeValue("white", "gray.700")}
            placement={"top"}
            color={useColorModeValue("gray.800", "white")}
            fontSize={"1em"}
          >
            <WarningIcon
              // color={useColorModeValue("red.600", "red.300")}
              display={errorMessageApprove ? "inline-block" : "none"}
            />
          </Tooltip>
          {request.complete ? (
            <Tooltip
              label="This Request has been finalized & withdrawn to the recipient,it may then have less no of approvers"
              // bg={useColorModeValue("white", "gray.700")}
              placement={"top"}
              // color={useColorModeValue("gray.800", "white")}
              fontSize={"1em"}
            >
              <CheckCircleIcon
              // color={useColorModeValue("green.600", "green.300")}
              />
            </Tooltip>
          ) : (
            <Button
              colorScheme="yellow"
              variant="outline"
              _hover={{
                bg: "yellow.600",
                color: "white",
              }}
              // onClick={onApprove}
              isDisabled={disabled || request.approvalCount === approversCount}
              isLoading={loadingApprove}
            >
              Approve
            </Button>
          )}
        </HStack>
      </Td>
      <Td>
        <Tooltip
          label={errorMessageFinalize}
          bg={useColorModeValue("white", "gray.700")}
          placement={"top"}
          color={useColorModeValue("gray.800", "white")}
          fontSize={"1em"}
        >
          <WarningIcon
            color={useColorModeValue("red.600", "red.300")}
            display={errorMessageFinalize ? "inline-block" : "none"}
            mr="2"
          />
        </Tooltip>
        {request.complete ? (
          <Tooltip
            label="This Request has been finalized & withdrawn to the recipient,it may then have less no of approvers"
            // bg={useColorModeValue("white", "gray.700")}
            placement={"top"}
            // color={useColorModeValue("gray.800", "white")}
            fontSize={"1em"}
          >
            <CheckCircleIcon
            // color={useColorModeValue("green.600", "green.300")}
            />
          </Tooltip>
        ) : (
          <HStack spacing={2}>
            <Button
              colorScheme="green"
              variant="outline"
              _hover={{
                bg: "green.600",
                color: "white",
              }}
              isDisabled={disabled || (!request.complete && !readyToFinalize)}
              // onClick={onFinalize}
              isLoading={loadingFinalize}
            >
              Finalize
            </Button>

            <Tooltip
              label="This Request is ready to be Finalized because it has been approved by 50% Approvers"
              // bg={useColorModeValue("white", "gray.700")}
              placement={"top"}
              // color={useColorModeValue("gray.800", "white")}
              fontSize={"1.2em"}
            >
              <InfoIcon
                as="span"
                // color={useColorModeValue("teal.800", "white")}
                display={
                  readyToFinalize && !request.complete ? "inline-block" : "none"
                }
              />
            </Tooltip>
          </HStack>
        )}
      </Td>
    </Tr>
  );
};

export default function Requests({
  campaignId,
  requestCount,
  approversCount,
  balance,
  name,
  ETHPrice,
}) {
  const [requestsList, /*setRequestsList*/] = useState([]);
  const [FundNotAvailable, /*setFundNotAvailable*/] = useState(false);

  return (
    <div>
      <title>Campaign Withdrawal Requests</title>
      <meta name="description" content="Create a Withdrawal Request" />

      <main>
        <Container px={{ base: "4", md: "12" }} maxW={"7xl"} align={"left"}>
          <Flex flexDirection={{ base: "column", md: "row" }} py={4}>
            <Box py="4">
              <Text fontSize={"lg"} color={"teal.400"}>
                <ArrowBackIcon mr={2} />
                <a href={`/campaign/CampaignSingle`}>Back to Campaign</a>
              </Text>
            </Box>
            <Spacer />
            <Box py="4">
              Campaign Balance :{" "}
              <Text as="span" fontWeight={"bold"} fontSize="lg">
                "0, Become a Donor 😄"
              </Text>
              <Text
                as="span"
                display={balance > 0 ? "inline" : "none"}
                pr={2}
                fontWeight={"bold"}
                fontSize="lg"
              >
                {" "}
                ETH
              </Text>
              <Text
                as="span"
                display={balance > 0 ? "inline" : "none"}
                fontWeight={"normal"}
                color={useColorModeValue("gray.500", "gray.200")}
              >
                {/* (${getWEIPriceInUSD(ETHPrice, balance)}) */}
              </Text>
            </Box>
          </Flex>
          {FundNotAvailable ? (
            <Alert status="error" my={4}>
              <AlertIcon />
              <AlertDescription>
                The Current Balance of the Campaign is 0, Please Contribute to
                approve and finalize Requests.
              </AlertDescription>
            </Alert>
          ) : null}
        </Container>
        {requestsList.length >= 0 ? (
          <Container px={{ base: "4", md: "12" }} maxW={"7xl"} align={"left"}>
            <Flex flexDirection={{ base: "column", lg: "row" }} py={4}>
              <Box py="2" pr="2">
                <Heading
                  // textAlign={useBreakpointValue({ base: "left" })}
                  fontFamily={"heading"}
                  // color={useColorModeValue("gray.800", "white")}
                  as="h3"
                  isTruncated
                  maxW={"3xl"}
                >
                  Withdrawal Requests for Covid Relief Fund
                </Heading>
              </Box>
              <Spacer />
              <Box py="2">
                <a href={`/campaign/withdrawal/requests/new`}>
                  <Button
                    display={{ sm: "inline-flex" }}
                    justify={"flex-end"}
                    fontSize={"md"}
                    fontWeight={600}
                    color={"white"}
                    bg={"teal.400"}
                    href={"#"}
                    _hover={{
                      bg: "teal.300",
                    }}
                  >
                    Add Withdrawal Request
                  </Button>
                </a>
              </Box>
            </Flex>{" "}
            <Box overflowX="auto">
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th w="30%">Description</Th>
                    <Th isNumeric>Amount</Th>
                    <Th maxW="12%" isTruncated>
                      Recipient Wallet Address
                    </Th>
                    <Th>Approval Count </Th>
                    <Th>Approve </Th>
                    <Th>Finalize </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <RequestRow
                    id="1"
                    request="2"
                    approversCount="3"
                    campaignId="4"
                    disabled="6"
                    ETHPrice="5"
                  />
                </Tbody>
                <TableCaption textAlign="left" ml="-2">
                  Found 9 Requests
                </TableCaption>
              </Table>
            </Box>
          </Container>
        ) : (
          <div>
            <Container px={{ base: "4", md: "12" }} maxW={"7xl"} align={"left"}>
              <SimpleGrid rows={{ base: 5 }} spacing={2}>
                <Skeleton height="5rem" />
                <Skeleton height="5rem" />
                <Skeleton height="5rem" />
                <Skeleton height="5rem" />
              </SimpleGrid>
            </Container>
          </div>
        )}
      </main>
    </div>
  );
}
