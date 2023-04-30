import { FC, useEffect, useState } from "react";

import {
  chakra,
  Center,
  useBreakpointValue,
  Flex,
  Box,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";

import TopDesign from "./../assets/invites/top-design.svg";
import BottomDesign from "./../assets/invites/bottom-design.svg";
import SaveTheDate from "./../assets/invites/save-the-date.svg";
import Stem from "./../assets/invites/stem.svg";
import MainLogo from "./../assets/invites/main-logo.svg";

import { BrandGradient, InviteFontColor } from "../theme/Colors";
import { useNavigate } from "react-router-dom";

import data from "../common/Data.json";

interface EventType {
  name: string;
  location: {
    name: string;
    address: string;
  };
  time: string;
  id: string;
}

export const Invite: FC = () => {
  const params = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const [ids, setIds] = useState<string>("");
  const width = useBreakpointValue({
    base: "220px",
    md: "320px",
    lg: "440px",
  });
  const y = useBreakpointValue({ base: "-64px", md: "-72px", lg: "-112px" });
  const x = useBreakpointValue({ base: "-40px", md: "-48px", lg: "-72px" });

  useEffect(() => {
    const event = params.get("e");

    if (!event) {
      navigate("/");
      return;
    }

    setIds(
      event
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .join("")
    );
  }, []); //eslint-disable-line

  const Event: FC<EventType & { idx: number }> = ({
    name,
    location: { address, name: locationName },
    time,
    id,
  }) => {
    return (
      <Box
        className="event"
        textAlign="center"
        borderRight={{
          base: "none",
          lg: id === ids[ids.length - 1] ? "none" : "1px solid",
        }}
        borderColor={InviteFontColor}
        px={{ base: 0, md: 16 }}
        py={{ base: 4, md: 0 }}
      >
        <Text fontSize={{ base: "md", md: "xl" }} fontWeight="600">
          {name}
        </Text>

        <Text
          fontSize={{ base: "xs", md: "md" }}
          fontWeight="600"
          mt={{ base: "2", md: "4" }}
        >
          {locationName}
        </Text>
        <Text fontWeight="400" fontSize={{ base: "xs", md: "md" }}>
          {address}
        </Text>

        <Text
          fontWeight="600"
          mt={{ base: "0", md: "2" }}
          fontSize={{ base: "xs", md: "lg" }}
        >
          {time}
        </Text>
      </Box>
    );
  };

  return (
    <Center
      h="full"
      w="full"
      bgGradient={BrandGradient}
      px={{ base: 6, md: 16 }}
      py={{ base: 16, md: 32 }}
      color={InviteFontColor}
      flexDirection="column"
      textTransform="uppercase"
      overflow="auto"
    >
      <Box
        position="fixed"
        backgroundImage="url(pattern-png.png)"
        width="100%"
        h="100%"
        zIndex="1"
        opacity="0.1"
      />
      <Box className="top-section" zIndex="2">
        <chakra.img
          src={TopDesign}
          position="fixed"
          top={y}
          left={x}
          width={width}
        />
        <chakra.img
          src={BottomDesign}
          position="fixed"
          bottom={y}
          right={x}
          width={width}
        />

        <Box textAlign="center">
          <Flex direction="column" justifyContent="center" alignItems="center">
            <chakra.img src={Stem} width={{ base: "32px", lg: "40px" }} />
            <chakra.img
              src={SaveTheDate}
              width={{ base: "160px", md: "280px", lg: "360px" }}
              mt={{ base: "8", lg: "16" }}
            />
            <Text fontSize={{ base: "8px", md: "14px" }} mt="2">
              WE ARE GETTING MARRIED (AT LAST!)
            </Text>

            <chakra.img
              src={MainLogo}
              width={{ base: "200px", md: "320px", lg: "400px" }}
              mt={{ base: "8", lg: "8" }}
            />
          </Flex>
        </Box>
      </Box>

      <Container
        maxW="8xl"
        p="0"
        m="0"
        my={{ base: 10, md: 20, lg: 28 }}
        zIndex="2"
      >
        <Flex
          className="events-section"
          justifyContent="center"
          flexDir={{ base: "column", lg: "row" }}
          gap={{ base: 4, md: 8, lg: 0 }}
        >
          {data.events
            .filter((ev) => ids.includes(ev.id))
            .map((event, idx) => (
              <Event {...event} key={event.id} idx={idx} />
            ))}
        </Flex>
      </Container>

      <Box className="rsvp" textAlign="center" zIndex="2">
        <Text fontWeight="600" fontSize={{ base: "xs", md: "md" }}>
          No gifts please
        </Text>

        <Button
          color={InviteFontColor}
          mt="4"
          colorScheme="yellow"
          fontWeight="600"
          border="1px solid"
          borderColor={InviteFontColor}
          borderRadius="0"
          background="none"
          fontSize="sm"
          size="lg"
          _hover={{ bg: InviteFontColor, color: "brand.800" }}
          _active={{
            bg: `${InviteFontColor}CC`,
            color: "brand.800",
            borderColor: `${InviteFontColor}CC`,
          }}
          onClick={() => window.open(data.rsvpLink, "_blank")}
        >
          Click here to RSVP
        </Button>
      </Box>
    </Center>
  );
};
