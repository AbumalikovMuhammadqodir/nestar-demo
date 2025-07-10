import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>Property Detail Mobile</Stack>;
  } else {
    return <Container sx={{ background: "red" }}>Propert Detail</Container>;
  }
};

export default withLayoutBasic(PropertyDetail);
