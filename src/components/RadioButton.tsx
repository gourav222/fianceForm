import { Box, Text, Select } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
const RadioButton = (props: any) => {
  return (
    <>
      <Box display={"flex"} mt={6} justifyContent={"space-between"}>
        <Text w={"30%"}>{props.title}</Text>
        <Box w={"60%"} display={"flex"}>
          {props.type === "radio" ? (
            <RadioGroup
              onChange={props.setValue}
              value={props.value}
              ref={props.data}
            >
              <Stack direction="row">
                {props.buttonData.map((item: any, index: number) => (
                  <Radio ml={4} key={item} value={props.toChange[index]}>
                    {item}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          ) : (
            <Select
              ref={props.data}
              onChange={(e) => (props.data.current.value = e.target.value)}
              w="60%"
              placeholder="Select"
              border={"1px solid #0E4059"}
              borderRadius={"5px"}
            >
              {props.optionData.map((item: any,i:any) => (
                <option key={i} value={item}>{item}</option>
              ))}
            </Select>
          )}
        </Box>
      </Box>
    </>
  );
};

export default RadioButton;
