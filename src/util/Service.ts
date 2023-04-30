import { numberToColumn } from "./Helper";
import { Http } from "./Http";

export const getData = async () => {
    const { data } = await Http.get("/");

    return data;
};

export const updateCell = async (col: number, row: number, value: any) => {
    const body = {
        value,
        range: `${numberToColumn(col)}${row + 2}`,
    };

    if (value === true) {
        body.value = "TRUE";
    } else if (value === false) {
        body.value = "FALSE";
    }

    const { data } = await Http.put("/", body);

    return data;
};
