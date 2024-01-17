export const accountType = [
  "Savings Account",
  "Current Account",
  "Salary Account",
  "NRI Account",
  "Recurring Deposit (RD) Accounts",
  "Fixed Deposit (FD) Accounts",
];

export const portFolio = [
  "Active Portfolio Strategy",
  "Passive Portfolio Strategy",
  "Short Term Investment Strategies",
  "Long Term Investment Strategies",
  "Low-Risk Investment Strategies",
  "High-Risk Investment Strategies",
];

export const fundFeeCategory = [
  "U.S. Equities",
  "Sector Equities",
  "Allocation",
  "International Equities",
  "Taxable Bond",
  "Municipal Bond",
  "Alternative",
  "Commodities",
  "All funds",
];

export const numOfAccouts = [1, 2, 3, 4, 5, 6, 7, 8];

export const bonds = ["Stocks", "Fixed Deposits", "Mutual Funds"];

export const investmentCategory = [
  "Ownership Investments",
  "Lending Investments",
  "Cash Equivalents",
];
export const description =
  "Preview only when systematic transfer plan is selected";

export const communicationAddress =
  "(All further deliverables will be communicated on this address)";

export const category = "Fees preview according to selection";

export const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
export const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
export const nomineData = ["1"];
export const investmentObj = ["Future saving", "Health"];

export const termsPolicy =
  "I / We understand, the above informatio provided is correct to the best of my knowledge / belief, and understand the adversities / risk tolerance arising from mis - placement of information / data in any manner";

export const investmentExpData = ["0-3 yr", "3-5 yr", "5-7 yr", ">7 yr"];

export const investmentStyle = ["Active", "Passive"];
export const horizonData = ["<3 yr", "3-5 yr", "5-7 yr", ">10 yr"];
export const deversifiedData = ["Accumulate", "Hold", "Reduce", "Exit"];

export const banckPreferenceFields = [
  "Bank Name",
  "Account No.",
  "Account Title",
  "Bank IFSC Code",
];

export const country = ["India", "USA", "JAPAN"];
export const nomieeData = [
  "Nominee Name",
  "Nominee PAN",
  "Nominee EmailId",
  "Nominee Contact No.",
];
export const inputFildsData = [
  {
    title: "Account Type",
    selection: accountType,
    description: "",
    type: "radio",
  },
  {
    title: "Portfolio/Strategy Name",
    selection: portFolio,
    description: "",
    type: "radio",
  },
  {
    title: "Fund Fees Category",
    selection: fundFeeCategory,
    description: category,
    type: "radio",
  },
  {
    title: "Investment Category",
    selection: investmentCategory,
    description: description,
    type: "radio",
  },
  {
    title: "Communication Address",
    selection: accountType,
    description: communicationAddress,
    type: "text",
  },
  {
    title: "Country Of Tax Residency",
    selection: country,
    description: "",
    type: "radio",
  },
  {
    title: "No. Of Account Holders",
    selection: numOfAccouts,
    description: "",
    type: "radio",
  },
  {
    title: "Quantum Of Investment",
    selection: accountType,
    description: "",
    type: "text",
  },
  {
    title: "Investment Mode",
    selection: bonds,
    description: "",
    type: "radio",
  },
];
