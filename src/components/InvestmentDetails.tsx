import { Box, Text } from "@chakra-ui/react";
import { inputFildsData } from "../constants/InvestmentData";
import InputFiled from "./InputFiled";
const InvestmentDetails = ({
  investmentDetailsData,
}: {
  investmentDetailsData: Array<any>;
}) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"start"}
        justifyContent={"center"}
        flexDirection={"column"}
        p={5}
        h="2"
        bg={"#0E4059"}
        color={"white"}
        w={"60%"}
      >
        <Text fontSize="lg">Investment Details</Text>
      </Box>

      {inputFildsData.map((item, index) => (
        <InputFiled
          key={item.title}
          data={investmentDetailsData[index]}
          title={item.title}
          selection={item.selection}
          description={item.description}
          type={item.type}
        />
      ))}
    </>
  );
};

export default InvestmentDetails;
