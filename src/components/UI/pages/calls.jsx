import { Box, styled } from "@mui/material";
import React from "react";
import Navbar from "../navbar/navbar";

const Component = styled(Box)`
  display: flex;
  background: #e5e5e5;
`;

const CallsPage = () => {
  return (
    <Component>
      <Navbar />
      <Box>Content</Box>
    </Component>
  );
};

export default CallsPage;
