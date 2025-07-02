import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";
import { NextPage } from "next";
const Community: NextPage = () => {
  return <Container sx={{ background: "red" }}>Community</Container>;
};

export default withLayoutBasic(Community);
