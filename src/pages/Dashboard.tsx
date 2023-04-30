import { FC, useEffect, useState } from "react";

import { Box, Button, Center, Stack } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";

import { DashboardTable } from "../common/DashboardTable";

import { Navbar } from "../common/Navbar";
import { getData } from "../util/Service";

export const Dashboard: FC = () => {
    const [data, setData] = useState<{
        headers: string[];
        rows: string[][];
    } | null>(null);

    useEffect(() => {
        (async () => {
            const response = await getData();
            if (response) {
                const [h, ...r] = response;

                setData({
                    headers: h,
                    rows: r,
                });
            }
        })();
    }, []);

    return (
        <>
            <Navbar />
            <Box className="dashboard" my="8">
                {data && (
                    <Stack spacing="4">
                        <DashboardTable
                            headers={data.headers}
                            rows={data.rows}
                        />
                        <Center>
                            <Button
                                fontSize="sm"
                                variant="ghost"
                                leftIcon={<BiPlus fontSize="16pt" />}
                                borderRadius="0"
                            >
                                Add Invitees
                            </Button>
                        </Center>
                    </Stack>
                )}
            </Box>
        </>
    );
};
