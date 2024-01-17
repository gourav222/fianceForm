import { Box, Input, Select, Text, Button } from "@chakra-ui/react";
import { sendemailOTP, verifyOtp, resentOTP } from "../Service/HandleFormData";
import { ChevronDownIcon } from "@chakra-ui/icons";
const InputFiled = ({
  title,
  selection,
  description,
  type,
  data,
}: {
  title: string;
  selection: Array<any>;
  description: string;
  type: string;
  data: any;
}) => {
  const handleOnChange = (e: any) => {
    data.current.value = e.target.value;
  };
  return (
    <Box
      display={"flex"}
      w={"60%"}
      mt={"2%"}
      alignItems={"center"}
      justifyItems={"center"}
    >
      <Box w={"40%"}>
        <Text>{title}</Text>
        {description && (
          <Text fontSize={"12px"} w={"70%"}>
            {description}
          </Text>
        )}
      </Box>
      {type === "radio" ? (
        <Select
          ref={data}
          onChange={handleOnChange}
          icon={<ChevronDownIcon />}
          placeholder="Select"
          border={"1px solid #0E4059"}
          borderRadius={"5px"}
        >
          {selection.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </Select>
      ) : (
        <Input
          border={"1px solid #0E4059"}
          borderRadius={"5px"}
          ref={data}
          onChange={handleOnChange}
        />
      )}
    </Box>
  );
};

export const ApplicantField = ({
  placeholder,
  data,
}: {
  placeholder: string;
  data: any;
}) => {
  const handleSendOTP = () => {
    if (placeholder === "Email Id" && data.current.value.length !== 0) {
      sendemailOTP({ email: data.current.value });
    }
  };
  return (
    <Box w={"71%"}>
      <Input
        onChange={(e) => {
          data.current.value = e.target.value;
        }}
        ref={data}
        placeholder={placeholder}
        w={"75%"}
        mt={6}
        border={"1px solid #0E4059"}
      />
      <Button
        bg="white"
        color={"#1EA596"}
        border={"1px solid #1EA596"}
        ml={"5%"}
        w={"20%"}
        onClick={() => handleSendOTP()}
      >
        Send OTP
      </Button>
    </Box>
  );
};
export const VerifyOtpField = ({
  data,
  type,
  toVerify,
}: {
  data: any;
  type: any;
  toVerify: any;
}) => {
  const handleVerifyOtp = () => {
    if (type === "email") {
      verifyOtp({ otp: data.current.value, email: toVerify.current.value });
    }
  };
  const handleResendOtp = () => {
    if (type === "email") {
      resentOTP({ email: toVerify.current.value });
    }
  };
  return (
    <Box
      display={"flex"}
      w={"71%"}
      justifyContent={"space-between"}
      alignItems={"end"}
    >
      <Input
        onChange={(e) => {
          data.current.value = e.target.value;
        }}
        placeholder="Enter OTP"
        ref={data}
        w={"55%"}
        mt={6}
        border={"1px solid #0E4059"}
      />
      <Button
        w="20%"
        bg={"#1EA596"}
        color={"white"}
        onClick={() => handleVerifyOtp()}
      >
        Verify
      </Button>
      <Button bg={"white"} color={"#1EA596"} border={"1px solid #1EA596"}>
        Re-Send OTP
      </Button>
    </Box>
  );
};

export const UploadFiles = ({
  type,
  card,
  setCard,
}: {
  type: string;
  card: any;
  setCard: any;
}) => {
  return (
    <Box
      w={"71%"}
      display={"flex"}
      alignItems={"center"}
      borderRadius={"5px"}
      mt={6}
    >
      <Text w="60%">Upload scanned copy of {type} Card</Text>
      <Input
        // variant='unstyled'
        p={1}
        // color='teal'
        value={card}
        onChange={(e) => {
          setCard(e.target.value);
        }}
        type="file"
        placeholder="Choose File"
        bg="white"
        color={"#1EA596"}
        border={"1px solid #1EA596"}
        ml={"0%"}
        w={"17%"}
      />
      <Button
        bg="#1EA596"
        color={"white"}
        border={"1px solid #1EA596"}
        ml={"5%"}
        w={"20%"}
      >
        Upload
      </Button>
    </Box>
  );
};
export default InputFiled;
