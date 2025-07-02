import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
  return <Container sx={{ background: "red" }}>Propert Detail</Container>;
};

export default withLayoutBasic(PropertyDetail);
