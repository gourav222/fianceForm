import { Box, Select } from "@chakra-ui/react";
import { days, months, years } from "../constants/InvestmentData";
import { useEffect, useState } from "react";
const DatePicker = ({ setDateOfBirth }: { setDateOfBirth: any }) => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  useEffect(() => {
    setDateOfBirth(day + "/" + month + "/" + year);
  },[day,month,year])
  return (
    <Box display={"flex"}>
      <Select
        w={"15%"}
        mr={4}
        placeholder="Day"
        border={"1px solid #0E4059"}
        borderRadius={"5px"}
        value={day}
        onChange={(e: any) => setDay(e.target.value)}
      >
        {days.map((item,index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </Select>
      <Select
        w={"20%"}
        placeholder="Month"
        border={"1px solid #0E4059"}
        borderRadius={"5px"}
        value={month}
        onChange={(e: any) => setMonth(e.target.value)}
      >
        {months.map((item,i) => (
          <option key={i} value={item}>{item}</option>
        ))}
      </Select>
      <Select
        w={"15%"}
        ml={4}
        placeholder="Year "
        border={"1px solid #0E4059"}
        borderRadius={"5px"}
        value={year}
        onChange={(e: any) => setYear(e.target.value)}
      >
        {years.map((item,i) => (
          <option key={i} value={item}>{item}</option>
        ))}
      </Select>
    </Box>
  );
};

export default DatePicker;
