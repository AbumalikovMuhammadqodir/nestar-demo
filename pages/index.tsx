import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container sx={{ background: "red" }}>
      <Box>Top properties</Box>
      <Box>Top agents</Box>
    </Container>
  );
};

export default withLayoutMain(Home);
