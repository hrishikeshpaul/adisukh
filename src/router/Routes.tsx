import { FC, Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import { Invite } from "../pages/Invite";
import { Landing } from "../pages/Landing";

export enum AppRoutes {
    Invite = "/invite",
    Landing = "/",
}

export const RouterContainer: FC = () => {
    return (
        <Suspense>
            <Routes>
                <Route path={AppRoutes.Landing} element={<Landing />} />
                <Route path={AppRoutes.Invite} element={<Invite />} />
            </Routes>
        </Suspense>
    );
};
