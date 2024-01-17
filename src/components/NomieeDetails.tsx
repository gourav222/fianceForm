import { Box, Input, Text } from "@chakra-ui/react";
import { nomieeData } from "../constants/InvestmentData";
import DatePicker from "./DatePicker";

const NomieeDetails = ({
  nomieeDetails,
  setDateOfBirth,
}: {
  nomieeDetails: any;
  setDateOfBirth: any;
}) => {
  const newNomieeData = [
    "Nominee Relationship with 1st Applicant",
    "Nominee (%)",
  ];

  return (
    <>
      <Box w="60%">
        <Box display={"flex"} flexDirection={"column"} alignItems={"end"}>
          <Box w={"71%"} p="2" mt="6" bg="#0E4059">
            <Text color={"white"}>1st Nominee Details</Text>
          </Box>
          {nomieeData.map((item, index) => (
            <Input
              key={item}
              ref={nomieeDetails[index]}
              onChange={(e: any) => {
                nomieeDetails[index].current.value = e.target.value;
              }}
              placeholder={item}
              w={"71%"}
              mt={6}
              border={"1px solid #0E4059"}
            />
          ))}
          <Box display={"flex"} w={"71%"} flexDirection={"column"} mt={6}>
            <Text>Date Of Birth</Text>
            <DatePicker setDateOfBirth={setDateOfBirth} />
          </Box>
          {/* {newNomieeData.map((item) => ( */}
          <Input
            ref={nomieeDetails[5]}
            onChange={(e: any) => {
              nomieeDetails[5].current.value = e.target.value;
            }}
            placeholder={newNomieeData[0]}
            w={"71%"}
            mt={6}
            border={"1px solid #0E4059"}
          />
          <Input
            ref={nomieeDetails[6]}
            onChange={(e: any) => {
              nomieeDetails[6].current.value = e.target.value;
            }}
            placeholder={newNomieeData[1]}
            w={"71%"}
            mt={6}
            border={"1px solid #0E4059"}
          />
          {/* ))} */}
        </Box>
      </Box>
    </>
  );
};

export default NomieeDetails;
