import {TabsPrimary, TabsSecondary} from "@/core/ui/components";
import {Img} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {MdDirectionsWalk, MdFlight, MdPedalBike, MdTrain} from "react-icons/md";

export default function TabsPage() {
    return (
        <>
            <Container padding="py-12">
                <TabsPrimary
                    tabs={[
                        {
                            id: "1",
                            icon: <MdFlight size={24} />,
                            header: "Flights",
                            content: <p>Flights tab</p>,
                        },
                        {
                            id: "2",
                            icon: <MdTrain size={24} />,
                            header: "Train",
                            content: <p>Train tab</p>,
                        },
                        {
                            id: "3",
                            icon: <MdPedalBike size={24} />,
                            header: "Bike",
                            content: <p>Bike tab</p>,
                        },
                        {
                            id: "4",
                            icon: <MdDirectionsWalk size={24} />,
                            header: "Walk",
                            content: <p>Walk tab</p>,
                        },
                    ]}
                />
            </Container>

            <Container padding="py-12">
                <TabsPrimary
                    tabs={[
                        {
                            id: "1",
                            header: "Flights",
                            content: <p>Flights tab</p>,
                        },
                        {
                            id: "2",
                            header: "Train",
                            content: <p>Train tab</p>,
                        },
                        {
                            id: "3",
                            header: "Bike",
                            content: <p>Bike tab</p>,
                        },
                        {
                            id: "4",
                            header: "Walk",
                            content: <p>Walk tab</p>,
                        },
                    ]}
                />
            </Container>

            <Container padding="py-12">
                <TabsPrimary
                    tabs={[
                        {
                            id: "1",
                            icon: <MdFlight size={24} />,
                            content: <p>Flights tab</p>,
                        },
                        {
                            id: "2",
                            icon: <MdTrain size={24} />,
                            content: <p>Train tab</p>,
                        },
                        {
                            id: "3",
                            icon: <MdPedalBike size={24} />,
                            content: <p>Bike tab</p>,
                        },
                        {
                            id: "4",
                            icon: <MdDirectionsWalk size={24} />,
                            content: <p>Walk tab</p>,
                        },
                    ]}
                />
            </Container>

            <Container padding="py-12">
                <TabsSecondary
                    tabs={[
                        {
                            id: "1",
                            header: "New-York",
                            content: (
                                <>
                                    <p>
                                        <strong>New-York</strong>, often called
                                        New York City or NYC, is the most
                                        populous city in the United States. With
                                        a 2020 population of 8,804,190
                                        distributed over 300.46 ...
                                    </p>
                                    <Img
                                        aspect={16 / 9}
                                        radius={8}
                                        src={
                                            "https://images.unsplash.com/photo-1550850839-8dc894ed385a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
                                        }
                                    />
                                </>
                            ),
                        },
                        {
                            id: "2",
                            header: "Singapore",
                            content: (
                                <>
                                    <p>
                                        <strong>Singapore</strong>, officially
                                        the Republic of Singapore, is a
                                        sovereign island country and city-state
                                        in maritime Southeast Asia.
                                    </p>
                                    <Img
                                        aspect={16 / 9}
                                        radius={8}
                                        src={
                                            "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                                        }
                                    />
                                </>
                            ),
                        },
                        {
                            id: "3",
                            header: "Bangkok",
                            content: (
                                <>
                                    <p>
                                        <strong>Bangkok</strong>, officially
                                        known in Thai as Krung Thep Maha Nakhon
                                        and colloquially as Krung Thep, is the
                                        capital and most populous city of
                                        Thailand.
                                    </p>
                                    <Img
                                        aspect={16 / 9}
                                        radius={8}
                                        src={
                                            "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        }
                                    />
                                </>
                            ),
                        },
                        {
                            id: "4",
                            header: "Mumbai",
                            content: (
                                <>
                                    <p>
                                        <strong>Mumbai</strong> is the centre of
                                        the Mumbai Metropolitan Region, the
                                        sixth most populous metropolitan area in
                                        the world with a population of over 23
                                        million (2.3 crore).
                                    </p>
                                    <Img
                                        aspect={16 / 9}
                                        radius={8}
                                        src={
                                            "https://images.unsplash.com/photo-1592835978338-6b7b07592dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80"
                                        }
                                    />
                                </>
                            ),
                        },
                    ]}
                />
            </Container>
        </>
    );
}
