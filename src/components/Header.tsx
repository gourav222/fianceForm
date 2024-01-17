import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      p={5}
    >
      <Text color={"#0E4059"}>Welcome Investor, </Text>
      <Text color={"#1EA596"} fontWeight={"bold"}>
        "To World Of Sustainable Wealth Creation"
      </Text>
      <Text w="90%" textAlign={"center"} color={"#0E4059"}>
        A Financial Journey filled with capitalization of enormous wealth
        opportunity in an economic transition.
      </Text>
    </Box>
  );
};

export default Header;
