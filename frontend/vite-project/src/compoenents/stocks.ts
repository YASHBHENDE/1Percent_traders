
// ,,ipoDate,delistingDate,status

enum instrumentType {
    STOCK = "stock",
    ETF = "etf"
}

export interface stockType {
    symbol: string,
    name: string,
    exchange: string,
    assetType: instrumentType.ETF | instrumentType.STOCK,
    ipoDate: string,
    delistingDate: string | null,
    status: string
}
export type fundamentalType = {
    Symbol: string;
    AssetType: string;
    Name: string;
    Description: string;
    CIK: string;
    Exchange: string;
    Currency: string;
    Country: string;
    Sector: string;
    Industry: string;
    Address: string;
    FiscalYearEnd: string;
    LatestQuarter: string; // Assuming this is a date string, it might be better to use a Date type if you need date operations
    MarketCapitalization: string;
    EBITDA: string;
    PERatio: string;
    PEGRatio: string;
    BookValue: string;
    DividendPerShare: string;
    DividendYield: string;
    EPS: string;
    RevenuePerShareTTM: string;
    ProfitMargin: string;
    OperatingMarginTTM: string;
    ReturnOnAssetsTTM: string;
    ReturnOnEquityTTM: string;
    RevenueTTM: string;
    GrossProfitTTM: string;
    DilutedEPSTTM: string;
    QuarterlyEarningsGrowthYOY: string;
    QuarterlyRevenueGrowthYOY: string;
    AnalystTargetPrice: string;
    AnalystRatingStrongBuy: string;
    AnalystRatingBuy: string;
    AnalystRatingHold: string;
    AnalystRatingSell: string;
    AnalystRatingStrongSell: string;
    TrailingPE: string;
    ForwardPE: string; // Assuming this is missing from the initial list
    PriceToSalesRatioTTM: string;
    PriceToBookRatio: string;
    EVToRevenue: string;
    EVToEBITDA: string;
    Beta: string;
    '52WeekHigh': string;
    '52WeekLow': string;
    '50DayMovingAverage': string;
    '200DayMovingAverage': string;
    SharesOutstanding: string;
    DividendDate: string;
    ExDividendDate: string;
  };
  

