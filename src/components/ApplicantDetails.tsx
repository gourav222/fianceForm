import { Box, Input, Text } from "@chakra-ui/react";
import { ApplicantField, VerifyOtpField, UploadFiles } from "./InputFiled";
import DateOfBirth from "./DatePicker";
const ApplicantDetails = ({
  applicantDetail,
  setDateOfBirth,
  panCard,
  setPanCard,
  aadharCard,
  setAadharCard,
}: {
  applicantDetail: any;
  setDateOfBirth: any;
  panCard: any;
  aadharCard: any;
  setPanCard: any;
  setAadharCard: any;
}) => {
  return (
    <>
      <Box w={"60%"} mt={14}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text bg={"#0E4059"} color={"white"} w="15%" p={2}>
            Applicant Details
          </Text>
          <Text bg={"#0E4059"} color={"white"} w="71%" p={2}>
            1st Account Holder Details
          </Text>
        </Box>

        <Box display={"flex"} flexDirection={"column"} alignItems={"end"}>
          <Input
            ref={applicantDetail[0]}
            onChange={(e) => {
              applicantDetail[0].current.value = e.target.value;
            }}
            placeholder="Applicant Name"
            w={"71%"}
            mt={6}
            border={"1px solid #0E4059"}
          />
          <ApplicantField placeholder="Contact No." data={applicantDetail[1]} />
          <VerifyOtpField data={applicantDetail[2]} type="phoneNumber" toVerify={applicantDetail[1]}/>
          <ApplicantField placeholder="Email Id" data={applicantDetail[3]}/>
          <VerifyOtpField data={applicantDetail[4]} type="email" toVerify={applicantDetail[3]}/>
          <Input
            onChange={(e) => {
              applicantDetail[5].current.value = e.target.value;
            }}
            ref={applicantDetail[5]}
            placeholder="PAN No."
            w={"71%"}
            mt={6}
            border={"1px solid #0E4059"}
          />

          <Box display={"flex"} w={"71%"} flexDirection={"column"} mt={6}>
            <Text>Date Of Birth</Text>
            <DateOfBirth setDateOfBirth={setDateOfBirth} />
          </Box>
          <UploadFiles type={"PAN"} card={panCard} setCard={setPanCard} />

          <UploadFiles
            type={"Aadhaar"}
            card={aadharCard}
            setCard={setAadharCard}
          />
        </Box>
      </Box>
    </>
  );
};

export default ApplicantDetails;
