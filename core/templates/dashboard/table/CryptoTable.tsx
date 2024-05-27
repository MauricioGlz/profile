import {
    Chips,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from "@/core/ui/components";
import {Checkbox, Img} from "@/core/ui/elements";
import {
    MdAdd,
    MdMoreHoriz,
    MdVerticalAlignBottom,
    MdVerticalAlignTop,
} from "react-icons/md";

const headerData = [
    {
        id: "1",
        name: "",
    },
    {
        id: "2",
        name: "Logo",
    },
    {
        id: "3",
        name: "Coin",
    },
    {
        id: "4",
        name: "",
    },
    {
        id: "5",
        name: "Symbol",
    },
    {
        id: "6",
        name: "Current price",
    },
    {
        id: "7",
        name: "High 24h",
    },
    {
        id: "8",
        name: "Low 24h",
    },
    {
        id: "",
        name: "",
    },
];

const coins = [
    {
        id: "bitcoin",
        symbol: "btc",
        name: "Bitcoin",
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        current_price: 27892,
        market_cap: 539450180925,
        market_cap_rank: 1,
        fully_diluted_valuation: 586088145069,
        total_volume: 14968742267,
        high_24h: 28246,
        low_24h: 27403,
        price_change_24h: 353.5,
        price_change_percentage_24h: 1.28365,
        market_cap_change_24h: 4354549950,
        market_cap_change_percentage_24h: 0.81379,
        circulating_supply: 19328925.0,
        total_supply: 21000000.0,
        max_supply: 21000000.0,
        ath: 69045,
        ath_change_percentage: -59.58509,
        ath_date: "2021-11-10T14:24:11.849Z",
        atl: 67.81,
        atl_change_percentage: 41051.44122,
        atl_date: "2013-07-06T00:00:00.000Z",
        roi: null,
        last_updated: "2023-03-26T18:29:06.251Z",
    },
    {
        id: "ethereum",
        symbol: "eth",
        name: "Ethereum",
        image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        current_price: 1769.7,
        market_cap: 213296782589,
        market_cap_rank: 2,
        fully_diluted_valuation: 213296782589,
        total_volume: 8830263524,
        high_24h: 1800.9,
        low_24h: 1730.98,
        price_change_24h: 22.22,
        price_change_percentage_24h: 1.27154,
        market_cap_change_24h: 1712513723,
        market_cap_change_percentage_24h: 0.80938,
        circulating_supply: 120452165.57723,
        total_supply: 120452165.57723,
        max_supply: null,
        ath: 4878.26,
        ath_change_percentage: -63.70014,
        ath_date: "2021-11-10T14:24:19.604Z",
        atl: 0.432979,
        atl_change_percentage: 408881.12118,
        atl_date: "2015-10-20T00:00:00.000Z",
        roi: {
            times: 83.82545585161361,
            currency: "btc",
            percentage: 8382.54558516136,
        },
        last_updated: "2023-03-26T18:29:11.491Z",
    },
    {
        id: "tether",
        symbol: "usdt",
        name: "Tether",
        image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
        current_price: 1.002,
        market_cap: 79148122027,
        market_cap_rank: 3,
        fully_diluted_valuation: 79148122027,
        total_volume: 24404708888,
        high_24h: 1.01,
        low_24h: 0.998835,
        price_change_24h: 0.00031564,
        price_change_percentage_24h: 0.03152,
        market_cap_change_24h: -408490706.1860504,
        market_cap_change_percentage_24h: -0.51346,
        circulating_supply: 79022291662.577,
        total_supply: 79022291662.577,
        max_supply: null,
        ath: 1.32,
        ath_change_percentage: -24.27845,
        ath_date: "2018-07-24T00:00:00.000Z",
        atl: 0.572521,
        atl_change_percentage: 74.99241,
        atl_date: "2015-03-02T00:00:00.000Z",
        roi: null,
        last_updated: "2023-03-26T18:25:29.155Z",
    },
    {
        id: "binancecoin",
        symbol: "bnb",
        name: "BNB",
        image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
        current_price: 328.14,
        market_cap: 51828696193,
        market_cap_rank: 4,
        fully_diluted_valuation: 65649475136,
        total_volume: 565838360,
        high_24h: 329.28,
        low_24h: 320.04,
        price_change_24h: 4.11,
        price_change_percentage_24h: 1.26887,
        market_cap_change_24h: 506537463,
        market_cap_change_percentage_24h: 0.98698,
        circulating_supply: 157895234.0,
        total_supply: 157900174.0,
        max_supply: 200000000.0,
        ath: 686.31,
        ath_change_percentage: -52.17831,
        ath_date: "2021-05-10T07:24:17.097Z",
        atl: 0.0398177,
        atl_change_percentage: 824165.24139,
        atl_date: "2017-10-19T00:00:00.000Z",
        roi: null,
        last_updated: "2023-03-26T18:28:58.244Z",
    },
    {
        id: "usd-coin",
        symbol: "usdc",
        name: "USD Coin",
        image: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
        current_price: 1.0,
        market_cap: 33885749211,
        market_cap_rank: 5,
        fully_diluted_valuation: 33885749211,
        total_volume: 3551434768,
        high_24h: 1.009,
        low_24h: 0.999152,
        price_change_24h: -0.000402761721280065,
        price_change_percentage_24h: -0.04025,
        market_cap_change_24h: -238247926.19148636,
        market_cap_change_percentage_24h: -0.69818,
        circulating_supply: 33892162246.8873,
        total_supply: 33892162246.8873,
        max_supply: null,
        ath: 1.17,
        ath_change_percentage: -14.71051,
        ath_date: "2019-05-08T00:40:28.300Z",
        atl: 0.877647,
        atl_change_percentage: 13.9633,
        atl_date: "2023-03-11T08:02:13.981Z",
        roi: null,
        last_updated: "2023-03-26T18:29:10.067Z",
    },
    {
        id: "ripple",
        symbol: "xrp",
        name: "XRP",
        image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
        current_price: 0.450683,
        market_cap: 22973266018,
        market_cap_rank: 6,
        fully_diluted_valuation: 45089017426,
        total_volume: 1653186895,
        high_24h: 0.467283,
        low_24h: 0.444976,
        price_change_24h: -0.01213248244581894,
        price_change_percentage_24h: -2.62145,
        market_cap_change_24h: -596929755.7202072,
        market_cap_change_percentage_24h: -2.53256,
        circulating_supply: 50950912949.0,
        total_supply: 99989113908.0,
        max_supply: 100000000000.0,
        ath: 3.4,
        ath_change_percentage: -86.73502,
        ath_date: "2018-01-07T00:00:00.000Z",
        atl: 0.00268621,
        atl_change_percentage: 16682.1726,
        atl_date: "2014-05-22T00:00:00.000Z",
        roi: null,
        last_updated: "2023-03-26T18:28:56.146Z",
    },
    {
        id: "cardano",
        symbol: "ada",
        name: "Cardano",
        image: "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
        current_price: 0.356418,
        market_cap: 12497290616,
        market_cap_rank: 7,
        fully_diluted_valuation: 16047303280,
        total_volume: 292452483,
        high_24h: 0.362489,
        low_24h: 0.350419,
        price_change_24h: -0.000728072228439014,
        price_change_percentage_24h: -0.20386,
        market_cap_change_24h: -100126346.03154373,
        market_cap_change_percentage_24h: -0.79482,
        circulating_supply: 35045020830.3234,
        total_supply: 45000000000.0,
        max_supply: 45000000000.0,
        ath: 3.09,
        ath_change_percentage: -88.44778,
        ath_date: "2021-09-02T06:00:10.474Z",
        atl: 0.01925275,
        atl_change_percentage: 1752.23823,
        atl_date: "2020-03-13T02:22:55.044Z",
        roi: null,
        last_updated: "2023-03-26T18:28:58.431Z",
    },
    {
        id: "dogecoin",
        symbol: "doge",
        name: "Dogecoin",
        image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
        current_price: 0.074763,
        market_cap: 10373392230,
        market_cap_rank: 8,
        fully_diluted_valuation: null,
        total_volume: 408778062,
        high_24h: 0.075686,
        low_24h: 0.073516,
        price_change_24h: -5.1951573423276e-5,
        price_change_percentage_24h: -0.06944,
        market_cap_change_24h: -46878521.901268005,
        market_cap_change_percentage_24h: -0.44988,
        circulating_supply: 138681646383.705,
        total_supply: null,
        max_supply: null,
        ath: 0.731578,
        ath_change_percentage: -89.77548,
        ath_date: "2021-05-08T05:08:23.458Z",
        atl: 8.69e-5,
        atl_change_percentage: 85972.64234,
        atl_date: "2015-05-06T00:00:00.000Z",
        roi: null,
        last_updated: "2023-03-26T18:29:09.240Z",
    },
    {
        id: "staked-ether",
        symbol: "steth",
        name: "Lido Staked Ether",
        image: "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
        current_price: 1764.27,
        market_cap: 10370392828,
        market_cap_rank: 9,
        fully_diluted_valuation: 10370392828,
        total_volume: 11194321,
        high_24h: 1807.59,
        low_24h: 1715.53,
        price_change_24h: 10.85,
        price_change_percentage_24h: 0.61892,
        market_cap_change_24h: 78200442,
        market_cap_change_percentage_24h: 0.7598,
        circulating_supply: 5866640.53065457,
        total_supply: 5866640.53065457,
        max_supply: 5866640.53065457,
        ath: 4829.57,
        ath_change_percentage: -63.44535,
        ath_date: "2021-11-10T14:40:47.256Z",
        atl: 482.9,
        atl_change_percentage: 265.59254,
        atl_date: "2020-12-22T04:08:21.854Z",
        roi: null,
        last_updated: "2023-03-26T18:28:48.093Z",
    },
    {
        id: "matic-network",
        symbol: "matic",
        name: "Polygon",
        image: "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
        current_price: 1.1,
        market_cap: 9989021120,
        market_cap_rank: 10,
        fully_diluted_valuation: 11000556296,
        total_volume: 390101772,
        high_24h: 1.12,
        low_24h: 1.073,
        price_change_24h: 0.00972148,
        price_change_percentage_24h: 0.89187,
        market_cap_change_24h: 42749452,
        market_cap_change_percentage_24h: 0.4298,
        circulating_supply: 9080469069.28493,
        total_supply: 10000000000.0,
        max_supply: 10000000000.0,
        ath: 2.92,
        ath_change_percentage: -62.27619,
        ath_date: "2021-12-27T02:08:34.307Z",
        atl: 0.00314376,
        atl_change_percentage: 34893.93522,
        atl_date: "2019-05-10T00:00:00.000Z",
        roi: {
            times: 417.14953422632584,
            currency: "usd",
            percentage: 41714.953422632585,
        },
        last_updated: "2023-03-26T18:29:04.660Z",
    },
];

function CryptoTable() {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format;

    return (
        <Table className="rounded-extra-large">
            <TableHead>
                <TableRow>
                    {headerData.map((header) => (
                        <TableHeaderCell
                            key={header.id}
                            data={header.name}
                        />
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {coins?.map((body) => (
                    <TableRow key={body.id}>
                        <TableCell>
                            <Checkbox id="checkbox" />
                        </TableCell>
                        <TableCell>
                            <Img
                                size={32}
                                radius={999}
                                src={body.image}
                            />
                        </TableCell>
                        <TableCell>{body.name}</TableCell>
                        <TableCell>
                            <IconButton
                                icon={<MdAdd size={18} />}
                                variant={"tonal"}
                            />
                        </TableCell>
                        <TableCell
                            className={"uppercase text-on-surface-variant"}>
                            {body.symbol}
                        </TableCell>
                        <TableCell
                            data={formatter(
                                parseFloat(String(body.current_price))
                            )}
                        />
                        <TableCell>
                            <Chips
                                leftElement={<MdVerticalAlignTop size={18} />}
                                className="text-green-600 dark:text-green-500"
                                text={formatter(
                                    parseFloat(String(body.high_24h))
                                )}
                            />
                        </TableCell>
                        <TableCell>
                            <Chips
                                leftElement={
                                    <MdVerticalAlignBottom size={18} />
                                }
                                className="text-red-600 dark:text-red-500"
                                text={formatter(
                                    parseFloat(String(body.low_24h))
                                )}
                            />
                        </TableCell>
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
    );
}

export {CryptoTable};
