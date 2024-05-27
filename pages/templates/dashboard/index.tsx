import Head from "next/head";

import {NavigationDashboard} from "@/core/templates/dashboard/layouts/NavigationDashboard";
import {CryptoTable} from "@/core/templates/dashboard/table/CryptoTable";
import {AreaChart} from "@/core/ui/charts/AreaChart";
import {BarChart} from "@/core/ui/charts/BarChart";
import {
    dataAreaChart,
    sushiPrice,
} from "@/core/ui/charts/helpers/data-samples/dataSample";
import {Avatar, Card, IconButton, List} from "@/core/ui/components";
import {Section} from "@/core/ui/layers/Section";
import {MdMoreHoriz} from "react-icons/md";

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard | Material Me React Library</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
                />
                <meta
                    content="Index"
                    name="Dashboard page"
                />
            </Head>
            <NavigationDashboard>
                <Section>
                    <Card
                        bg={"bg-surface-container w-full h-full"}
                        className="overflow-x-auto">
                        <Card.Header>
                            <List
                                leftElement={
                                    <Avatar
                                        size={48}
                                        src={require("public/logos/crypto/SUSHI.svg")}
                                    />
                                }
                                rightElement={
                                    <IconButton
                                        icon={<MdMoreHoriz size={24} />}
                                        variant={"standard"}
                                    />
                                }
                                headline="Sushi"
                                body="Price"
                                className="px-[12px]"
                            />
                        </Card.Header>
                        <Card.Body>
                            <AreaChart
                                categories={["Price"]}
                                data={sushiPrice}
                                dataKey={"date"}
                                type={"linear"}
                                showYAxis={false}
                                showGridLines={true}
                                lineCount={8}
                                showGradient={true}
                            />
                        </Card.Body>
                    </Card>
                    <Card
                        bg={"bg-surface-container w-full h-full"}
                        className="overflow-x-auto">
                        <Card.Header>
                            <List
                                rightElement={
                                    <IconButton
                                        icon={<MdMoreHoriz size={24} />}
                                        variant={"standard"}
                                    />
                                }
                                headline="$4.86B"
                                body="Volume"
                                className="px-[12px]"
                            />
                        </Card.Header>
                        <Card.Body height={"h-full"}>
                            <BarChart
                                categories={[
                                    "Marketing",
                                    "Development",
                                    "Research",
                                ]}
                                data={dataAreaChart}
                                dataKey={"name"}
                                showYAxis={true}
                                showGridLines={true}
                                lineCount={10}
                                layout={"horizontal"}
                            />
                        </Card.Body>
                    </Card>
                </Section>
                <Section className="pt-[24px]">
                    <Card bg={"bg-surface-container h-full"}>
                        <Card.Header>
                            <List
                                rightElement={
                                    <IconButton
                                        icon={<MdMoreHoriz size={24} />}
                                        variant={"standard"}
                                    />
                                }
                                headline="$84.86B"
                                body="Price chart"
                                className="px-[12px]"
                            />
                        </Card.Header>
                        <Card.Body height={"h-full"}>
                            <BarChart
                                categories={["Marketing", "Development"]}
                                data={dataAreaChart}
                                dataKey={"name"}
                                showYAxis={true}
                                showGridLines={true}
                                lineCount={10}
                                layout={"vertical"}
                            />
                        </Card.Body>
                    </Card>
                </Section>
                <Section className="pt-[24px]">
                    <div className="flex w-full flex-col gap-[24px] lg:flex-row">
                        <div className="flex w-full flex-row gap-[24px]">
                            <Card bg={"bg-surface-container h-full"}>
                                <Card.Header>
                                    <List
                                        rightElement={
                                            <IconButton
                                                icon={<MdMoreHoriz size={24} />}
                                                variant={"standard"}
                                            />
                                        }
                                        headline="285,277,770"
                                        body="Circulating Supply"
                                        className="px-[12px]"
                                    />
                                </Card.Header>
                                <Card.Body>
                                    <AreaChart
                                        categories={["Development"]}
                                        data={dataAreaChart}
                                        dataKey={"name"}
                                        height={"h-[90px]"}
                                        type={"natural"}
                                        showYAxis={false}
                                        showGridLines={false}
                                        showGradient={true}
                                        showXAxis={false}
                                        lineCount={8}
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="flex w-full flex-row gap-[24px]">
                            <Card bg={"bg-surface-container h-full"}>
                                <Card.Header>
                                    <List
                                        rightElement={
                                            <IconButton
                                                icon={<MdMoreHoriz size={24} />}
                                                variant={"standard"}
                                            />
                                        }
                                        headline="$0.51"
                                        body="Current Price"
                                        className="px-[12px]"
                                    />
                                </Card.Header>
                                <Card.Body>
                                    <AreaChart
                                        categories={["Marketing"]}
                                        data={dataAreaChart}
                                        dataKey={"name"}
                                        height={"h-[90px]"}
                                        type={"linear"}
                                        showYAxis={false}
                                        showXAxis={false}
                                        showGradient={true}
                                        showGridLines={false}
                                        lineCount={8}
                                    />
                                </Card.Body>
                            </Card>
                            <Card bg={"bg-surface-container h-full"}>
                                <Card.Header>
                                    <List
                                        rightElement={
                                            <IconButton
                                                icon={<MdMoreHoriz size={24} />}
                                                variant={"standard"}
                                            />
                                        }
                                        headline="105.451"
                                        body="Holders"
                                        className="px-[12px]"
                                    />
                                </Card.Header>
                                <Card.Body height="h-full">
                                    <AreaChart
                                        categories={[
                                            "Development",
                                            "Marketing",
                                        ]}
                                        data={dataAreaChart}
                                        dataKey={"name"}
                                        height={"h-[90px]"}
                                        type={"step"}
                                        showYAxis={false}
                                        showGridLines={false}
                                        showXAxis={false}
                                        lineCount={8}
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Section>

                <div className="mx-[12px] pt-[24px]">
                    <CryptoTable />
                </div>
            </NavigationDashboard>
        </>
    );
}