export type SearchStocks = stockType[]
const stocks: SearchStocks = [
    {
        symbol: "A",
        name: "Agilent Technologies Inc",
        exchange: "NYSE",
        assetType: instrumentType.STOCK,
        ipoDate: "1999-11-18",
        delistingDate: null,
        status: "Active"
    },
    {
        symbol: "AA",
        name: "Alcoa Corp",
        exchange: "NYSE",
        assetType: instrumentType.STOCK,
        ipoDate: "2016-10-18",
        delistingDate: null,
        status: "Active"
    },
    {
        symbol: "AAA",
        name: "AXS First Priority CLO Bond ETF",
        exchange: "NYSE ARCA",
        assetType: instrumentType.ETF,
        ipoDate: "2020-09-09",
        delistingDate: null,
        status: "Active"
    },
    {
        symbol: "AAAU",
        name: "Goldman Sachs Physical Gold ETF",
        exchange: "BATS",
        assetType: instrumentType.ETF,
        ipoDate: "2018-08-15",
        delistingDate: null,
        status: "Active"
    },
    {
        symbol: "AACG",
        name: "ATA Creativity Global",
        exchange: "NASDAQ",
        assetType: instrumentType.STOCK,
        ipoDate: "2008-01-29",
        delistingDate: null,
        status: "Active"
    },
    { symbol: "AACI", name: "Armada Acquisition Corp I", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "2021-11-10", delistingDate: null, status: "Active" },
    { symbol: "AACIU", name: "Armada Acquisition Corp I - Units (1 Ord & 1/2 War)", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "2021-08-13", delistingDate: null, status: "Active" },
    { symbol: "AACIW", name: "Armada Acquisition Corp I - Warrants (13/08/2026)", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "2021-11-11", delistingDate: null, status: "Active" },
    { symbol: "AACT", name: "Ares Acquisition Corporation II - Class A", exchange: "NYSE", assetType: instrumentType.STOCK, ipoDate: "2023-06-12", delistingDate: null, status: "Active" },
    { symbol: "AACT-U", name: "Ares Acquisition Corporation II - Units (1 Ord Class A & 1/2 War)", exchange: "NYSE", assetType: instrumentType.STOCK, ipoDate: "2023-04-21", delistingDate: null, status: "Active" },
    { symbol: "AACT-WS", name: "Ares Acquisition Corporation II - Warrants (01/01/9999)", exchange: "NYSE", assetType: instrumentType.STOCK, ipoDate: "2023-06-12", delistingDate: null, status: "Active" },
    { symbol: "AADI", name: "Aadi Bioscience Inc", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "2017-08-08", delistingDate: null, status: "Active" },
    { symbol: "AADR", name: "ADVISORSHARES DORSEY WRIGHT ADR ETF", exchange: "NASDAQ", assetType: instrumentType.ETF, ipoDate: "2010-07-21", delistingDate: null, status: "Active" },
    { symbol: "AAGR", name: "African Agriculture Holdings Inc", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "2023-12-07", delistingDate: null, status: "Active" },
    { symbol: "AAGRW", name: "African Agriculture Holdings Inc - Warrants (06/12/2028)", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "2023-12-07", delistingDate: null, status: "Active" },
    { symbol: "AAL", name: "American Airlines Group Inc", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "2005-09-27", delistingDate: null, status: "Active" },
    { symbol: "AAMC", name: "Altisource Asset Management Corp", exchange: "NYSE MKT", assetType: instrumentType.STOCK, ipoDate: "2012-12-13", delistingDate: null, status: "Active" },
    { symbol: "AAME", name: "Atlantic American Corp", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "1984-09-07", delistingDate: null, status: "Active" },
    { symbol: "AAN", name: "Aarons Company Inc (The)", exchange: "NYSE", assetType: instrumentType.STOCK, ipoDate: "2020-11-25", delistingDate: null, status: "Active" },
    { symbol: "AAOI", name: "Applied Optoelectronics Inc", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "2013-09-26", delistingDate: null, status: "Active" },
    { symbol: "AAON", name: "AAON Inc", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "1992-12-16", delistingDate: null, status: "Active" },
    { symbol: "AAP", name: "Advance Auto Parts Inc", exchange: "NYSE", assetType: instrumentType.STOCK, ipoDate: "2001-11-29", delistingDate: null, status: "Active" },
    { symbol: "AAPB", name: "GRANITESHARES 1.75X LONG AAPL DAILY ETF", exchange: "NASDAQ", assetType: instrumentType.ETF, ipoDate: "2022-08-09", delistingDate: null, status: "Active" },
    { symbol: "AAPD", name: "DIREXION DAILY AAPL BEAR 1X SHARES", exchange: "NASDAQ", assetType: instrumentType.ETF, ipoDate: "2022-08-09", delistingDate: null, status: "Active" },
    { symbol: "AAPL", name: "Apple Inc", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "1980-12-12", delistingDate: null, status: "Active" },
    { symbol: "AAPR", name: "Innovator Equity Defined Protection ETF - 2 Yr to April 2026", exchange: "BATS", assetType: instrumentType.ETF, ipoDate: "2024-04-01", delistingDate: null, status: "Active" },
    { symbol: "AAPU", name: "DIREXION DAILY AAPL BULL 1.5X SHARES", exchange: "NASDAQ", assetType: instrumentType.ETF, ipoDate: "2022-08-09", delistingDate: null, status: "Active" },
    { symbol: "AAPX", name: "T-Rex 2X Long Apple Daily Target ETF", exchange: "BATS", assetType: instrumentType.ETF, ipoDate: "2024-01-11", delistingDate: null, status: "Active" },
    { symbol: "AAPY", name: "Kurv Yield Premium Strategy Apple (AAPL) ETF", exchange: "BATS", assetType: instrumentType.ETF, ipoDate: "2023-10-27", delistingDate: null, status: "Active" },
    { symbol: "AAT", name: "American Assets Trust Inc", exchange: "NYSE", assetType: instrumentType.STOCK, ipoDate: "2011-01-13", delistingDate: null, status: "Active" },
    { symbol: "AAXJ", name: "ISHARES MSCI ALL COUNTRY ASIA EX JAPAN ETF", exchange: "NASDAQ", assetType: instrumentType.ETF, ipoDate: "2008-08-15", delistingDate: null, status: "Active" },
    { symbol: "AB", name: "AllianceBernstein Holding Lp", exchange: "NYSE", assetType: instrumentType.STOCK, ipoDate: "1988-04-15", delistingDate: null, status: "Active" },
    { symbol: "ABAT", name: "Advanced Battery Technologies Inc", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "2023-09-21", delistingDate: null, status: "Active" },
    { symbol: "ABBV", name: "Abbvie Inc", exchange: "NYSE", assetType: instrumentType.STOCK, ipoDate: "2013-01-02", delistingDate: null, status: "Active" },
    { symbol: "ABCB", name: "Ameris Bancorp", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "1994-05-19", delistingDate: null, status: "Active" },
    { symbol: "ABCL", name: "AbCellera Biologics Inc", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "2020-12-11", delistingDate: null, status: "Active" },
    { symbol: "ABCS", name: "Alpha Blue Capital US Small-Mid Cap Dynamic ETF", exchange: "NASDAQ", assetType: instrumentType.ETF, ipoDate: "2023-12-20", delistingDate: null, status: "Active" },
    { symbol: "ABEO", name: "Abeona Therapeutics Inc", exchange: "NASDAQ", assetType: instrumentType.STOCK, ipoDate: "1980-09-19", delistingDate: null, status: "Active" }
];

export default stocks