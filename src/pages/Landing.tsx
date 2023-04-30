import { FC } from "react";

import {
    chakra,
    Center,
    useBreakpointValue,
    Flex,
    Box,
    Text,
} from "@chakra-ui/react";

import TopDesign from "./../assets/invites/top-design.svg";
import BottomDesign from "./../assets/invites/bottom-design.svg";
import Stem from "./../assets/invites/stem.svg";
import MainLogo from "./../assets/invites/main-logo.svg";

import { BrandGradient, InviteFontColor } from "../theme/Colors";

export const Landing: FC = () => {
    const width = useBreakpointValue({
        base: "220px",
        md: "320px",
        lg: "440px",
    });
    const y = useBreakpointValue({ base: "-64px", md: "-72px", lg: "-112px" });
    const x = useBreakpointValue({ base: "-40px", md: "-48px", lg: "-72px" });

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

                <Box textAlign="center" mt='-12'>
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <chakra.img
                            src={Stem}
                            width={{ base: "32px", lg: "40px" }}
                        />

                        <Text fontSize={{ base: "10px", md: "16px" }} mt="8">
                            WE ARE GETTING MARRIED (AT LAST!)
                        </Text>

                        <chakra.img
                            src={MainLogo}
                            width={{ base: "360px", md: "400px", lg: "480px" }}
                            mt={{ base: "8", lg: "16" }}
                        />
                    </Flex>
                </Box>
            </Box>
        </Center>
    );
};
