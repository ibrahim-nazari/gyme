import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
  return (
    <Box mt="40px" bgcolor="#ede3c0">
      <Stack
        gap="40px"
        alignItems="center"
        justifyContent="center"
        px="50px"
        pt="20px"
      >
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h4">Made by Ibrahim</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
