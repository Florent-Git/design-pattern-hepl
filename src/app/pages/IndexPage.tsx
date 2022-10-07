import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { CompositePage } from "./CompositePage";
import { FlyweightPage } from "./FlyweightPage";

export function IndexPage() {
    const [value, setValue] = useState("1");

    function handleChange(_: any, newValue: string) {
        setValue(newValue);
    }

    return (
        <TabContext value={value}>
            <Tabs onChange={handleChange}>
                <Tab label="Composite" value="1" />
                <Tab label="Flyweight" value="2" />
            </Tabs>
            <TabPanel className="!padding-0" value="1"><CompositePage/></TabPanel>
            <TabPanel value="2"><FlyweightPage/></TabPanel>
        </TabContext>
    )
}