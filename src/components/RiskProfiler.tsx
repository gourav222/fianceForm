import { Box, Button, Text, Input } from "@chakra-ui/react";
import { investmentObj } from "../constants/InvestmentData";
import { termsPolicy } from "../constants/InvestmentData";
import {
  investmentExpData,
  investmentStyle,
  deversifiedData,
  horizonData,
} from "../constants/InvestmentData";
import RadioButton from "./RadioButton";
import { generateRandomString } from "../utility/GenerateRandomString";

const RiskProfiler = (props: any) => {
  return (
    <>
      <Box w="60%">
        <Box bg={"#0E4059"} p={2} mt={12}>
          <Text color={"white"}>Investment Risk Profiler</Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          mt={8}
        >
          <Text>
            Welcome to <span style={{ color: "#1EA596" }}>Risk Profiler</span>
          </Text>
          <Text>
            Your Investment is utmost as important as understanding your
            emotional risk appetite
          </Text>
        </Box>

        <Box>
          <RadioButton
            toChange={investmentExpData}
            setValue={props.setInvestmentExp}
            value={props.investmentExp}
            type="radio"
            title={"Investment Experience:"}
            buttonData={investmentExpData}
          />

          <RadioButton
            toChange={investmentStyle}
            setValue={props.setInvestStyle}
            value={props.investStyle}
            type="radio"
            title={"Investment Style"}
            buttonData={investmentStyle}
          />

          <RadioButton
            toChange={deversifiedData}
            type="radio"
            title={
              "How would you react if well diversified portfolio fells below 10%:"
            }
            setValue={props.setDiversified}
            value={props.diversified}
            buttonData={deversifiedData}
          />
          <RadioButton
            data={props.investMentObj}
            type="select"
            title={"Investment Objective"}
            optionData={investmentObj}
          />
          <RadioButton
            data={props.riskTolerance}
            type="select"
            title={"Risk Tolerance"}
            optionData={investmentObj}
          />

          <RadioButton
            toChange={horizonData}
            title="Investment Horizon:"
            type="radio"
            setValue={props.setHorizon}
            value={props.horizon}
            buttonData={horizonData}
          />

          <Box mt={12}>
            <Text color={"#0E4059"}>{termsPolicy}</Text>
          </Box>
          <Box mt={12} mb={14}>
            <Box display={"flex"} alignItems={"center"}>
              <Text
                height={"80px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                bg={"#D9D9D9"}
                w={"20%"}
              >
                {props.capcha}
              </Text>
              <Button
                onClick={() => {
                  props.setCapcha(generateRandomString());
                }}
              >
                Reload
              </Button>
            </Box>

            <Box display={"flex"} flexDirection={"column"}>
              <Text mt={6}>Enter Captcha</Text>
              <Input
                ref={props.reCapcha}
                onChange={(e) => {
                  props.reCapcha.current.value = e.target.value;
                }}
                w={"20%"}
                border={"1px solid #0E4059"}
                borderRadius={"5px"}
              />
              <Button
                mt={6}
                w={"20%"}
                bg={"#1EA596"}
                color={"white"}
                onClick={props.handleFromSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RiskProfiler;
