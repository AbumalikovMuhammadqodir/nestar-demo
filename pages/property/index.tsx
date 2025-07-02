import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  return <Container sx={{ background: "red" }}>PropertyList</Container>;
};

export default withLayoutBasic(PropertyList);
