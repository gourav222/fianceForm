import { Box, Text, Select } from "@chakra-ui/react";
import Header from "./Header";
import InvestmentDetails from "./InvestmentDetails";
import ApplicantDetails from "./ApplicantDetails";
import BankingPreference from "./BankingPreference";
import NomieeDetails from "./NomieeDetails";
import RiskProfiler from "./RiskProfiler";
import { useRef, useState } from "react";
import { nomineData } from "../constants/InvestmentData";
import { handleFormData } from "../Service/HandleFormData";
import { generateRandomString } from "../utility/GenerateRandomString";
const Investment = () => {
  const [currentNomiee, setcurrentNomiee] = useState(1);
  const accountType = useRef("");
  const portfolio = useRef("");
  const fundFeeCategory = useRef("");
  const investmentCategory = useRef("");
  const communicationAddress = useRef("");
  const country = useRef("");
  const accountHolder = useRef("");
  const investmentMode = useRef("");
  const quantamInvestment = useRef("");
  const applicantName = useRef("");
  const contactNum = useRef("");
  const numOTP = useRef("");
  const email = useRef("");
  const emailOTP = useRef("");
  const panCardNum = useRef("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [panCard, setPanCard] = useState();
  const [aadharCard, setAadharCard] = useState();
  const [bankDetails, setBankDetails] = useState("Cancelled Cheque");
  const bankName = useRef("");
  const accountNum = useRef("");
  const accountTitle = useRef("");
  const bankIFSC = useRef("");
  const nomieeName = useRef();
  const nomieePan = useRef("");
  const nomieeEmail = useRef();
  const nomieeContactNum = useRef();
  const [nomieeDateOfBirth, setNomieeDateOfBirth] = useState("");
  const nomieeRelation = useRef();
  const nomieePercent = useRef();
  const investMentObj = useRef();
  const riskTolerance = useRef();
  const [investmentExp, setInvestmentExp] = useState("");
  const [investStyle, setInvestStyle] = useState("");
  const [diversified, setDiversified] = useState("");
  const [horizon, setHorizon] = useState("");
  const [capcha, setCapcha] = useState(generateRandomString());
  const reCapcha = useRef('');


  const investDetailsData = [
    accountType,
    portfolio,
    fundFeeCategory,
    investmentCategory,
    communicationAddress,
    country,
    accountHolder,
    quantamInvestment,
    investmentMode,
  ];

  const applicantDetail = [
    applicantName,
    contactNum,
    numOTP,
    email,
    emailOTP,
    panCardNum,
    dateOfBirth,
    panCard,
    aadharCard,
  ];

  const banckPreference = [
    bankDetails,
    bankName,
    accountNum,
    accountTitle,
    bankIFSC,
  ];

  const nomieeDetails = [
    nomieeName,
    nomieePan,
    nomieeEmail,
    nomieeContactNum,
    nomieeDateOfBirth,
    nomieeRelation,
    nomieePercent,
  ];

  const riskProfiler = [
    investmentExp,
    investStyle,
    diversified,
    investMentObj,
    riskTolerance,
    horizon,
    capcha,
    reCapcha
  ];
  const handleFromSubmit = () => {
    handleFormData({
      investDetailsData,
      applicantDetail,
      banckPreference,
      nomieeDetails,
      riskProfiler,
    });
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Header />
      <InvestmentDetails investmentDetailsData={investDetailsData} />
      <ApplicantDetails
        applicantDetail={applicantDetail}
        setDateOfBirth={setDateOfBirth}
        panCard={panCard}
        setPanCard={setPanCard}
        aadharCard={aadharCard}
        setAadharCard={setAadharCard}
      />
      <BankingPreference
        bankPreference={banckPreference}
        bankDetails={bankDetails}
        setBankDetails={setBankDetails}
      />
      <Box justifyContent={"space-between"} w="60%" mt={6} display={"flex"}>
        <Text bg={"#0E4059"} color={"white"} p="2" w="20%">
          Nominee Details
        </Text>
        <Select
          w="71%"
          placeholder="Select"
          border={"1px solid #0E4059"}
          borderRadius={"5px"}
          value={currentNomiee}
          onChange={(e: any) => {
            setcurrentNomiee(e.target.value);
          }}
        >
          {nomineData.map((item,i) => (
            <option key={i} value={item}>{item}</option>
          ))}
        </Select>
      </Box>
      {/* {numberOfNomiee.map((items: any) => ( */}
      <NomieeDetails
        nomieeDetails={nomieeDetails}
        setDateOfBirth={setNomieeDateOfBirth}
      />

      <RiskProfiler
        handleFromSubmit={handleFromSubmit}
        investmentExp={investmentExp}
        investStyle={investStyle}
        diversified={diversified}
        horizon={horizon}
        setHorizon={setHorizon}
        setInvestmentExp={setInvestmentExp}
        setInvestStyle={setInvestStyle}
        setDiversified={setDiversified}
        investMentObj={investMentObj}
        riskTolerance={riskTolerance}
        setCapcha={setCapcha}
        capcha={capcha}
        reCapcha={reCapcha}
      />
    </Box>
  );
};

export default Investment;
