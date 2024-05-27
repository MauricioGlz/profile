import {
    Chips,
    IconButton,
    LinkBox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    TextContainer,
} from "@/core/ui/components";
import {
    bodyDataGoods,
    bodyDataPeople,
    headerDataGoods,
    headerDataPeople,
} from "@/core/ui/components/data-table/data-samples";
import {Checkbox, Img} from "@/core/ui/elements";
import {Container} from "@/core/ui/layers";
import {MdChat, MdMoreHoriz} from "react-icons/md";

export default function DataTablePage() {
    return (
        <>
            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headerDataPeople.map((header) => (
                                <TableHeaderCell
                                    key={header.id}
                                    data={header.name}
                                />
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bodyDataPeople.map((body) => (
                            <TableRow key={body.id}>
                                <TableCell>
                                    <Checkbox id="checkbox" />
                                </TableCell>
                                <TableCell>
                                    <Img
                                        width={40}
                                        height={40}
                                        radius={12}
                                        src={body.photo}
                                    />
                                </TableCell>
                                <TableCell>{body.name}</TableCell>
                                <TableCell>
                                    <IconButton
                                        icon={<MdChat size={18} />}
                                        variant={"standard"}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextContainer data={body.about} />
                                </TableCell>
                                <TableCell data={body.username} />
                                <TableCell>
                                    <Chips text={body.status} />
                                </TableCell>
                                <TableCell data={body.role} />
                                <TableCell data={body.team} />
                                <TableCell data={`$${body.salary}`} />
                                <TableCell>
                                    <IconButton
                                        icon={<MdMoreHoriz size={18} />}
                                        variant={"tonal"}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>

            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headerDataGoods.map((header) => (
                                <TableHeaderCell
                                    key={header.id}
                                    data={header.name}
                                />
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bodyDataGoods.map((body) => (
                            <TableRow key={body.id}>
                                <TableCell data={body.date} />
                                <TableCell>
                                    <Img
                                        width={100}
                                        height={60}
                                        radius={999}
                                        src={body.photo}
                                    />
                                </TableCell>
                                <TableCell>
                                    <LinkBox
                                        href={"#"}
                                        size={"text-body-medium"}>
                                        {body.product}
                                    </LinkBox>
                                </TableCell>
                                <TableCell>
                                    <TextContainer
                                        width="w-[600px]"
                                        data={body.about}
                                    />
                                </TableCell>
                                <TableCell data={body.store} />
                                <TableCell>
                                    <Chips
                                        className={
                                            "text-label-medium dark:bg-lime-400 dark:text-black"
                                        }
                                        text={body.sales}
                                    />
                                </TableCell>
                                <TableCell data={`$${body.price}`} />

                                <TableCell data={`$${body.income}`} />
                                <TableCell>
                                    <IconButton
                                        icon={<MdMoreHoriz size={18} />}
                                        variant={"tonal"}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </>
    );
}
