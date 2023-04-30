import { FC, useEffect, useState } from "react";

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/table";
import { Button, Checkbox, Flex } from "@chakra-ui/react";
import { BiMailSend, BiLink } from "react-icons/bi";

interface Props {
    headers: string[];
    rows: string[][];
    onChange?: (row: number, col: number, value: any) => void;
}

export const DashboardTable: FC<Props> = ({ headers, rows, onChange }) => {
    const [data, setData] = useState<{ headers: string[]; rows: string[][] }>({
        headers: [],
        rows: [],
    });

    useEffect(() => {
        setData({
            headers: [...headers, "Actions"],
            rows: rows.map((row) => [...row, ""]),
        });
    }, [headers, rows]);

    const renderRowItem = (idx: number, item: string, rowIdx: number) => {
        switch (data.headers[idx]) {
            case "RSVP":
                return (
                    <Checkbox
                        readOnly
                        cursor="auto"
                        isFocusable={false}
                        isChecked={item === "TRUE"}
                    />
                );
            case "Invite Sent":
                return (
                    <Checkbox
                        readOnly
                        cursor="auto"
                        isFocusable={false}
                        isChecked={item === "TRUE"}
                    />
                );
            case "Phone":
                return (
                    "(" +
                    item.substr(0, 3) +
                    ") " +
                    item.substr(3, 3) +
                    "-" +
                    item.substr(6, 4)
                );
            case "Actions":
                return (
                    <Flex gap="4">
                        <Button
                            fontSize="sm"
                            borderRadius="0"
                            leftIcon={<BiMailSend fontSize="16pt" />}
                        >
                            Send Invite
                        </Button>
                        <Button
                            fontSize="sm"
                            borderRadius="0"
                            variant="outline"
                            leftIcon={<BiLink fontSize="16pt" />}
                        >
                            Copy Invite
                        </Button>
                    </Flex>
                );
            default:
                return item || "-";
        }
    };

    return (
        <TableContainer borderWidth="0px" position="relative">
            <Table variant="simple" colorScheme="brand" size="md">
                <Thead borderBottomWidth="0.1px" px="8">
                    <Tr borderBottomWidth="0.1px">
                        {data.headers.map((header) => (
                            <Th borderBottomWidth="0.1px">{header}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.rows.map((row, rowIdx) => (
                        <Tr
                            borderBottomWidth="0.1px"
                            _hover={{ bg: "#ececec" }}
                        >
                            {row.map((rowItem, i) => (
                                <Td borderBottomWidth="0px">
                                    {renderRowItem(i, rowItem, rowIdx)}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};
