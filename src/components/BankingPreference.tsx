import { Box, Input, Text } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { banckPreferenceFields } from "../constants/InvestmentData";
const BankingPreference = ({
  bankPreference,
  bankDetails,
  setBankDetails,
}: {
  bankPreference: any;
  bankDetails: any;
  setBankDetails: any;
}) => {
  return (
    <>
      <Box w={"60%"} mt="6">
        <Box display={"flex"}>
          <Text bg={"#0E4059"} color={"white"} p="2">
            Banking Preference
          </Text>
          <Box
            alignItems={"center"}
            display={"flex"}
            ml={"12.5%"}
            w={"60%"}
            justifyContent={"space-between"}
          >
            <RadioGroup onChange={setBankDetails} value={bankDetails} w="100%">
              <Stack direction="row">
                <Box
                  border={"1px solid #0E4059"}
                  p="2"
                  w="40%"
                  mr={14}
                  borderRadius={5}
                >
                  <Radio value="Cancelled Cheque">Cancelled Cheque</Radio>
                </Box>

                <Box
                  border={"1px solid #0E4059"}
                  p="2"
                  w="40%"
                  borderRadius={5}
                >
                  <Radio value="Bank Details">Bank Details</Radio>
                </Box>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"end"}>
          {banckPreferenceFields.map((item: any, index) => (
            <Input
              key={index}
              onChange={(e) => {
                bankPreference[index + 1].current.value = e.target.value;
              }}
              placeholder={item}
              ref={bankPreference[index + 1]}
              w={"71%"}
              mt={6}
              border={"1px solid #0E4059"}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default BankingPreference;
