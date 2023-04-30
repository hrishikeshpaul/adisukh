import { FC } from "react";

import { Flex, Text, Link } from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";

import { ReactComponent as IconLogoType } from "./../assets/logo.svg";
import { AppRoutes } from "../router/Routes";

export const Navbar: FC = () => {
    return (
        <Flex
            py="4"

            // borderBottom="1px solid"
            // borderBottomColor="gray.100"
            // bgGradient={BrandGradient}
            w="100%"
            // color="white"
        >
            <Flex alignItems="center" justifyContent="center" w="100%">
                <IconLogoType width="140px" color="white" />
                {/* <Link
                    color="brand.800"
                    fontWeight="medium"
                    as={NavLink}
                    to={AppRoutes.Dashboard}
                    _activeLink={{ color: 'brand.500' }}
                >
                    Dashboard
                </Link> */}
            </Flex>
        </Flex>
    );
};
